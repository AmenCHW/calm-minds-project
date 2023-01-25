import React from 'react';
// import {screen} from "@testing-library/react"
import Requirement from './RequirementPage';
import renderer from 'react-test-renderer';

test('first snapshot testing', () => {
  const component = renderer.create(<Requirement />).toJSON();
  expect(component).toMatchSnapshot();
});

// test("render 5 requirenments",()=>{
//     const list=screen.getAllByRole("listitem")
//     console.log(list)
//     expect(list).toHaveLength(5);
// })
