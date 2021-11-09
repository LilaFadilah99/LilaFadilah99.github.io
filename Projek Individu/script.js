let theme = document.getElementsByClassName("theme")[0];
document.getElementById("toggler").checked = false;

document.getElementById("toggler").addEventListener("change", (event) => {
  event.target.checked
    ? theme.setAttribute("data-theme", "dark")
    : theme.removeAttribute("data-theme");
});
