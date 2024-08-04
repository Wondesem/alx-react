import {shallow} from 'enzyme'
import Login from './Login'

describe("Login should run without crash", ()=>{
    const wrapper = shallow(<Login/>)
    it("shall render 2 input tags", ()=>{
        expect(wrapper.contains('input')).toHaveLength(2)
    })
})