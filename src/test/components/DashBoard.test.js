import React from "react";
import { shallow } from "enzyme";
import DashBoardPage from "../../components/DashBoardPage";
test("shud render DashBoard correctly", () => {
  const wrapper = shallow(<DashBoardPage />);
  expect(wrapper).toMatchSnapshot();
});
