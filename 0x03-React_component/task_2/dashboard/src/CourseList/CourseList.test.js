import {shallow} from 'enzyme'

import CourseList from './CourseList'
import CourseListRow from './CourseListRow'
const listCourses = [{
    id: 1,
    name: "React",
    credit: 60
  },
  {
    id: 2,
    name: "JavaScript",
    credit: 40
  },
  {
    id: 3,
    name: "Webpack",
    credit: 20
  }  
  ]

  describe("Test the CourseList component", ()=>{
    it("tests the existence of component", ()=>{
        const wrapper = shallow(<CourseList/>)
        expect(wrapper.exists()).toBeDefined()
    })
    it("renders the 5 different rows", ()=> {
        const wrapper = shallow(<CourseList listCourses={listCourses}/>)
        expect(wrapper.find('thead').children()).toHaveLength(2)
        wrapper.find('thread').children().forEach(node => {
            expect(node.equals(<CourseListRow textFirstCell='Course name' textSecondCell='credit' isHeader={true}/>))
        })
       
    })
    it("renders correctly when listCourses passed", ()=>{
      const wrapper = shallow(<CourseList listCourses={listCourses}/>)
      expect(wrapper.find('tbody').children()).toHaveLength(3)
      expect(wrapper.find('tbody').childAt(0).html()).toEqual('<tr><td>React</td><td>60</td></tr>')
      expect(wrapper.find('tbody').childAt(1).html()).toEqual('<tr><td>JavaScript</td><td>40</td></tr>')
      expect(wrapper.find('tbody').childAt(2).html()).toEqual('<tr><td>Webpack</td><td>20</td></tr>')
     
    })
})