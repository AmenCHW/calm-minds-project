import {render,screen} from "@testing-library/react"
import Contact from "./ContactUs";
import userEvent from  '@testing-library/user-event';
// import renderer from "react-test-renderer"

//find by
test('renders Career component', () => {
    const { getByText } = render(<Contact />);
    const headingElement = getByText(/Type of contact/i);
    expect(headingElement).toBeTruthy();
  
  });


  // _________________ testing fields ____________________________
it("testing fields submit button", () => {
    render(<Contact />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
  });



// __________________get by text with toBeInTheDocument_____________-
it("address line 3", async() => {
    render(
       <Contact title ="full name" />
   );
  
  
  const headingElement = screen.getByText(/Full Name/);
   expect(headingElement).toBeInTheDocument();
  });
   