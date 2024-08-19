import { shallow } from "enzyme";

import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../Utils/utils";

const listNotifications = [
  {
    id: 1,
    type: "default",
    value: "New course available",
  },
  {
    id: 2,
    type: "urgent",
    value: "New resume available",
  },
  {
    id: 3,
    type: "urgent",
    html: getLatestNotification(),
  },
];

describe("Notification tests", () => {
  it("renders Notification component without crashing", () => {
    const component = shallow(<Notifications />);

    expect(component).toBeDefined();
  });

  it("lists correct list items", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find("ul").children()).toHaveLength(
      listNotifications.length
    );
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
    expect(wrapper.find("ul").childAt(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
    expect(wrapper.find("ul").childAt(1).html()).toEqual(
      '<li data-notification-type="urgent">New resume available</li>'
    );
    expect(wrapper.find("ul").childAt(2).html()).toEqual(
      `<li data-urgent=\"true\">${getLatestNotification()}</li>`
    );
  });
  it("renders unordered list", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find("ul").children()).toHaveLength(3);
    wrapper.find("ur").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });
  it("shall render the correct text", () => {
    const component = shallow(<Notifications displayDrawer={true} />);
    expect(component.contains(<p>Here is the list of notifications</p>)).toBe(
      false
    );
  });
  it("displays menuItem contain when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find("div.menuItem").exists()).toBe(true);
    expect(wrapper.find("div.menuItem").html()).toEqual(
      '<div class="menuItem"><p>Your notifications</p></div>'
    );
  });
  it('menuItem is not displayed when displayDrawer is true', ()=>{
	const wrapper = shallow(<Notifications displayDrawer={true}/>)
	expect(wrapper.find("div.menuItem").exists()).toBe(true)
  })
  it("Notifications displayed as displayDrawer is true", ()=>{
	const wrapper = shallow(<Notifications displayDrawer={true}/>)
	expect(wrapper.find('div.notifications').exists()).toBe(true)
  })
  it("Notifications not displayed as displayDrawer is false", ()=>{
	const wrapper = shallow(<Notifications displayDrawer={false}/>)
	expect(wrapper.find('div.notifications').exists()).toBe(false)
  })
  it("render No new notification when no listCourses is passed", ()=> {
	const wrapper = shallow(<Notifications displayDrawer={true}/>)
	expect(wrapper.containsMatchingElement(<li data-notification-type='default'>No new notification for now</li>))
  })
  it("renders correct when listNotifications is empty array", ()=>{
	const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>)
	expect(wrapper.containsMatchingElement(<li data-notification-type='default'>No new notification for now</li>))
  })

  it("renders correctly when listCourses with right number of notifications is passsed", ()=>{
	const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>)
	expect(wrapper.find('ul').children()).toHaveLength(3)
	wrapper.find('ul').forEach((node)=>{
		expect(node.equals(<NotificationItem />))
	})
  })
  it("renders 'No new notifications for now' in place of 'Here is your notification' when listNotifications is empty", ()=>{
	const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />)
	expect(wrapper.containsMatchingElement(<li data-notification-type='default'>No new notification for now</li>))
  })
});
describe("On click behaves as Marked property", ()=>{
  it('consoles the right id', ()=> {
    const wrapper = shallow(<NotificationItem/>)
    const mySpy = jest.spyOn(console, 'log').mockImplementation();
    wrapper.instance().markAsRead = mySpy
    wrapper.instance().markAsRead(1)
    expect(wrapper.instance().markAsRead).toBeCalledWith(1)
    expect(mySpy).toBeCalledTimes(1)
    expect(mySpy).toBeCalledWith(1)
    mySpy.mockRestore()
  })
})
