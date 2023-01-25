import {render,screen} from "@testing-library/react"
import Booking from "./BookingPage";
import { AuthContextProvider } from "../../context/AuthContext";

// __________________ toBeInTheDocument ____________________________-

it("text", async() => {
    render(
      <AuthContextProvider > < Booking  title ="RIGHT" /></AuthContextProvider>
   );
  const headingElement = screen.getByText(/RIGHT/i);
   expect(headingElement).toBeInTheDocument();
  });
  

  