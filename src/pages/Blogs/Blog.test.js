import React from "react";
 import {render,screen } from "@testing-library/react"
import Blogs from "./Blogs";
import renderer from 'react-test-renderer' 

test("first snapshot testing",()=>{
    const component=renderer.create( <Blogs/>).toJSON()  
    expect( component).toMatchSnapshot();
})



test("test healing", async() => {
    render(
       <Blogs title ="Healing" />
   );
 const headingElement = screen.getAllByText(/healing/i);
   expect(headingElement).toBeInTheDocument;
 });
 
 
//  it("test <p> ", async() => {
//      render(
//         <About paragraph ="some cool one liner!" />
//     );
//     const headingElement = screen.getByText(/About/i);  //case sensittive?
//     expect(headingElement).toBeInTheDocument();
//    });