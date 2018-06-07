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


describe('Hosts', () => {
  it('should render table data with computer name', () => {
    const wrapper = factory()

    const wrapper = factory()
    const wrapper = factory()
  })
    const wrapper = factory()
})
