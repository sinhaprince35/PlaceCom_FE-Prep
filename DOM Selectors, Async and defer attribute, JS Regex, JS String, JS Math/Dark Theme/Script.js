function swapTheme() {
    const div = document.getElementById("app");
    const button = document.getElementById("swap");
  
  if (div.classList.contains("day")) {
    div.classList.remove("day");
    div.classList.add("night");
    button.classList.remove("button_day");
    button.classList.add("button_night");
  } else {
    div.classList.remove("night");
    div.classList.add("day");
    button.classList.remove("button_night");
    button.classList.add("button_day");
  }
}