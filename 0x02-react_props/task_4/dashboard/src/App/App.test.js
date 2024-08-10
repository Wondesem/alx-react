
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import App from './App';
import { shallow } from 'enzyme';

describe('App tests', () => {
	it('renders without crashing', () => {
		const component = shallow(<App />);

		expect(component).toBeDefined();
	});
	it('should contain Notifications', () => {
		const component = shallow(<App />);

		expect(component.contains(<Notifications/>)).toBe(true);
	});
	it('should contain Header', () => {
		const component = shallow(<App />);

		expect(component.contains(<Header/>)).toBe(true);
	});
	it('should contain Login', () => {
		const component = shallow(<App />);

		expect(component.contains(<Login/>)).toBe(true);
	});
	it('should contain Footer', () => {
		const component = shallow(<App />);

		expect(component.contains(<Footer/>)).toBe(true);
	});
	it("does not render courselist if logged out", ()=>{
		const component = shallow(<App/>)

		component.setProps({isLogged:false})
		expect(component.contains(<CourseList/>)).toBe(false)
	})
	it('renders courselist if logged in', ()=>{
		const component = shallow(<App isLoggedIn={true}/>)
		expect(component.contains(<CourseList/>)).toBe(true)
		expect(component.contains(<Login/>)).toBe(false)
	})
});