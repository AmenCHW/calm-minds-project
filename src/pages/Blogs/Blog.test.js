import {render,screen} from "@testing-library/react"
import Blogs from "./Blogs";


  // ________________ query ________________________________
  it("test <p> ", async() => {
    render(
       <Blogs title="Healing" />
 );
   const headingElement = screen.queryByText(/Healing/i);  //case sensittive?
   expect(headingElement).toBeInTheDocument();
  });


it("address line 3", async() => {
    render(
       <Blogs title =" SIGN UP FOR THE HEALING BLOG" />
   );
   const headingElement = screen.queryByText(/SIGN UP FOR THE HEALING BLOG/i);
   expect(headingElement).toBeInTheDocument();
 
    })

// _________________get By Text_________________
    test('renders the component', () => {
        const { getByText } = render(<Blogs/>);
        const heading = getByText(/free Blog/i);
        expect(heading).toBeDefined();
      });
      
it("text", async() => {
    render(
       < Blogs title ="RECOMMENED" />
   );
  const headingElement = screen.getByText(/RECOMMENED/i);
   expect(headingElement).toBeInTheDocument();
  });
  