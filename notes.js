const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note Added!"));
  } else {
    console.log(chalk.red.inverse("Note Title Taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const delNotes = notes.filter((note) => note.title !== title);

  if (notes.length > delNotes.length) {
    console.log(chalk.green.inverse("Note Removed"));
    saveNotes(delNotes);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.blue.inverse("Your Notes."));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const read = notes.find((note) => note.title === title);

  if (read) {
    console.log(chalk.white.inverse(title));
    console.log(read.body);
  } else {
    console.log(chalk.red.bold.inverse("No note found"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
