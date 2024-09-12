# Timer Tech Task

## Task Description

The goal is to implement a countdown timer using **React** or **Next.js**. The timer should:

1. Display the remaining time in `MM:SS` (minutes:seconds) format.
2. Update every second.
3. Stop the countdown when the time is up and display the message "Time is up".
4. Provide a "Start/Pause" button to control the timer.
5. Include a "Reset" button to restart the timer.
6. Be limited to a maximum duration of 3 minutes.

## Implementation Requirements

### 1. Component Structure
- The application should be divided into reusable components (e.g., `Timer`, `Controls`, `Input`).
- Ensure efficient state management to minimize unnecessary re-renders.

### 2. State Management & Re-Renders
- Optimize rendering to prevent excessive component updates (e.g., avoid re-renders every second).

### 3. Interface & Functionality
- Include control buttons: **"Start/Pause"** and **"Reset"**.
- Display the countdown timer on the screen.
- Show a message "Time is up" when the countdown finishes.

### 4. Additional Requirements
- Using **TypeScript** is encouraged.
- A well-designed and responsive layout is encouraged.
- The application should work correctly on both **desktop** and **mobile** devices (Mozilla, Chrome, Safari).

