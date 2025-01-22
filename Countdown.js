// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: purple; icon-glyph: magic;
// Scriptable: Hours Left Countdown

// Get the current date and the end of the year date
let now = new Date();
let endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59); // December 31, 23:59:59 of the current year

// Calculate the difference in milliseconds
let difference = endOfYear - now;

// Calculate total hours left
let hoursLeft = Math.floor(difference / (1000 * 60 * 60));

// Create the widget
let widget = new ListWidget();

// Set the widget background color
widget.backgroundColor = new Color("FFFFFF"); // White background for clarity

// Add the "Hours Left" label
let label = widget.addText("Hours Left");
label.font = new Font("ArialRoundedMTBold", 14); // Slightly smaller
label.textColor = Color.black();
label.centerAlignText();

widget.addSpacer(6);

// Add the hours left as medium text (smaller font size)
let hoursText = widget.addText(`${hoursLeft}`);
hoursText.font = new Font("ArialRoundedMTBold", 36, "bold"); // Reduced from 44 to 36
hoursText.textColor = Color.black();
hoursText.centerAlignText();

widget.addSpacer(6);

// Add the "2025 Countdown" label below
let countdownLabel = widget.addText("2025 Countdown");
countdownLabel.font = new Font("ArialRoundedMTBold", 12); // Smaller font for clarity
countdownLabel.textColor = Color.black();
countdownLabel.centerAlignText();

// Set the widget to display
Script.setWidget(widget);
Script.complete();