import React from "react";
import {render,screen } from "@testing-library/react"
import Team from "./Team";
import renderer from 'react-test-renderer' 

test("first snapshot testing",()=>{
    const component=renderer.create( <Team/>).toJSON()  
    expect( component).toMatchSnapshot();
})


test("test healing", async() => {
    render(
       <Team title ="Healing" />
   );
 const headingElement = screen.getAllByText(/healing/i);
   expect(headingElement).toBeInTheDocument;
 });

