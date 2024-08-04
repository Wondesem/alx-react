import {shallow} from 'enzyme'
import Login from './Login'

describe("Login should run without crash", ()=>{
    const wrapper = shallow(<Login/>)
    it("shall render 2 input tags", ()=>{
        expect(wrapper.find('input')).toHaveLength(2)
    })
    it("Shall contain two label tags", ()=>{
        expect(wrapper.find('label')).toHaveLength(2)})
})