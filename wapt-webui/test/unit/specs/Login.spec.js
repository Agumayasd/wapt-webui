import { mount, createLocalVue } from '@vue/test-utils'
import Login from '@/components/Login'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

const factory = () => {
  return mount(Login, {
    localVue
  })
}

describe('Login', () => {
  it('should bind input username with credentials object', () => {
    const wrapper = factory()
    const usernameInput = wrapper.find('#usernameInput')
    usernameInput.setValue('admin')
    expect(wrapper.vm.credentials.username).toEqual('admin')
  })

  it('should bind input password with credentials object', () => {
    const wrapper = factory()
    const passwordInput = wrapper.find('#passwordInput')
    passwordInput.setValue('password')
    expect(wrapper.vm.credentials.password).toEqual('password')
  })

  it('should call login method when click on submit button', () => {
    const wrapper = factory()
    const login = jest.fn();
    wrapper.setMethods({ login: login })
    const loginButton = wrapper.find('#loginButton')
    loginButton.trigger('click')
    expect(login.mock.calls.length).toBe(1);
  })
})
