// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Schedule from "./components/Schedule";
import DailyLogs from "./components/DailyLogs";
import DailyTaskManager from "./components/DailyTaskManager";
import CompletionRatio from "./components/CompletionRatio";
import Notes from "./components/Notes";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Weekly Schedule</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Schedule</Link>
            </li>
            <li>
              <Link to="/logs">Daily Logs</Link>
            </li>
            <li>
              <Link to="/tasks">Daily Task Manager</Link>
            </li>
            <li>
              <Link to="/completion">Completion Ratio</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Schedule />} />
          <Route path="/logs" element={<DailyLogs />} />
          <Route path="/tasks" element={<DailyTaskManager />} />
          <Route path="/completion" element={<CompletionRatio />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
