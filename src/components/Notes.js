// src/components/Notes.js
import React, { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState("");

  const saveNotes = () => {
    setSavedNotes(notes);
    localStorage.setItem("notes", notes);
    alert("Notes saved!");
  };

  return (
    <div className="notes">
      <h2>Notes</h2>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your notes here..."
      />
      <button onClick={saveNotes}>Save</button>
      <div className="saved-notes">
        <h3>Saved Notes</h3>
        <div>{savedNotes}</div>
      </div>
    </div>
  );
};

export default Notes;
