// src/components/DailyLogs.js
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const DailyLogs = () => {
  const [logs, setLogs] = useState({});
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const handleSaveLog = () => {
    setLogs({ ...logs, [date]: content });
    setContent("");
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setContent(logs[selectedDate] || "");
  };

  return (
    <div className="daily-log">
      <h2>Daily Logs</h2>
      <input type="date" value={date} onChange={handleDateChange} />
      <ReactQuill value={content} onChange={setContent} />
      <button onClick={handleSaveLog}>Save Log</button>
      <div className="view-logs">
        <h2>View Logs</h2>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <div
          dangerouslySetInnerHTML={{
            __html: logs[date] || "No logs for this date.",
          }}
        />
      </div>
    </div>
  );
};

export default DailyLogs;
