import React from "react";
import { screen ,render } from "@testing-library/react";
import ContactUs from "./ContactUs";

test("renders learn react link", async() => {
    render(
       <ContactUs title ="Healing" />
   );
 const headingElement = screen.getByText(/Healing/i);
   expect(headingElement).toBeInTheDocument();
 });

 