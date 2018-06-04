import { shallowMount } from '@vue/test-utils'
import Hosts from '@/components/Hosts'

describe('Hosts', () => {
  it('should render hosts table', () => {
    const wrapper = shallowMount(Hosts, {
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
    console.log(wrapper)
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
