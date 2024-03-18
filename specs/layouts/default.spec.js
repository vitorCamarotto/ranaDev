import { expect, it, describe } from 'vitest'
import defaultLayout from '../../layouts/default.vue'
import { mount } from '@vue/test-utils'

describe('defualt layout', () => {
  it('renders navbar', () => {
    const wrapper = mount(defaultLayout)

    expect(wrapper.find('[data-test="navbar"]').exists()).toBe(true)
  })
})
