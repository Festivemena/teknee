import Home from "./pages/home";
import SlashScreen from "./pages/slash";
import AdminHome from "./pages/admin";
import CreateBlog from "./pages/admin/blog/createBlog";
import CreateProject from "./pages/admin/project/createProject";
import AboutScreen from "./pages/about";
import ServicesScreen from "./pages/services";
import CaseStudyScreen from "./pages/case_study";
import ProjectHome from "./pages/admin/project/projectHome";
import BlogHome from "./pages/admin/blog/blogHome";
import Blog from "./pages/blog";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <SlashScreen />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/admin" component={AdminHome} />
          <Route path="/admin/blog/create" component={CreateBlog} />
          <Route path="/admin/project/create" component={CreateProject} />
          <Route path="/admin/project" component={ProjectHome} />
          <Route path="/admin/blog" component={BlogHome} />
          <Route path="/about">
            <AboutScreen />
          </Route>
          <Route path="/services/:id">
            <ServicesScreen />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>

          <Route path="/case-study/:id">
            <CaseStudyScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
