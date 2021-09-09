import React, { useEffect, useState } from 'react';

const NoteApp = () => {
  const notesData = JSON.parse(localStorage.getItem('notes'));
  const [notes, setNotes] = useState(notesData || []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const addNote = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      { title, body }
    ]);
    setTitle('');
    setBody('');
  };
  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  });

  return (
    <div>
       <h1>Notes</h1>

       {notes.map((note) => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>x</button>
        </div>
       ))}

       <p>Add Note</p>

       <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>Add Note</button>
       </form>
    </div>
  );
};

export default NoteApp;
