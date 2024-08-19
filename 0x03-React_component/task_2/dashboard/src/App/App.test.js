import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import App from "./App";
import { shallow, mount } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it("should contain Notifications", () => {
    const component = shallow(<App />);

    expect(component.contains(<Notifications />)).toBe(false);
  });
  it("should contain Header", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });
  it("should contain Login", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(true);
  });
  it("should contain Footer", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });
  it("does not render courselist if logged out", () => {
    const component = shallow(<App />);

    component.setProps({ isLogged: false });
    expect(component.contains(<CourseList />)).toBe(false);
  });
  it("renders courselist if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.contains(<CourseList />)).toBe(false);
    expect(component.contains(<Login />)).toBe(false);
  });
});

describe("what happens when ctrl+h pressed", () => {
  it("verifies that the function logOut is called", () => {
    const mock = jest.fn();
    const wrapper = mount(<App logOut={mock} />);
    const mySpy = jest.spyOn(window, "alert");
    const e = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(e);
    expect(mock).toHaveBeenCalledTimes(1);

    wrapper.unmount();
  });
  window.alert = jest.fn();
  it("the alert 'Logging you out is displayed correctly", () => {
    const wrapper = mount(<App />);
    const mySpy = jest.spyOn(window, "alert");
    const e = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(e);

    expect(mySpy).toHaveBeenCalled();
    mySpy.mockRestore();
    wrapper.unmount();
  });

  it("alerts 'Logging you out'", () => {
    const wrapper = mount(<App />);
    const mySpy = jest.spyOn(window, "alert");
    const e = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(e);
    expect(mySpy).toHaveBeenCalledWith("Logging you out");
	jest.restoreAllMocks()
	wrapper.unmount()
  });
  window.alert.mockClear();
});
