import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Textfield} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
            <div className="demo-big-content">
            <Layout>
                <Header className="blue header"  title="DakwahYuk !" scroll>
                    <Navigation>
                        {/* <Link to="/aboutme">About Me</Link> */}
                        <Link to="/landingpage">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <Textfield
                            onChange={() => {}}
                            label="Expandable Input"
                            expandable
                            expandableIcon="search"
                        />
                    </Navigation>
                </Header>
                <Drawer title="DakwahYuk !">
                    <Navigation>
                        {/* <Link to="/aboutme">About Me</Link> */}
                        {/* <Link to="/resume">Resume</Link> */}
                        <Link to="/landingpage">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                    
                </Content>

            </Layout>
        </div>
    );
  }
}

export default App;
