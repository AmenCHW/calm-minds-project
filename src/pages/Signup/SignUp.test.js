import {render} from "@testing-library/react"
import MonthSelect from "./MonthSelect";

// ________________________find by _____________
test('renders Career component', () => {
    const { getByText } = render(<MonthSelect />);
    const headingElement = getByText(/jan/i);
    expect(headingElement).toBeTruthy();
  
   
  });

 
  
   