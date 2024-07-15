import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styless from "./Navbar.module.css";
import search from "./assets/search.png";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className={styless.bg_nav}>
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light fw-bold" href="#features">
              बड़ी ख़बर
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#features">
              राजनीति
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#features">
              राष्ट्रीय
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#features">
              विदेश{" "}
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#features">
              राज्य
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#pricing">
              खेल
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#pricing">
              सिनेमा
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#pricing">
              ऑटो
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#pricing">
              टेक
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#pricing">
              धर्म
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#pricing">
              लाइफ़स्टाइल
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#pricing">
              शिक्षा{" "}
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#pricing">
              स्वास्थ्य
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#pricing">
              एडिटर
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#pricing">
              लाइवटीवी
            </Nav.Link>
            <Nav.Link className="text-light fw-bold" href="#pricing">
              एडिटर
            </Nav.Link>

            <NavDropdown
              title="अन्य"
              id="collapsible-nav-dropdown"
              menuVariant="dark"
              variant="secondary"
              className="text-light fw-bold "
            >
              <NavDropdown.Item
                className="text-light fw-bold "
                href="#action/3.1 "
              >
                खेत-खलिहान
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-light fw-bold"
                href="#action/3.2"
              >
                हिन्दी ख़बर
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-light fw-bold"
                href="#action/3.3"
              >
                स्पेशल ब्लॉग
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-light fw-bold "
                href="#action/3.2"
              >
                प्रोग्राम वीडियो
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-light fw-bold "
                href="#action/3.2"
              >
                हिन्दी ख़बर
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="text-light fw-bold "
                href="#action/3.4"
              >
                संपर्क करें
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
        <Nav.Link className="text-light fw-bold" href="#pricing">
          <img src={search} className={styless.search} />
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
