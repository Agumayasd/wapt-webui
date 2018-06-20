import { mount, createLocalVue } from '@vue/test-utils'
import ModalStatusDetails from '@/components/modals/ModalStatusDetails'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

const factory = () => {
  return mount(ModalStatusDetails, {
    localVue,
    // functional: true,
    propsData: {
      status: {
        last_update_status: {
          errors: [],
          running_tasks: [],
          runstatus: "Done: Mise à jour de la liste des paquets disponibles\n158 paquet(s) dans le dépôt\nPaquets à mettre à jour : package-firefox-esr (=60.0.1-7),package-thunderbird (=63)",
          upgrades: [
            "package-thunderbird (=63)",
            "package-firefox-esr (=60.0.1-7)"
          ],
          date: "2018-05-18T13:28:03.539000",
          pending: {
            upgrade: [
              "package-thunderbird (=63)"
            ],
            install: [],
            remove: [
              "package-firefox (=60.0-1)"
            ],
            additional: [
              "package-firefox-esr (=60.0.1-7)"
            ]
          }
        },
        status: "TO-UPGRADE"
      }
    }
  })
}

const getTbodyContent = (tablesArray, id) => {
  const table = tablesArray.at(id)
  return table.find('tbody')
}

describe('ModalStatusDetails', () => {

  it('should render 3 tabs named Errors, Upgrades and Pending ', () => {
    const wrapper = factory()
    // const tabs = wrapper.findAll('b-tabs')
    console.log(wrapper.html())
    // const errorsContent = getTbodyContent(wrapper.findAll(
    //   { name: 'bTable' }),
    //   0
    // )
    //
    // expect(errorsContent.html()).toBe('<tbody class=""><!----><!----><!----></tbody>')
  })

  it('should render an empty errors table', () => {
    const wrapper = factory()
    const errorsContent = getTbodyContent(wrapper.findAll(
      { name: 'bTable' }),
      0
    )

    expect(errorsContent.html()).toBe('<tbody class=""><!----><!----><!----></tbody>')
  })

  it('should render errors badge counter equal to 0', () => {
    const wrapper = factory()
    const badges = wrapper.findAll({ ref: 'bTabButtonHelper' })

    // console.log(badges)
    // const errorsContent = getTbodyContent(wrapper.findAll(
    //   { name: 'bBadge' }),
    //   0
    // )

    // expect(errorsContent.html()).toBe('<tbody class=""><!----><!----><!----></tbody>')
  })
})
