import {render,screen} from "@testing-library/react"
import SubcribedEmails from "./SubcribedEmails";
import userEvent from '@testing-library/user-event';
// import { renderHook } from "@testing-library/react-hooks";


// __________________ Testing Email's button ____________________________-

it("should show error message when all the fields are not entered", () => {
    render(<SubcribedEmails />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
  });
 


//    const btn=()=>{fireEvent(

//     getByRole(container,  "button",),
//     new MouseEvent('click', {
//       bubbles: true,
//       cancelable: true,
//     }),

//   )
// }
// console.log(btn)


// // 1st time
//   describe("when rendered", () => {
//     it("expect email to be empty", () => {
//       const { result } = renderHook(
//         () => SubcribedEmails("Test string"));

//       expect(result.current.newEmailInput).toEqual(undefined);
//     });
//   });

