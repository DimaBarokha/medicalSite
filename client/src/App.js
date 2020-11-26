import React, {Component} from "react";
import NavbarPage from './components/NavbarPage'
import Index from './components/Intro'
import About from './components/AboutUs'
import Staff from './components/Staff'
import Accordion from './components/Branches'
import panels from './components/Branches/panels'
import Footer from "./components/Footer";
import Content from "./components/Content"

class App extends Component {
    render() {
        return (
            <>
                <NavbarPage/>
                <Content>
                    <Index/>
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
