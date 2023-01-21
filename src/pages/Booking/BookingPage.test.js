import React from "react";
 // import {render,screen } from "@testing-library/react"
import Booking from "./BookingPage";
import renderer from 'react-test-renderer' 

test("first snapshot testing",()=>{
    const component=renderer.create( <Booking/>).toJSON()  
    expect( component).toMatchSnapshot();
})





