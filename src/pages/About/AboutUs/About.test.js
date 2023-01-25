import React from "react";
import {render,screen} from "@testing-library/react"
import AboutUs from "./AboutUs";
// import renderer from 'react-test-renderer' 

// _________________getAllByText_________________
test("test healing", async() => {
    render(
       <AboutUs title ="Healing" />
   );
 const headingElement = screen.getAllByText(/healing/i);
   expect(headingElement).toBeInTheDocument;
 });


// _________________testing title with getByText_________________
it("test <p> ", async() => {
     render(
        <AboutUs title="about" />
  );
    const headingElement = screen.getByText(/About/i);  //case sensittive?
    expect(headingElement).toBeInTheDocument();
   });


//    // last one ,snapshot
//  test("first snapshot testing",()=>{
//     const component=renderer.create( <AboutUs/>).toJSON()  
//     expect( component).toMatchSnapshot();
// })


// test('first snapshot testing', () => {
//   const component = renderer.create(<About />).toJSON();
//   expect(component).toMatchSnapshot();
// });


// test('first snapshot testing', () => {
//   const component = renderer.create(<About />).toJSON();
//   expect(component).toMatchSnapshot();
// });

