# Password Generator and TodoList

Simple browser-based app with two tabs: a password generator and a todo list, built with HTML, CSS, and JavaScript.

## Features

- Generate a random password with one click
- Set password length with a slider
- Include or exclude uppercase letters, numbers, and symbols
- Copy the generated password to the clipboard
- Switch between Password Generator and TodoList tabs
- Add, complete, and delete todo items

## Files

- `index.html` - page structure and UI
- `style.css` - page styles
- `script.js` - tab switching, password generation, and todo list logic

## How to Run

1. Open `index.html` in a browser.
2. Use the navigation buttons at the top to switch between tabs.
3. In the Password Generator tab, choose the password length and character groups.
4. Click `Generate password`.
5. Use `Copy` to copy the result.
6. In the TodoList tab, type a task and press `Add task`.

## Notes

- Lowercase letters are always included.
- The generated password updates only when the generate button is pressed.
- Copying uses the browser clipboard API, so it works best on modern browsers.
- The todo list data is stored only in memory and resets when the page reloads.
