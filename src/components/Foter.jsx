import { Footer } from "flowbite-react";

const  Foter = () =>{
  return (
    <Footer container className="" >
      <Footer.Copyright href="#" by="Surendar INDIA" year={2023} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default Foter