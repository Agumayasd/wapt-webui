import { mount } from '@vue/test-utils'
import Hosts from '@/components/Hosts'

describe('Hosts', () => {
  it('should render hosts table', () => {
    const wrapper = mount(Hosts, {
      data: {
        items: [
          {
            computer_name: "computer55",
            connected_users: ["hkindellk6"],
            host_status: "ERROR",
            last_update_status: {date: "2018-05-18T13:32:42.138000"}
          }
        ]
      }
    })
    const vm = wrapper.vm
    const table = wrapper.find('td')
    const tdArray = wrapper.findAll('td')
    const firstTd = tdArray.at(0)
    const test = firstTd.vnode.children[0].children[0].text
    console.log(test)
    expect(test).toEqual('computer55')
  })
})
