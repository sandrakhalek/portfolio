import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../theme/GlobalStyles";
import { lightTheme, darkTheme } from "../theme/Theme";
import { useDarkMode } from "../theme/DarkMode";
import Toggle from "../theme/Toggler";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Project from "../project/Project";
import Skills from "../skillsView/SkillsView";
import ProjectDetails from "../ProjectDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />

      <Router>
        <nav className="navbar navbar-expand-lg">
          <Link to="/" className="navbar navbar-brand hoverbale">
            Sandra Abdel Khalek
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon">
              <i class="bx bx-menu-alt-right bx-md"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-link padding-right hoverbale "
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/skills"
                  className="nav-link padding-right hoverbale "
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link padding-right hoverbale ">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/contact"
                  className="nav-link padding-right hoverbale "
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item hoverbale">
                <Toggle theme={theme} toggleTheme={themeToggler} />
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/beanBox">
            <ProjectDetails />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default Header;
