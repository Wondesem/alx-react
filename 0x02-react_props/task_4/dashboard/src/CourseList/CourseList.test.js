import {shallow} from 'enzyme'

import CourseList from './CourseList'
import CourseListRow from './CourseListRow'

describe("Test the CourseList component", ()=>{
    it("tests the existence of component", ()=>{
        const wrapper = shallow(<CourseList/>)
        expect(wrapper.exists()).toBeDefined()
    })
    it("renders the 5 different rows", ()=> {
        const wrapper = shallow(<CourseList/>)
        expect(wrapper.find('thead').children()).toHaveLength(2)
        wrapper.find('thread').children().forEach(node => {
            expect(node.equals(<CourseListRow textFirstCell='Wonde'/>))
        })
        expect(wrapper.find('tbody').children()).toHaveLength(3)
        wrapper.find('tbody').children().forEach(node=>{
            expect(<CourseListRow textFirstCell='sem'/>)
        })
    })
})