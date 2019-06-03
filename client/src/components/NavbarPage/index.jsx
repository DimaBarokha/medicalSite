import React, {Component} from "react";
import {
    MDBCollapse,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem
} from "mdbreact";
import {animateScroll as scroll, Link} from "react-scroll";
import logo from './logo.png'
import {NavLink} from 'react-router-dom'

class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen});
    };
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <MDBNavbar color="default-color" dark expand="md" className="fixed-top">
                <MDBNavbarBrand onClick={this.scrollToTop}>
                    <img src={logo} alt=""/>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse}/>
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar className="ml-5">
                    <MDBNavbarNav left>
                        <MDBNavItem className="nav-item ">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className="nav-link"
                            >
                                О нас
                            </Link>
                        </MDBNavItem>
                        <MDBNavItem>

                            <Link
                                activeClass="active"
                                to="doctors"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav-link"
                            >
                                Врачи
                            </Link>

                        </MDBNavItem>
                        <MDBNavItem>

                            <Link
                                to="branches"
                                offset={-100}
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav-link"
                            >
                                Отделения
                            </Link>

                        </MDBNavItem>
                        <MDBNavItem>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2">Медицинские услуги</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem><NavLink to="/register"> Запись на
                                        прием</NavLink></MDBDropdownItem>
                                    <MDBDropdownItem><NavLink to="/prices"> Просмотр цен</NavLink></MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default NavbarPage;
