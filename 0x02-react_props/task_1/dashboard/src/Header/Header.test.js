import Header from './Header'
import {shallow} from 'enzyme'

describe("Header should run without crashing", ()=>{
const wrapper = shallow(<Header/>)
it("finds img tag", ()=>{
    expect(wrapper.find('.App-logo')).toBeDefi(1)
})
})