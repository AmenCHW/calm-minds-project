import {render,screen} from "@testing-library/react"
//import Ticket from "./Ticket";
import Communicate from "./Communicate";





// ____________________query by ______________________________________
it("address line 2", async() => {
    render(
       <Communicate  title ="Counselor" />
   );
  const headingElement =  screen.queryByText(/WE CAN COMMUNICATE THROUGH /i);
   expect(headingElement).not.toBeInTheDocument();
  });
