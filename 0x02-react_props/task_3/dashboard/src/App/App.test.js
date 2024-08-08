
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
});