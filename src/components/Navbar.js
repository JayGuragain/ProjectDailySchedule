import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Schedule</Link>
        </li>
        <li>
          <Link to="/daily-task-manager">Daily Task Manager</Link>
        </li>
        <li>
          <Link to="/daily-logs">Daily Logs</Link>
        </li>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
        <li>
          <Link to="/completion-ratio">Completion Ratio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
