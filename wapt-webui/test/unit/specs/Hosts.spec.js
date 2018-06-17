import { mount, createLocalVue } from '@vue/test-utils'
import Hosts from '@/components/Hosts'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

const factory = (values = {}) => {
  return mount(Hosts, {
    localVue,
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

  it('should render table data with last update status in local time format', () => {
    const wrapper = factory()

    const text = getTdTableText(wrapper.findAll('td'), 2)
    expect(text).toEqual('2018-5-18 15:32:42')
  })
})
