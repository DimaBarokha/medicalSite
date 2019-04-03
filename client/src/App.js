import React, {Component} from "react";
import NavbarPage from './components/NavbarPage/NavbarPage'
import Intro from './components/Intro/Intro'
import About from './components/AboutUs/AboutUs'
import Staff from './components/Staff/Staff'
import Accordion from './components/Branches/Branches'
import panels from './components/Branches/panels'
import Footer from "./components/Footer/Footer";
import Content from "./components/Content"
class App extends Component {
    render() {
        return (
         <>
                <NavbarPage/>
                <Content>
                    <Intro/>
                    <About/>
                    <Staff/>
                    <Accordion panels={panels}/>
                    <Footer/>
                </Content>
       </>
        );
    }
}

export default App;
