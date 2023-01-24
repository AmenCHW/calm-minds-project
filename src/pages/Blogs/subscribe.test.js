import {render,screen} from "@testing-library/react"
import SubcribedEmails from "./SubcribedEmails";
import userEvent from '@testing-library/user-event';



// __________________ Testing Email's button ____________________________-

it("should show error message when all the fields are not entered", () => {
    render(<SubcribedEmails />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
  });
 
