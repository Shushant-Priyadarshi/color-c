# color-c

This is a simple Node.js module for logging messages with customizable colors. It uses the popular `chalk` library to apply colors to the log messages based on their properties.

## Installation

To use this module in your Node.js project, you can install it via npm:

```bash
npm install color-c
```
### Available Colors
- danger: Red
- warning: Yellow
- info: Blue
- success: Green
- debug: Cyan
- special: Magenta
- If a color property is not recognized, the message will be logged with the default color (white).
  
```javascript
import {c} from "console-c"

// Log a message with custom color property
c("Error: Something went wrong!", "danger");

// Log a warning message
c("Warning: Potential issue detected!", "warning");

// Log an info message
c("Info: Application started successfully.", "info");

// Log a success message
c("Success: Operation completed.", "success");

// Log a debug message
c("Debug: Additional information for debugging.", "debug");

// Log a special message
c("Special: Custom message with special color.", "special");

```
![chalk](https://github.com/Shushant-Priyadarshi/color-c/assets/148479955/57c9110b-e903-4411-8d23-5542bb92bf92)


