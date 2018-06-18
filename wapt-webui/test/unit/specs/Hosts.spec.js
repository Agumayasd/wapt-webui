import { mount, createLocalVue } from '@vue/test-utils'
import Hosts from '@/components/Hosts'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

const factory = (values = {}, stubs = []) => {
  return mount(Hosts, {
    localVue,
    stubs: stubs,
    data () {
      return {
        items: [
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
      }
    }
  })
}

const getTdTableText = (tdArray, id) => {
  const td = tdArray.at(id)
  const div = td.find('div')
  return div.text()
}

describe('Hosts', () => {
  it('should render table data with computer name', () => {
    const wrapper = factory()

    const text = getTdTableText(wrapper.findAll('td'), 0)
    expect(text).toEqual('computer55')
  })

  it('should render table data with host status', () => {
    const wrapper = factory()

    const text = getTdTableText(wrapper.findAll('td'), 1)
    expect(text).toEqual('ERROR')
  })

  it('should return badge class danger if host_status is ERROR', () => {
    const wrapper = factory()
    const bagdeClass = wrapper.vm.badgeHostStatus('ERROR')
    expect(bagdeClass).toEqual('danger')
  })

  it('should return badge class warning if host_status is TO-UPGRADE', () => {
    const wrapper = factory()
    const bagdeClass = wrapper.vm.badgeHostStatus('TO-UPGRADE')
    expect(bagdeClass).toEqual('warning')
  })

  it('should return badge class success if host_status is OK', () => {
    const wrapper = factory()
    const bagdeClass = wrapper.vm.badgeHostStatus('OK')
    expect(bagdeClass).toEqual('success')
  })

  it('should reset host object when modal status details is closed', () => {
    const wrapper = mount(Hosts, {
      stubs: ['b-modal', 'b-container', 'b-table']
    })
    wrapper.setData({host: '{status: "OK"}'})
    wrapper.vm.resetModalStatusDetails()
    expect(wrapper.vm.host).toEqual({})
  })

  it('should return badge class success if host_status is OK', () => {
    // const wrapper = mount(Hosts, {
    //   localVue,
    //   stubs: ['b-modal']
    // })
    const wrapper = factory(['b-modal'])
    const badges = wrapper.findAll('.badge')
    // console.log(wrapper.html())
    badges.at(0).trigger('click')
    // const bagdeClass = wrapper.vm.badgeHostStatus('OK')
    // expect(bagdeClass).toEqual('success')
  })
})
