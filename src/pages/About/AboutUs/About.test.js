import React from 'react';
import {render,screen} from "@testing-library/react"
import renderer from 'react-test-renderer';
import AboutUs from './AboutUs';

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



test('first snapshot testing', () => {
  const component = renderer.create(<AboutUs/>).toJSON();
  expect(component).toMatchSnapshot();
});

// test("test healing", async() => {
//     render(
//        <About title ="Healing" />
//    );
//  const headingElement = screen.getAllByText(/healing/i);
//    expect(headingElement).toBeInTheDocument;
//  });

//  it("test <p> ", async() => {
//      render(
//         <About paragraph ="some cool one liner!" />
//     );
//     const headingElement = screen.getByText(/About/i);  //case sensittive?
//     expect(headingElement).toBeInTheDocument();
//    });
