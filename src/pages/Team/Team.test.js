import React from "react";
import {render,screen} from "@testing-library/react"
import Team from "./Team";

// _________________getAllByText_________________
test("test healing", async() => {
    render(
       <Team  title ="Healing" />
   );
 const headingElement = screen.getAllByText(/Team/i);
   expect(headingElement).toBeInTheDocument;
 });


// _________________testing title with query_________________
it("test <p> ", async() => {
     render(
        < Team  title="about" />
  );
    const headingElement = screen.queryByText(/WE ARE HEALING, NICE TO MEET YOU!/i);  //case sensittive?
    expect(headingElement).toBeInTheDocument();
   });
