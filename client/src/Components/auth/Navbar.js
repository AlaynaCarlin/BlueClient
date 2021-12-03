import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
}from 'reactstrap';

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle =() => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
    return(
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Workout Log</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            {/* //We just want to see what our site would look like on a mobile device. You will see that we get a hamburger icon pop up. Click on that, and then you will see our logout button appear. */}
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar >
                    <NavItem>
                    <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;