import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders feature branch", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/feature branch/i);
  expect(linkElement).toBeInTheDocument();
});
