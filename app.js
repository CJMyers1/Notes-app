const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create Add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create Remove command
yargs.command({
  command: "remove",
  describe: "Removes a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create List Command
yargs.command({
  command: "list",
  describe: "List the notes",
  handler() {
    notes.listNotes();
  },
});

// Create Read Command
yargs.command({
  command: "read",
  describe: "Reads note",
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// Add, Remove, Read, List

yargs.parse();

// console.log(yargs.argv)
