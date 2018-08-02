import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import {
  renderToString
} from '@vue/server-test-utils'
import ModalStatusDetails from '@/components/modals/ModalStatusDetails'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

const data = {
  last_update_status: {
    errors: [
      "package-keepass (=2.39.1-1) : ERROR"
    ],
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

const factory = () => {
  return mount(ModalStatusDetails, {
    localVue,
    propsData: {
      status: { ...data }
    }
  })
}

const factoryRender = () => {
  return renderToString(ModalStatusDetails, {
    propsData: {
      status: { ...data }
    }
  })
}

describe('ModalStatusDetails', () => {

  it('should render Errors tab with badge equal to 1', () => {
    const renderedString = factoryRender()
    expect(renderedString).toContain('Errors <b-badge>1</b-badge>')
  })

  it('should render Upgrades tab with badge equal to 2', () => {
    const renderedString = factoryRender()
    expect(renderedString).toContain('Upgrades <b-badge>2</b-badge>')
  })

  it('should render Pending tab with badge equal to 3', () => {
    const renderedString = factoryRender()
    expect(renderedString).toContain('Pending <b-badge>3</b-badge>')
  })

  it('upgrades computed should return an array of 2 packages', () => {
    const wrapper = factory()
    const upgrades = wrapper.vm.upgrades
    expect(upgrades).toHaveLength(2)
  })

  it('pending computed should return an array of 3 packages', () => {
    const wrapper = factory()
    const pending = wrapper.vm.pending
    expect(pending).toHaveLength(3)
  })

  it('errors computed should return an array of 1 package', () => {
    const wrapper = factory()
    const errors = wrapper.vm.errors
    expect(errors).toHaveLength(1)
  })
})
