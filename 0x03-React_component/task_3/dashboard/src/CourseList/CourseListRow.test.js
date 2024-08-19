import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow shall render without crash", () => {
  it("the component exists", () => {
    const component = shallow(<CourseListRow textFirstCell="Hello" />);
    expect(component.exists()).toBe(true);
  });
  it("Renders one cell with colspan=2 as textSecond sell does not exists", () => {
    const component = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="seminew"
        textSecondCell="Wondosen"
      />
    );
    expect(component.find("tr").children()).toHaveLength(2);
  });
  it("as isHeader is false, it renders 2 td within tr element", () => {
    const component = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="Yigara"
        textSecondCell="Zemero"
      />
    );
    expect(component.find('tr').children()).toHaveLength(2)
    expect(component.find("tr").childAt(0).html()).toEqual("<td>Yigara</td>");
    expect(component.find("tr").childAt(1).html()).toEqual("<td>Zemero</td>");
  });
});
