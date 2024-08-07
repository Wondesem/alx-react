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
		expect(wrapper.html()).toContain(
			'<li data-notification-type="default">test</li>'
  )})
});
