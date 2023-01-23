import React from "react";
 import {fireEvent} from "@testing-library/react"
import  SubcribedEmails from "./SubcribedEmails";
import renderer from 'react-test-renderer' 
import { renderHook } from "@testing-library/react-hooks";





test("first snapshot testing",()=>{
    const component=renderer.create( < SubcribedEmails/>).toJSON()  
    expect( component).toMatchSnapshot();
})

const btn=()=>{fireEvent(
   
    getByRole(container,  "button",),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
    
  )
}
console.log(btn)


// 1st time
  describe("when rendered", () => {
    it("expect email to be empty", () => {
      const { result } = renderHook(
        () => <SubcribedEmails />);
      console.log(result)
      expect(result.current.newEmailInput.email).toEqual('');
    });
  });



 
// // 2nd time
// test('expect email to be empty', () => {
//     const { result } = renderHook(() => SubcribedEmails())
  
//     expect(result.current.newEmailInput).toBe("")
    
//   })
 