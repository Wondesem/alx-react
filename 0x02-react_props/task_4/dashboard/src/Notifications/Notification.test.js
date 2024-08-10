import { shallow } from "enzyme";

import Notifications from "./Notifications";
import { getLatestNotification } from "../Utils/utils";
import NotificationItem from "./NotificationItem";

describe('Notification tests', () => {
	it('renders Notification component without crashing', () => {
		const component = shallow(<Notifications />);

		expect(component).toBeDefined();
	});

	it('does not render if "displayDrawer" is false ', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('ul').children()).toHaveLength(0);
		// expect(wrapper.find('ul').childAt(0).html()).toEqual(
			// "<li data-notification-type=\"default\">New course available</li>"
		// );
		// expect(wrapper.find('ul').childAt(1).html()).toEqual(
		// 	'<li data-notification-type=\"urgent\">New resume available</li>'
		// );
		// expect(wrapper.find('ul').childAt(2).html()).toEqual(
		// 	`<li data-urgent=\"true\">${getLatestNotification()}</li>`
		// );
	});

	it('renders an unordered list', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('ul').children()).toHaveLength(3);
		wrapper.find('ul').forEach((node) => {
			expect(node.equals(<NotificationItem />));
		});
	});

	it('renders correct text', () => {
		const component = shallow(<Notifications />);

		expect(component.find('p').prop('children')).toBe(
			'Your notifications'
		);
	});
	it("displays when displayDrawer prop is false", ()=>{
		const wrapper = shallow(<Notifications />)
		expect(wrapper.find('p').children()).toHaveLength(1)
	  })	
});
