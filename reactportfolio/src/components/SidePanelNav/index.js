import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


  const SidePanelNav = ({isOpen, setIsOpen}) => {
      const styles = {
          container: {
              display:'flex'
          }
      }
      return (
      <div style={styles.container}>
          <nav>
              <Router>
            <div onClick={() => setIsOpen(false)}>
                <Link to='/portfolio'>Portfolio</Link>
            </div>
            </Router>
          </nav>
      </div>
      )
  }

  export default SidePanelNav;