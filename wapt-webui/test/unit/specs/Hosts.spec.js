import { mount } from '@vue/test-utils'
import Hosts from '@/components/Hosts'



const data = {
        items: [
          {
            computer_name: "computer55",
            connected_users: ['user01','user02'],
            host_status: "ERROR",
            last_update_status: {date: "2018-05-18T13:32:42.138000"}
          }
        ]
      }

describe('Hosts', () => {
  it('should render table data with computer name', () => {
    const wrapper = mount(Hosts, data)
    console.log(data)

    const tdArray = wrapper.findAll('td')
    const computerNameTd = tdArray.at(0)
    const div = computerNameTd.find('div')
    expect(div.text()).toEqual('computer55')
  })
})
