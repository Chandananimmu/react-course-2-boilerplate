import React from "react";

import { shallow } from "enzyme";

import { Header } from "../../components/Header";

test("shud render header correctly", () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});
test("shud logout on button click", () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();
  expect(wrapper).toMatchSnapshot();
});
