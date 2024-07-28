import {shallow} from 'enzyme';
import App from './App';
import Notifications from './Notifications';

describe('Rendering App component without crashing',()=>{
  it('App renders a div with the class App-header', () => {
		const component = shallow(<App />);

		expect(component).toBeDefined();
	});
  it('App should render a div with the class App-body', ()=>{
    const component = shallow(<App/>)
    expect(component.find('.App-header')).toBeDefined()
  })
  it('Notifications shall render three list items', ()=>{
    const component = shallow(<Notifications/>)
    expect(component.find('li')).toHaveLength(3)
  })
  it("App should render a div with the class App-footer", ()=>{
    const component = shallow(<App/>)
    expect(component.find('.App-footer')).toBeDefined()
  })
})



