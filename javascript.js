console.log("Hello World!");

document.getElementById("myForm").addEventListener("submit", function (event) {
  const checkbox = document.getElementById("antiCheckbox");

  if (checkbox.checked) {
    alert("Oh, my God! They killed Kenny! You bastards!");
  }

  // Optionally prevent actual form submission:
  // event.preventDefault();
});
