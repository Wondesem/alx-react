import Header from './Header'
import {shallow} from 'enzyme'

describe("Header should run without crashing", ()=>{
const wrapper = shallow(<Header/>)
it("The Header contains at least one img tag", ()=>{
    expect(wrapper.find('img')).toBeDefined()
})
it("The Header renders h1 tags at least once", ()=>{
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toBe(true)
})
})