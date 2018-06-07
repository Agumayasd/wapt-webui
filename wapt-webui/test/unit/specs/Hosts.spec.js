import { mount } from '@vue/test-utils'
import Hosts from '@/components/Hosts'


const factory = (values = {}) => {
  return mount(Hosts, {
    data: {
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
      ],
      filter: null      
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

  it('should render only computer55 when search computer55', () => {
    const wrapper = factory()
    const input = wrapper.find('input')      
    input.element.value = 'computer55'
    console.log(wrapper.html())

    const text = getTdTableText(wrapper.findAll('td'), 2)
    expect(text).toEqual('2018-5-18 15:32:42')
  })

  // TODO:
  //   * test search filter
  //   * test sort by status
  //   * test per page
})
