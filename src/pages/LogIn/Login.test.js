import React from "react";
 import {render, screen} from "@testing-library/react"
import LogIn from "./LogIn";



test("test healing", async() => {
    render(
       <LogIn title ="pass" />
   );
 const headingElement = screen.getAllByText(/name/i);
   expect(headingElement).toBeInTheDocument;
 });

 


//  describe("About component", () => {
//     it("should render About component correctly", () => {
//       render(<About />);
//       const element = screen.getByRole("heading");
//       expect(element).toBeInTheDocument();
//     });
//   });






 
