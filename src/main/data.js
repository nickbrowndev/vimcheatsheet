var data = {
  sections: {
    cursorMovement: {
      title: "Cursor Movement",
    },
    screenMovement: {
      title: "Screen Movement",
    },
  },
  content: [
    {
      sections: ["cursorMovement"],
      description: "Move cursor left",
      normalMode: ["h"],
      insertMode: [],
      visualMode: [],
      visualInsertMode: [],
    },
    {
      sections: ["cursorMovement"],
      description: "Move cursor right",
      normalMode: ["l"],
      insertMode: [],
      visualMode: [],
      visualInsertMode: [],
    },
    {
      sections: ["cursorMovement"],
      description: "Move cursor up",
      normalMode: ["k"],
      insertMode: [],
      visualMode: [],
      visualInsertMode: [],
    },
    {
      sections: ["cursorMovement"],
      description: "Move cursor down",
      normalMode: ["j"],
      insertMode: [],
      visualMode: [],
      visualInsertMode: [],
    },
    {
      sections: ["screenMovement","cursorMovement"],
      description: "Move screen down one line",
      normalMode: ["<C-e>"],
      insertMode: [],
      visualMode: [],
      visualInsertMode: [],
    },
  ],
}
