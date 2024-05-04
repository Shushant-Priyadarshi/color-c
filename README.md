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
// Log a message with custom color property
log("Error: Something went wrong!", "danger");

// Log a warning message
log("Warning: Potential issue detected!", "warning");

// Log an info message
log("Info: Application started successfully.", "info");

// Log a success message
log("Success: Operation completed.", "success");

// Log a debug message
log("Debug: Additional information for debugging.", "debug");

// Log a special message
log("Special: Custom message with special color.", "special");

```

![chalk](https://github.com/Shushant-Priyadarshi/color-c/assets/148479955/57c9110b-e903-4411-8d23-5542bb92bf92)


