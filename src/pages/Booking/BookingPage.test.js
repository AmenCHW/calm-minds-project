import React from "react";
import { AuthContextProvider } from "../../context/AuthContext";
 // import {render,screen } from "@testing-library/react"
import Booking from "./BookingPage";
import renderer from 'react-test-renderer' 

test("first snapshot testing",()=>{
    const component=renderer.create(<AuthContextProvider><Booking/></ AuthContextProvider>).toJSON()  
    expect( component).toMatchSnapshot();
})





