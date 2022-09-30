// Getting Elements
const canvas = document.querySelector("#canvas");
const btn = document.querySelector("#button");

const colorChanger = () => {
  // Create 16 Digit HEX Value
  let color = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0);

  canvas.style.backgroundColor = "#" + color;

  // Convert HEX to RGB
  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);

  // YIQ formula
  let yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Generate Contras Color Based on Bg-Color
  canvas.style.color = yiq >= 128 ? "#000000" : "#FFFFFF";
};

// Event On Button
btn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent Default Click

  colorChanger();
});

// Initial Call
colorChanger();
