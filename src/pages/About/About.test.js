import React from "react";
// import {render} from "@testing-library/react"
import About from "./About";
import renderer from 'react-test-renderer' 

test("first snapshot testing",()=>{
    const component=renderer.create( <About/>).toJSON()  
    expect( component).toMatchSnapshot();
})
