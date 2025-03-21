function addingEventListener() {
  // Select the button element by ID
  const input = document.getElementById("button");

  // Add a click event listener to the button
  input.addEventListener("click", function () {
    alert("I was clicked!");
  });
}

// Call the function to attach the event listener
addingEventListener();
