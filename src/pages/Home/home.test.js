import {render,screen} from "@testing-library/react"
import Ticket from "./Ticket";
import Communicate from "./Communicate";

// __________________get by text with toBeInTheDocument_____________-
it("address line 3", async() => {
    render(
       <Ticket title ="purchasing" />
   );
  
  
  const headingElement = screen.getByText(/Purchase/);
   expect(headingElement).toBeInTheDocument();
  });
   


  
// ____________________query by ______________________________________
it("address line 2", async() => {
    render(
       <Communicate  title ="Counselor" />
   );
  const headingElement =  screen.queryByText(/WE CAN COMMUNICATE THROUGH /i);
   expect(headingElement).not.toBeInTheDocument();
  });
  