let data = {
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
      "title": "Text Object",
      "text": ":h text-objects"
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
    "windows": {
      "title": "Windows"
    },
    "registers": {
      "title": "Registers"
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
    "marks": {
      "title": "Marks"
    },
    "macros": {
      "title": "Macros"
    },
    "visualMode": {
      "title": "Selecting Text"
    },
    "files": {
      "title": "Files"
    },
    "break": {
      "title": "BREAK"
    },
    "searchAndReplace": {
      "title": "Search and replace"
    },
    "searchInMultipleFiles": {
      "title": "Search in Multiple Files"
    },
    "tabs": {
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
      "description": "Move screen down one line [n lines]",
      "normalMode": [
        "[n]^e"
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
      "description": "Move screen up half a screen",
      "normalMode": [
        "^u"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "help"
      ],
      "description": "Open help for keyword",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":help keyword",
        ":h"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "help"
      ],
      "description": "Search help",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":helpgrep pattern"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "help"
      ],
      "description": "Navigate help results",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":cnext",
        ":cprev",
        ":cnfile",
        ":cpfile"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "buffers"
      ],
      "description": "Save file as",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":saveas file"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "windows"
      ],
      "description": "Close current pane [force]",
      "normalMode": [
        "^wc"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":close[!]",
        ":quit"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "help"
      ],
      "description": "Open help page for word under the cursor",
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
      "description": "Move to top of screen",
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
      "description": "Move to middle of screen",
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
      "description": "Move to bottom of screen",
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
      "description": "Jump forwards to the start of a word",
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
      "description": "Jump forwards to the start of a word (words can contain punctuation)",
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
      "description": "Jump forwards to the end of a word",
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
      "description": "Jump forwards to the end of a word (words can contain punctuation)",
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
      "description": "Jump backwards to the start of a word",
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
      "description": "Jump backwards to the start of a word (words can contain punctuation)",
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
      "description": "Move to matching character (default supported pairs: '()', '{}', '[]' > use <code>:h matchpairs</code> in vim for more info)",
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
      "description": "Jump to the start of the line",
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
      "description": "Jump to the first non-blank character of the line, or nth line",
      "normalMode": [
        "^",
        "_",
        "n_"
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
      "description": "Jump to the end of the line",
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
      "description": "Next HTML/XML tag",
      "normalMode": [
        "t"
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
      "description": "Jump to the last non-blank character of the line",
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
      "description": "Go to the first line of the document",
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
      "description": "Go to the last line of the document",
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
      "description": "Go to line n",
      "normalMode": [
        "nG"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":n"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "cursorMovement",
        "linewiseSearching"
      ],
      "description": "Jump to next occurrence of character x",
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
        "cursorMovement",
        "linewiseSearching"
      ],
      "description": "Jump to before next occurrence of character x",
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
        "cursorMovement",
        "linewiseSearching"
      ],
      "description": "Jump to previous occurence of character x",
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
        "cursorMovement",
        "linewiseSearching"
      ],
      "description": "Jump to after previous occurence of character x",
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
        "cursorMovement",
        "linewiseSearching"
      ],
      "description": "Repeat previous f, t, F or T movement",
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
        "cursorMovement",
        "linewiseSearching"
      ],
      "description": "Repeat previous f, t, F or T movement, backwards",
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
        "cursorMovement",
        "linewiseSearching"
      ],
      "description": "Repeat previous f, t, F or T movement, backwards",
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
      "description": "List all lines containing pattern",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":g pattern"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "textObjectMovement"
      ],
      "description": "Jump to next paragraph (or function/block, when editing code)",
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
      "description": "Jump to previous paragraph (or function/block, when editing code)",
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
        "textObjectMovement"
      ],
      "description": "Next [] block",
      "normalMode": [
        "]"
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
      "description": "Previous [] block",
      "normalMode": [
        "["
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
      "description": "Next () block",
      "normalMode": [
        ")"
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
      "description": "Previous () block",
      "normalMode": [
        "("
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
      "description": "Next <> block",
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
        "textObjectMovement"
      ],
      "description": "Previous <> block",
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
        "textObjectMovement"
      ],
      "description": "Next \"\" (double quote) block",
      "normalMode": [
        "\""
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
      "description": "Next '' (single quote) block",
      "normalMode": [
        "'"
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
      "description": "Next `` (backtick) block",
      "normalMode": [
        "`"
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
      "description": "Move cursor line to top of screen",
      "detail": "zt keeps the cursor in the same column. z<CR> moves to start of line.",
      "normalMode": [
        "zt",
        "z<CR>"
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
      "description": "Center cursor on screen",
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
      "description": "Move cursor to bottom of screen",
      "normalMode": [
        "zb",
        "z-"
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
      "description": "Move screen down one line (without moving cursor)",
      "normalMode": [
        "^e"
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
      "description": "Move screen up one line (without moving cursor)",
      "normalMode": [
        "^y"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "scrollScreen",
        "cursorMovement"
      ],
      "description": "Move backward one full screen",
      "normalMode": [
        "^b"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "scrollScreen",
        "cursorMovement"
      ],
      "description": "Move forward one full screen",
      "normalMode": [
        "^f"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "scrollScreen",
        "cursorMovement"
      ],
      "description": "Move forward 1/2 a screen",
      "normalMode": [
        "^d"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "scrollScreen",
        "cursorMovement"
      ],
      "description": "Move back 1/2 a screen",
      "normalMode": [
        "^u"
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
      "description": "Insert before the cursor",
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
      "description": "Insert at the beginning of the line",
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
      "description": "Insert (append) after the cursor",
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
      "description": "Insert (append) at the end of the line",
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
      "description": "Append (open) a new line below the current line",
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
      "description": "Append (open) a new line above the current line",
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
      "description": "Insert (append) at the end of the word",
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
      "description": "Exit insert mode",
      "link": "https://vim.fandom.com/wiki/Avoid_the_escape_key",
      "normalMode": [
        "Esc",
        "^[",
        "^c"
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
      "description": "Replace a single character",
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
      "description": "Join line below to the current one with one space in between",
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
      "description": "Join line below to the current one without space in between",
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
      "description": "Reflow paragraph",
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
      "description": "Change (replace) entire line",
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
      "description": "Change (replace) to the end of the line",
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
      "description": "Change (replace) to the end of the line",
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
      "description": "Change (replace) entire word",
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
      "description": "Change (replace) to the end of the word",
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
      "description": "Delete character and substitute text",
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
      "description": "Delete line and substitute text (same as cc)",
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
      "description": "Transpose two letters (delete and paste)",
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
      "description": "Undo",
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
      "description": "Redo",
      "normalMode": [
        "^r"
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
      "description": "Repeat last command",
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
      "description": "Start visual mode, mark lines, then do a command (like y-yank)",
      "normalMode": [
        "v<movement>"
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
      "description": "Start linewise visual mode",
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
      "description": "Move to other end of marked area",
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
      "description": "Start visual block mode",
      "normalMode": [
        "^v"
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
      "description": "Move to other corner of block",
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
      "description": "Mark a word",
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
      "description": "A block with ()",
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
      "description": "A block with {}",
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
      "description": "Inner block with ()",
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
      "description": "Inner block with {}",
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
      "description": "Exit visual mode",
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
        "formatting"
      ],
      "description": "Shift text right",
      "normalMode": [
        ">>"
      ],
      "insertMode": [],
      "visualMode": [
        ">"
      ],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "formatting"
      ],
      "description": "Shift text left",
      "normalMode": [
        "<<"
      ],
      "insertMode": [],
      "visualMode": [
        "<"
      ],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "editing",
        "registers"
      ],
      "description": "Yank (copy) marked text (into unnamed register)",
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
        "editing",
        "registers"
      ],
      "description": "Copy from line x to line y and paste at line z (use . for current line)",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":x,ytz"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "editing"
      ],
      "description": "Delete text",
      "normalMode": [
        "d<movement>"
      ],
      "insertMode": [
        "Backspace",
        "Delete"
      ],
      "visualMode": [
        "d"
      ],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "editing"
      ],
      "description": "Toggle case",
      "normalMode": [
        "gu<movement>"
      ],
      "insertMode": [],
      "visualMode": [
        "~"
      ],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "editing"
      ],
      "description": "Toggle case of entire line",
      "normalMode": [
        "g~~"
      ],
      "insertMode": [],
      "visualMode": [
        "V~"
      ],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "editing"
      ],
      "description": "Upper case entire line",
      "normalMode": [
        "gUU"
      ],
      "insertMode": [],
      "visualMode": [
        "VU"
      ],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "editing"
      ],
      "description": "Lower case entire line",
      "normalMode": [
        "guu"
      ],
      "insertMode": [],
      "visualMode": [
        "Vu"
      ],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "registers"
      ],
      "description": "Show registers content",
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
        "registers"
      ],
      "description": "Yank into register x",
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
        "registers"
      ],
      "description": "Paste contents of register x",
      "normalMode": [
        "\"xp"
      ],
      "insertMode": [
        "^rx"
      ],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "registers"
      ],
      "description": "Yank into system clipboard",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [
        "\"+y"
      ],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "registers"
      ],
      "description": "Paste contents of system clipboard",
      "normalMode": [
        "\"+p"
      ],
      "insertMode": [
        "^r+"
      ],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "registers"
      ],
      "description": "Paste contents of Vim unnamed register (yanked text)",
      "normalMode": [
        "\"xp"
      ],
      "insertMode": [
        "^r\""
      ],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "marks"
      ],
      "description": "List of marks",
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
        "marks"
      ],
      "description": "Set current position for mark A",
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
        "marks"
      ],
      "description": "Jump to position of mark A",
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
        "marks"
      ],
      "description": "Yank text to position of mark A",
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
        "macros"
      ],
      "description": "Record macro a",
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
        "macros"
      ],
      "description": "Stop recording macro",
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
        "macros"
      ],
      "description": "Run macro a",
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
        "macros"
      ],
      "description": "Rerun last run macro",
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
        "editing"
      ],
      "description": "Yank (copy) a line [n lines]",
      "normalMode": [
        "[n]yy"
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
      "description": "Yank (copy) the characters of the word from the cursor position to the start of the next word",
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
        "editing"
      ],
      "description": "Yank (copy) to end of line",
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
        "editing"
      ],
      "description": "Put (paste) the clipboard after cursor",
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
        "editing"
      ],
      "description": "Put (paste) before cursor",
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
        "editing"
      ],
      "description": "Delete (cut) a line [n lines]",
      "normalMode": [
        "[n]dd"
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
      "description": "Delete (cut) the characters of the word from the cursor position to the start of the next word",
      "normalMode": [
        "dw"
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
      "description": "Delete (cut) characters from cursor position to beginning of word",
      "normalMode": [
        "db"
      ],
      "insertMode": [
        "^w"
      ],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "editing"
      ],
      "description": "Delete (cut) to the end of the line",
      "normalMode": [
        "D",
        "d$"
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
      "description": "Delete (cut) character",
      "normalMode": [
        "x",
        "dl"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "files"
      ],
      "description": "Write (save) the file, but don't exit",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":w"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "files"
      ],
      "description": "Write out the current file using sudo",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":w !sudo tee %"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "files"
      ],
      "description": "Write (save) and quit",
      "normalMode": [
        "ZZ"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":wq",
        ":x"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "files"
      ],
      "description": "Quit (fails if there are unsaved changes)",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":q"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "files"
      ],
      "description": "Quit and throw away unsaved changes",
      "normalMode": [
        "ZQ"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":q!"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "files"
      ],
      "description": "Write (save) and quit on all tabs",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":wqa"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "searchAndReplace"
      ],
      "description": "Search for pattern",
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
        "searchAndReplace"
      ],
      "description": "Search backward for pattern",
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
        "searchAndReplace"
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
        "searchAndReplace"
      ],
      "description": "Repeat search in same direction",
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
        "searchAndReplace"
      ],
      "description": "Repeat search in opposite direction",
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
        "searchAndReplace"
      ],
      "description": "Replace all old with new throughout file",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":%s/old/new/g"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "searchAndReplace"
      ],
      "description": "Replace all old with new throughout file with confirmations",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":%s/old/new/gc"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "searchAndReplace"
      ],
      "description": "Remove highlighting of search matches",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":noh"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "searchInMultipleFiles"
      ],
      "description": "Search for pattern in multiple files",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":vimgrep /pattern/ {file}"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "searchInMultipleFiles"
      ],
      "description": "Jump to the next match",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":cn"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "searchInMultipleFiles"
      ],
      "description": "Jump to the previous match",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":cp"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "searchInMultipleFiles"
      ],
      "description": "Open a window containing the list of matches",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":vimgrep /pattern/ {file}"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "files",
        "buffers"
      ],
      "description": "Edit a file in a new buffer",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":e file"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "buffers"
      ],
      "description": "Go to the next buffer",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":bnext",
        ":bn"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "buffers"
      ],
      "description": "Go to the previous buffer",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":bprev",
        ":bp"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "buffers"
      ],
      "description": "Delete a buffer (close a file)",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":bd"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "buffers",
        "windows"
      ],
      "description": "Close other buffers",
      "normalMode": ["<c-w>o"],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":only"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "buffers"
      ],
      "description": "Run a command on all buffers",
      "normalMode": ["<c-w>o"],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":bufdo"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "buffers"
      ],
      "description": "List all open buffers",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":ls"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "files",
        "windows"
      ],
      "description": "Open a file in a new buffer and split window [vertically]",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":[v]sp file"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "windows"
      ],
      "description": "Split window",
      "normalMode": [
        "^ws"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "windows"
      ],
      "description": "Switch windows",
      "normalMode": [
        "^ww"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "windows"
      ],
      "description": "Split window vertically",
      "normalMode": [
        "^wv"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "windows"
      ],
      "description": "Move cursor to the left window (vertical split)",
      "normalMode": [
        "^wh"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "windows"
      ],
      "description": "Move cursor to the right window (vertical split)",
      "normalMode": [
        "^wl"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "windows"
      ],
      "description": "Move cursor to the window below (horizontal split)",
      "normalMode": [
        "^wj"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "windows"
      ],
      "description": "Move cursor to the window above (horizontal split)",
      "normalMode": [
        "^wk"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "tabs"
      ],
      "description": "Open a file in a new tab",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":tabnew",
        ":tabnew file"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "tabs",
        "windows"
      ],
      "description": "Move the current split window into its own tab",
      "normalMode": [
        "^wT"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [],
      "visualInsertMode": []
    },
    {
      "sections": [
        "tabs"
      ],
      "description": "Move to the next tab",
      "normalMode": [
        "gt"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":tabnext",
        ":tabn"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "tabs"
      ],
      "description": "Move to the previous tab",
      "normalMode": [
        "gT"
      ],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":tabprev",
        ":tabp"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "tabs"
      ],
      "description": "Move to tab number #",
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
        "tabs"
      ],
      "description": "Move current tab to the #th position (indexed from 0)",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":tabmove #"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "tabs"
      ],
      "description": "Close the current tab and all its windows",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":tabclose",
        ":tabc"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "tabs"
      ],
      "description": "Close all tabs except for the current one",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":tabonly",
        ":tabo"
      ],
      "visualInsertMode": []
    },
    {
      "sections": [
        "tabs"
      ],
      "description": "Run the command on all tabs (e.g. :tabdo q - closes all opened tabs)",
      "normalMode": [],
      "insertMode": [],
      "visualMode": [],
      "exCommand": [
        ":tabdo command"
      ],
      "visualInsertMode": []
    }
  ]
};
