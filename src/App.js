import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Landing from './Component/Landing';
import Project from './Component/Project';
import Contact from './Component/Contact';
import Resume from './Component/Resume';

function App() {
  return (
      <div>
      <BrowserRouter>
        <div className="demo-big-content">
            <Layout>
                <Header title="Saurabh" className="headerApp" scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/project">Project</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/contact">Contacts</Link>
                    </Navigation>
                </Header>
                <Drawer title="Saurabh" >
                    <Navigation className="headerApp">
                        <Link to="/">Home</Link>
                        
                        <Link to="/project">Project</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/contact">Contacts</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />

                    <div>
                    <Switch>
                      <Route exact path="/" component={Landing}></Route>
                      <Route exact path="/project" component={Project}></Route>
                      <Route exact path="/resume" component={Resume}></Route>
                      <Route exact path="/contact" component={Contact}></Route>


                    </Switch>
                    </div>
                </Content>
            </Layout>
        </div>
      </BrowserRouter>
      </div>
  );
}

export default App;
