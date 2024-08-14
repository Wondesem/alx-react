import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem should run without crashing", () => {
  it("Should render NotificationItem", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });
  it("renders the first child of the component", ()=>{
    const wrapper = shallow(<NotificationItem />);

		wrapper.setProps({ type: 'default', value: 'test' });
		expect(wrapper.html()).toEqual(
			'<li data-notification-type="default">test</li>'
		);
    })
    it(" renders correctly html='<ul>test</ul>' props", ()=>{
      const wrapper = shallow(<NotificationItem/>)

      wrapper.setProps({ html: '<um>test</um>' });
      expect(wrapper.html()).toEqual('<li data-urgent="true"><um>test</um></li>')
    } )
});
