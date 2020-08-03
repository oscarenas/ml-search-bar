import React from "react";
import ReactDOM from "react-dom";
import Breadcums from "../index";

import { render } from "@testing-library/react";

test("AppHeader renders a <Clock />", () => {
  const { getByTestId } = render(<Breadcums />);
});
