import {shallow} from 'enzyme'
import Notifications from './Notifications'

describe("Notifications runs test runs without crashing", ()=>{
    it("runs without failing", ()=> {
      const component = shallow(<Notifications/>)
    expect(component).toBeDefined()
    })
    it('Notifications ul lists', ()=>{
      const component = shallow(<Notifications/>)
      expect(component.find('ul')).toBeDefined()
    })
    it('Notifications renders three list items', ()=>{
      const component = shallow(<Notifications/>)
      expect(component.find('li')).toHaveLength(3)
    })
    it("Notifications shall return 'Here is the list of notifications' correctly", ()=>{
      const component = shallow(<Notifications/>)
      const notificationText = 'Here is the list of notifications'
      expect(component.contains(notificationText)).toEqual(true)
    })
    
  })
  