import React from "react";
import { screen ,render } from "@testing-library/react";
import About from "./About";

test("test healing", async() => {
   render(
      <About title ="Healing" />
  );
const headingElement = screen.getAllByText(/healing/i);
  expect(headingElement).toBeInTheDocument;
});


it("test <p> ", async() => {
    render(
       <About paragraph ="some cool one liner!" />
   );
   const headingElement = screen.getByText(/About/i);  //case sensittive?
   expect(headingElement).toBeInTheDocument();
  });