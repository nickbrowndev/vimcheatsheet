var data = {
  "sections": {
    "movement": {
        "title": "Movement"
    },
    "cursorMovement": {
      "parent": "movement",
      "title": "Cursor Movement"
    },
    "pageMovement": {
        "parent": "movement",
        "title": "Page Movement"
    },
    "textObjectMovement": {
        "parent": "movement",
        "title": "Text Object"
    },
    "scrollScreen": {
      "parent": "movement",
      "title": "Screen Scrolling"
    },
    "linewiseSearching": {
      "title": "Linewise Searching"
    },
    "searchReplace": {
      "title": "Search and Replace",
      "link": "https://vim.fandom.com/wiki/Searching"
    },
    "help": {
      "title": "Help",
      "text": "Learn some help stuff, innit",
      "link": "https://vim.fandom.com/wiki/Learn_to_use_help"
    },
    "buffers": {
        "title": "Buffers"
    },
    "motions": {
        "title": "Motions",
        "link": "http://vimdoc.sourceforge.net/htmldoc/motion.html"
    },
    "horizontalMotions": {
        "parent": "motions",
        "title": "Horizontal"
    },
    "verticalMotions": {
        "parent": "motions",
        "title": "Vertical"
    },
    "inserting": {
      "title": "Inserting"
    },
    "editing": {
        "title": "Editing"
        },
    "formatting": {
        "title": "Formatting",
        "text": ":h gq, :h gw, :h fo (format options), :h fp (format program), :h fo-table"
    },
    "visualMode": {
      "title": "Visual Mode"
    },
    "break": {
        "title": "BREAK"
    },
    "Global": {
      "title": "Global"
    },
    "Visualcommands": {
      "title": "Visual commands"
    },
    "switchingCase": {
        "title": "Changing Case of Text"
    },
    "Registers": {
      "title": "Registers"
    },
    "Marks": {
      "title": "Marks"
    },
    "Macros": {
      "title": "Macros"
    },
    "Cutandpaste": {
      "title": "Cut and paste"
    },
    "Exiting": {
      "title": "Exiting"
    },
    "Searchandreplace": {
      "title": "Search and replace"
    },
    "Searchinmultiplefiles": {
      "title": "Search in multiple files"
    },
    "Workingwithmultiplefiles": {
      "title": "Working with multiple files"
    },
    "Tabs": {
      "title": "Tabs"
    }
  },
  "content": [
  {
    "sections": [
      "cursorMovement"
    ],
    "description": "Move cursor left",
    "normalMode": [
      "h"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "cursorMovement"
    ],
    "description": "Move cursor right",
    "normalMode": [
      "l"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "cursorMovement"
    ],
    "description": "Move cursor up",
    "normalMode": [
      "k"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "cursorMovement"
    ],
    "description": "Move cursor down",
    "normalMode": [
      "j"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "cursorMovement"
    ],
    "description": "Move cursor up page row instead of line",
    "normalMode": [
      "gk"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "cursorMovement"
    ],
    "description": "Move cursor down page row instead of line",
    "normalMode": [
      "gj"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "scrollScreen"
    ],
    "description": "Move screen down one line",
    "normalMode": [
      "<C-e>"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "help", "Global"
    ],
    "description": "open help for keyword",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":help keyword", ":h"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "help"
    ],
    "description": "search help",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":helpgrep pattern"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "buffers"
    ],
    "description": "save file as",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":saveas file"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Global"
    ],
    "description": "close current pane",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":close"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "help", "Global"
    ],
    "description": "open help page for word under the cursor",
    "normalMode": [
      "K"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "cursorMovement"
    ],
    "description": "move to top of screen",
    "normalMode": [
      "H"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "cursorMovement"
    ],
    "description": "move to middle of screen",
    "normalMode": [
      "M"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "cursorMovement"
    ],
    "description": "move to bottom of screen",
    "normalMode": [
      "L"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "textObjectMovement"
    ],
    "description": "jump forwards to the start of a word",
    "normalMode": [
      "w"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "textObjectMovement"
    ],
    "description": "jump forwards to the start of a word (words can contain punctuation)",
    "normalMode": [
      "W"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "textObjectMovement"
    ],
    "description": "jump forwards to the end of a word",
    "normalMode": [
      "e"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "textObjectMovement"
    ],
    "description": "jump forwards to the end of a word (words can contain punctuation)",
    "normalMode": [
      "E"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "textObjectMovement"
    ],
    "description": "jump backwards to the start of a word",
    "normalMode": [
      "b"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "textObjectMovement"
    ],
    "description": "jump backwards to the start of a word (words can contain punctuation)",
    "normalMode": [
      "B"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "textObjectMovement"
    ],
    "description": "move to matching character (default supported pairs: '()', '{}', '[]' > use <code>:h matchpairs</code> in vim for more info)",
    "normalMode": [
      "%"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "textObjectMovement"
    ],
    "description": "jump to the start of the line",
    "normalMode": [
      "0"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "textObjectMovement"
    ],
    "description": "jump to the first non-blank character of the line, or nth line",
    "normalMode": [
      "^", "_", "n_"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "textObjectMovement"
    ],
    "description": "jump to the end of the line",
    "normalMode": [
      "$"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "textObjectMovement"
    ],
    "description": "jump to the last non-blank character of the line",
    "normalMode": [
      "g_"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "pageMovement"
    ],
    "description": "go to the first line of the document",
    "normalMode": [
      "gg"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "pageMovement"
    ],
    "description": "go to the last line of the document",
    "normalMode": [
      "G"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "pageMovement"
    ],
    "description": "go to line n",
    "normalMode": [ "nG" ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [":n"],
    "visualInsertMode": []
  },
  {
    "sections": [
      "cursorMovement", "linewiseSearching"
    ],
    "description": "jump to next occurrence of character x",
    "normalMode": [
      "fx"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "cursorMovement", "linewiseSearching"
    ],
    "description": "jump to before next occurrence of character x",
    "normalMode": [
      "tx"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "cursorMovement", "linewiseSearching"
    ],
    "description": "jump to previous occurence of character x",
    "normalMode": [
      "Fx"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "cursorMovement", "linewiseSearching"
    ],
    "description": "jump to after previous occurence of character x",
    "normalMode": [
      "Tx"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "cursorMovement", "linewiseSearching"
    ],
    "description": "repeat previous f, t, F or T movement",
    "normalMode": [
      ";"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "cursorMovement", "linewiseSearching"
    ],
    "description": "repeat previous f, t, F or T movement, backwards",
    "normalMode": [
      ","
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "cursorMovement", "linewiseSearching"
    ],
    "description": "repeat previous f, t, F or T movement, backwards",
    "normalMode": [
      ","
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "searchReplace"
    ],
    "description": "list all lines contain pattern",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [":g pattern"],
    "visualInsertMode": []
  },
  {
    "sections": [
      "textObjectMovement"
    ],
    "description": "jump to next paragraph (or function/block, when editing code)",
    "normalMode": [
      "}"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "textObjectMovement"
    ],
    "description": "jump to previous paragraph (or function/block, when editing code)",
    "normalMode": [
      "{"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "scrollScreen"
    ],
    "description": "move cursor line to top of screen",
    "detail": "zt keeps the cursor in the same column. z<CR> moves to start of line.",
    "normalMode": [
      "zt", "z<CR>"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "scrollScreen"
    ],
    "description": "center cursor on screen",
    "normalMode": [
      "zz"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "scrollScreen"
    ],
    "description": "move cursor to bottom of screen",
    "normalMode": [
      "zb", "z-"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "scrollScreen"
    ],
    "description": "move screen down one line (without moving cursor)",
    "normalMode": [
      "Ctrl + e"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "scrollScreen"
    ],
    "description": "move screen up one line (without moving cursor)",
    "normalMode": [
      "Ctrl + y"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "scrollScreen", "cursorMovement"
    ],
    "description": "move backward one full screen", 
    "normalMode": [
      "Ctrl + b"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "scrollScreen", "cursorMovement"
    ],
    "description": "move forward one full screen",
    "normalMode": [
      "Ctrl + f"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "scrollScreen", "cursorMovement"
    ],
    "description": "move forward 1/2 a screen",
    "normalMode": [
      "Ctrl + d"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "scrollScreen", "cursorMovement"
    ],
    "description": "move back 1/2 a screen",
    "normalMode": [
      "Ctrl + u"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "inserting"
    ],
    "description": "insert before the cursor",
    "normalMode": [
      "i"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "inserting"
    ],
    "description": "insert at the beginning of the line",
    "normalMode": [
      "I"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "inserting"
    ],
    "description": "insert (append) after the cursor",
    "normalMode": [
      "a"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "inserting"
    ],
    "description": "insert (append) at the end of the line",
    "normalMode": [
      "A"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "inserting"
    ],
    "description": "append (open) a new line below the current line",
    "normalMode": [
      "o"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "inserting"
    ],
    "description": "append (open) a new line above the current line",
    "normalMode": [
      "O"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "inserting"
    ],
    "description": "insert (append) at the end of the word",
    "normalMode": [
      "ea"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "inserting"
    ],
    "description": "exit insert mode",
    "link": "https://vim.fandom.com/wiki/Avoid_the_escape_key",
    "normalMode": [
      "Esc", "<C-[>", "<C-c>"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "editing"
    ],
    "description": "replace a single character",
    "normalMode": [
      "r"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "editing"
    ],
    "description": "join line below to the current one with one space in between",
    "normalMode": [
      "J"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "editing"
    ],
    "description": "join line below to the current one without space in between",
    "normalMode": [
      "gJ"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "formatting"
    ],
    "description": "reflow paragraph",
    "normalMode": [
      "gwip"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "editing"
    ],
    "description": "change (replace) entire line",
    "normalMode": [
      "cc"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "editing"
    ],
    "description": "change (replace) to the end of the line",
    "normalMode": [
      "C"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "editing"
    ],
    "description": "change (replace) to the end of the line",
    "normalMode": [
      "c$"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "editing"
    ],
    "description": "change (replace) entire word",
    "normalMode": [
      "ciw"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "editing"
    ],
    "description": "change (replace) to the end of the word",
    "normalMode": [
      "cw"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "editing"
    ],
    "description": "delete character and substitute text",
    "normalMode": [
      "s"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "editing"
    ],
    "description": "delete line and substitute text (same as cc)",
    "normalMode": [
      "S"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "editing"
    ],
    "description": "transpose two letters (delete and paste)",
    "normalMode": [
      "xp"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "editing"
    ],
    "description": "undo",
    "normalMode": [
      "u"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "editing"
    ],
    "description": "redo",
    "normalMode": [
      "Ctrl + r"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "editing"
    ],
    "description": "repeat last command",
    "normalMode": [
      "."
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "visualMode"
    ],
    "description": "start visual mode, mark lines, then do a command (like y-yank)",
    "normalMode": [
      "v"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "visualMode"
    ],
    "description": "start linewise visual mode",
    "normalMode": [
      "V"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "visualMode"
    ],
    "description": "move to other end of marked area",
    "normalMode": [
      "o"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "visualMode"
    ],
    "description": "start visual block mode",
    "normalMode": [
      "Ctrl + v"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "visualMode"
    ],
    "description": "move to other corner of block",
    "normalMode": [
      "O"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "visualMode"
    ],
    "description": "mark a word",
    "normalMode": [
      "aw"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "visualMode"
    ],
    "description": "a block with ()",
    "normalMode": [
      "ab"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "visualMode"
    ],
    "description": "a block with {}",
    "normalMode": [
      "aB"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "visualMode"
    ],
    "description": "inner block with ()",
    "normalMode": [
      "ib"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "visualMode"
    ],
    "description": "inner block with {}",
    "normalMode": [
      "iB"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "visualMode"
    ],
    "description": "exit visual mode",
    "normalMode": [
      "Esc"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Visualcommands"
    ],
    "description": "shift text right",
    "normalMode": [
      ">"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Visualcommands"
    ],
    "description": "shift text left",
    "normalMode": [
      "<"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Visualcommands"
    ],
    "description": "yank (copy) marked text",
    "normalMode": [
      "y"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Visualcommands"
    ],
    "description": "delete marked text",
    "normalMode": [
      "d"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Visualcommands", "switchingCase"
    ],
    "description": "Toggle case",
    "normalMode": [
      "gu<movement>"
    ],
    "insertMode": [],
    "visualMode": ["~"],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Visualcommands", "switchingCase"
    ],
    "description": "Toggle case of entire line",
    "normalMode": [
      "g~~"
    ],
    "insertMode": [],
    "visualMode": ["V~"],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Registers"
    ],
    "description": "show registers content",
    "normalMode": [
      ":reg"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Registers"
    ],
    "description": "yank into register x",
    "normalMode": [
      "\"xy"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Registers"
    ],
    "description": "paste contents of register x",
    "normalMode": [
      "\"xp"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Marks"
    ],
    "description": "list of marks",
    "normalMode": [
      ":marks"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Marks"
    ],
    "description": "set current position for mark A",
    "normalMode": [
      "ma"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Marks"
    ],
    "description": "jump to position of mark A",
    "normalMode": [
      "`a"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Marks"
    ],
    "description": "yank text to position of mark A",
    "normalMode": [
      "y`a"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Macros"
    ],
    "description": "record macro a",
    "normalMode": [
      "qa"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Macros"
    ],
    "description": "stop recording macro",
    "normalMode": [
      "q"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Macros"
    ],
    "description": "run macro a",
    "normalMode": [
      "@a"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Macros"
    ],
    "description": "rerun last run macro",
    "normalMode": [
      "@@"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Cutandpaste"
    ],
    "description": "yank (copy) a line",
    "normalMode": [
      "yy"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Cutandpaste"
    ],
    "description": "yank (copy) 2 lines",
    "normalMode": [
      "2yy"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Cutandpaste"
    ],
    "description": "yank (copy) the characters of the word from the cursor position to the start of the next word",
    "normalMode": [
      "yw"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Cutandpaste"
    ],
    "description": "yank (copy) to end of line",
    "normalMode": [
      "y$"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Cutandpaste"
    ],
    "description": "put (paste) the clipboard after cursor",
    "normalMode": [
      "p"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Cutandpaste"
    ],
    "description": "put (paste) before cursor",
    "normalMode": [
      "P"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Cutandpaste"
    ],
    "description": "delete (cut) a line",
    "normalMode": [
      "dd"
    ],
    "insertMode": ["<c-u>"],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Cutandpaste"
    ],
    "description": "delete (cut) 2 lines",
    "normalMode": [
      "2dd"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Cutandpaste"
    ],
    "description": "delete (cut) the characters of the word from the cursor position to the start of the next word",
    "rmalMode": [
      "dw"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Cutandpaste"
    ],
    "description": "delete (cut) characters from cursor position to beginning of word",
    "rmalMode": [
      "db"
    ],
    "insertMode": ["<c-w>"],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Cutandpaste"
    ],
    "description": "delete (cut) to the end of the line",
    "normalMode": [
      "D"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Cutandpaste"
    ],
    "description": "delete (cut) to the end of the line",
    "normalMode": [
      "d$"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Cutandpaste"
    ],
    "description": "delete (cut) character",
    "normalMode": [
      "x"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Exiting"
    ],
    "description": "write (save) the file, but don't exit",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":w"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Exiting"
    ],
    "description": "write out the current file using sudo",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":w !sudo tee %"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Exiting"
    ],
    "description": "write (save) and quit",
    "normalMode": [
        "ZZ"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":wq",":x"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Exiting"
    ],
    "description": "quit (fails if there are unsaved changes)",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":q"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Exiting"
    ],
    "description": "quit and throw away unsaved changes",
    "normalMode": [
      "ZQ"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
   ":q!" ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Exiting"
    ],
    "description": "write (save) and quit on all tabs",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":wqa"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Searchandreplace"
    ],
    "description": "search for pattern",
    "normalMode": [
      "/pattern"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Searchandreplace"
    ],
    "description": "search backward for pattern",
    "normalMode": [
      "?pattern"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Searchandreplace"
    ],
    "description": "'very magic' pattern: non-alphanumeric characters are interpreted as special regex symbols (no escaping needed)",
    "normalMode": [
      "pattern"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Searchandreplace"
    ],
    "description": "repeat search in same direction",
    "normalMode": [
      "n"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Searchandreplace"
    ],
    "description": "repeat search in opposite direction",
    "normalMode": [
      "N"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Searchandreplace"
    ],
    "description": "replace all old with new throughout file",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":%s/old/new/g"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Searchandreplace"
    ],
    "description": "replace all old with new throughout file with confirmations",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":%s/old/new/gc"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Searchandreplace"
    ],
    "description": "remove highlighting of search matches",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":noh"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Searchinmultiplefiles"
    ],
    "description": "search for pattern in multiple files",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":vimgrep /pattern/ {file}"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Searchinmultiplefiles"
    ],
    "description": "jump to the next match",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":cn"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Searchinmultiplefiles"
    ],
    "description": "jump to the previous match",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":cp"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Searchinmultiplefiles"
    ],
    "description": "open a window containing the list of matches",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
        ":vimgrep /pattern/ {file}"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Workingwithmultiplefiles"
    ],
    "description": "edit a file in a new buffer",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":e file"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Workingwithmultiplefiles"
    ],
    "description": "go to the next buffer",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":bnext",":bn"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Workingwithmultiplefiles"
    ],
    "description": "go to the previous buffer",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":bprev",":bp"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Workingwithmultiplefiles"
    ],
    "description": "delete a buffer (close a file)",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":bd"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Workingwithmultiplefiles"
    ],
    "description": "list all open buffers",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":ls"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Workingwithmultiplefiles"
    ],
    "description": "open a file in a new buffer and split window",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":sp file"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Workingwithmultiplefiles"
    ],
    "description": "open a file in a new buffer and vertically split window",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":vsp file"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Workingwithmultiplefiles"
    ],
    "description": "split window",
    "normalMode": [
      "Ctrl + ws"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Workingwithmultiplefiles"
    ],
    "description": "switch windows",
    "normalMode": [
      "Ctrl + ww"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Workingwithmultiplefiles"
    ],
    "description": "quit a window",
    "normalMode": [
      "Ctrl + wq"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Workingwithmultiplefiles"
    ],
    "description": "split window vertically",
    "normalMode": [
      "Ctrl + wv"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Workingwithmultiplefiles"
    ],
    "description": "move cursor to the left window (vertical split)",
    "normalMode": [
      "Ctrl + wh"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Workingwithmultiplefiles"
    ],
    "description": "move cursor to the right window (vertical split)",
    "normalMode": [
      "Ctrl + wl"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Workingwithmultiplefiles"
    ],
    "description": "move cursor to the window below (horizontal split)",
    "normalMode": [
      "Ctrl + wj"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Workingwithmultiplefiles"
    ],
    "description": "move cursor to the window above (horizontal split)",
    "normalMode": [
      "Ctrl + wk"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Tabs"
    ],
    "description": "open a file in a new tab",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":tabnew",":tabnew file"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Tabs"
    ],
    "description": "move the current split window into its own tab",
    "normalMode": [
      "Ctrl + wT"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Tabs"
    ],
    "description": "move to the next tab",
    "normalMode": [
      "gt"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
   ":tabnext",":tabn" ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Tabs"
    ],
    "description": "move to the previous tab",
    "normalMode": [
      "gT"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
   ":tabprev",":tabp" ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Tabs"
    ],
    "description": "move to tab number #",
    "normalMode": [
      "#gt"
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Tabs"
    ],
    "description": "move current tab to the #th position (indexed from 0)",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":tabmove #"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Tabs"
    ],
    "description": "close the current tab and all its windows",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":tabclose",":tabc"
   ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Tabs"
    ],
    "description": "close all tabs except for the current one",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":tabonly",":tabo"
    ],
    "visualInsertMode": []
  },
  {
    "sections": [
      "Tabs"
    ],
    "description": "run the command on all tabs (e.g. :tabdo q - closes all opened tabs)",
    "normalMode": [
    ],
    "insertMode": [],
    "visualMode": [],
    "exCommand": [
      ":tabdo command"
    ],
    "visualInsertMode": []
  }
],
}
