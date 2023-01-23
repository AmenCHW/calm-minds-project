import React from "react";
 import {render, screen} from "@testing-library/react"
import About from "./About";
import renderer from 'react-test-renderer' 


test("test healing", async() => {
    render(
       <About title ="about" />
   );
 const headingElement = screen.getAllByText(/about/i);
   expect(headingElement).toBeInTheDocument;
 });

 test("test healing", async() => {
    render(
       <About title ="heaing" />
   );
 const headingElement = screen.getAllByText(/healing/i);
   expect(headingElement).toBeInTheDocument;
 });


test("first snapshot testing",()=>{
    const component=renderer.create( <About/>).toJSON()  
    expect( component).toMatchSnapshot();
})



 
 
//  it("test <p> ", async() => {
//      render(
//         <About paragraph ="some cool one liner!" />
//     );
//     const headingElement = screen.getByText(/About/i);  //case sensittive?
//     expect(headingElement).toBeInTheDocument();
//    });