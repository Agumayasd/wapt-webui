import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Hosts from '@/components/Hosts'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

const hosts = [
          {
            computer_name: "computer55",
            host_status: "ERROR",
            last_update_status: {date: "2018-05-18T13:32:42.138000"}
          },
          {
            computer_name: "computer13",
            host_status: "TO-UPGRADE",
            last_update_status: {date: "2018-05-17T11:35:12.138000"}
          },
          {
            computer_name: "computer1",
            host_status: "TO-UPGRADE",
            last_update_status: {date: "2018-05-17T09:45:12.138000"}
          }
        ]

const getTdTableText = (tdArray, id) => {
  const td = tdArray.at(id)
  const div = td.find('div')
  return div.text()
}

describe('Hosts', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      LOAD_WAPT_JSON: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        Wapt: {
          state: {
            waptState: hosts 
          },
          actions
        }
      }
    })
  })

  it('should render table data with computer name', () => {
    const wrapper = mount(Hosts, {store, localVue})

    const text = getTdTableText(wrapper.findAll('td'), 0)
    expect(text).toEqual('computer55')
  })

  it('should render table data with host status', () => {
    const wrapper = mount(Hosts, {store, localVue})

    const text = getTdTableText(wrapper.findAll('td'), 1)
    expect(text).toEqual('ERROR')
  })

  it('should render table data with last update status in local time format', () => {
    const wrapper = mount(Hosts, {store, localVue})

    const text = getTdTableText(wrapper.findAll('td'), 2)
    expect(text).toEqual('2018-5-18 15:32:42')
  })

  it('should return badge class danger if host_status is ERROR', () => {
    const wrapper = shallowMount(Hosts, {store, localVue})
    const bagdeClass = wrapper.vm.badgeHostStatus('ERROR')
    expect(bagdeClass).toEqual('danger')
  })

  it('should return badge class warning if host_status is TO-UPGRADE', () => {
    const wrapper = shallowMount(Hosts, {store, localVue})
    const bagdeClass = wrapper.vm.badgeHostStatus('TO-UPGRADE')
    expect(bagdeClass).toEqual('warning')
  })

  it('should return badge class success if host_status is OK', () => {
    const wrapper = shallowMount(Hosts, {store, localVue})
    const bagdeClass = wrapper.vm.badgeHostStatus('OK')
    expect(bagdeClass).toEqual('success')
  })

  it('should reset host object when modal status details is closed', () => {
    const wrapper = shallowMount(Hosts, {store, localVue, methods: {onFiltered: () => {}}})
    wrapper.setData({host: '{status: "OK"}'})
    wrapper.vm.resetModalStatusDetails()
    expect(wrapper.vm.host).toEqual({})
  })
 
  it('should open modal when click on badge status', () => {
    // Stub ModalStatusDetails component
    const stubs = ['b-modal']
    const showModalStatusDetailsStub = jest.fn();
    const wrapper = mount(Hosts, {
      store,
      localVue,
      stubs: stubs,
      methods: {showModalStatusDetails: showModalStatusDetailsStub}
    })

    const badges = wrapper.findAll('.badge')
    badges.at(0).trigger('click')
    expect(showModalStatusDetailsStub.mock.calls.length).toBe(1);
  })
})
