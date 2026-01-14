//your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// Helper function to create delay using Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle delayed message
async function showMessage() {
  const text = textInput.value;
  const delay = Number(delayInput.value);

  // Clear previous output
  output.innerText = "";

  // Wait for the specified delay
  await wait(delay);

  // Display the message
  output.innerText = text;
}

// Button click event
button.addEventListener("click", showMessage);
