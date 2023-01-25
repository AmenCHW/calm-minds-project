
import React from "react";
import {render,screen} from "@testing-library/react"
import About from "./About";
import renderer from 'react-test-renderer' 

// _________________getAllByText_________________
test("test healing", async() => {
    render(
       <About title ="Healing" />
   );
 const headingElement = screen.getAllByText(/healing/i);
   expect(headingElement).toBeInTheDocument;
 });


// _________________testing title with getByText_________________
it("test <p> ", async() => {
     render(
        <About title="about" />
  );
    const headingElement = screen.getByText(/About/i);  //case sensittive?
    expect(headingElement).toBeInTheDocument();
   });


   // last one ,snapshot
 test("first snapshot testing",()=>{
    const component=renderer.create( <About/>).toJSON()  
    expect( component).toMatchSnapshot();
})


test('first snapshot testing', () => {
  const component = renderer.create(<About />).toJSON();
  expect(component).toMatchSnapshot();
});