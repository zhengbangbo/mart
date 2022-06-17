import { render } from '@testing-library/vue'
import Header from '@/components/Header'


describe('Header', () => {
  it('should render correct contents', () => {
    const { getByText } = render(Header)
    expect(getByText('尚品汇欢迎您！')).not.toBeNull()
  })
})
