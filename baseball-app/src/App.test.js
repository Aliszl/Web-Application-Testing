import React from "react";
import App from "./App";
// import { render } from '@testing-library/react';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

it("renders without crashing", () => {
  // ready to test!
  const wrapper = rtl.render(<App />);
});
it('renders "baseball sucks" text', () => {
  const wrapper = rtl.render(<App />);
  // IMPORTANT
  // wrapper.queryByText() returns either the node, or null:
  const baseballHeaderText = wrapper.queryByText(/baseball sucks/i);
  expect(baseballHeaderText).toBeInTheDocument();
});
// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
