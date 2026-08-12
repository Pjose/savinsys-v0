document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Quote form demo submission (no backend attached yet)
  var form = document.querySelector(".quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var confirm = document.querySelector(".form-confirm");
      var nameField = form.querySelector("#name");
      var name = nameField && nameField.value ? nameField.value.split(" ")[0] : "";
      if (confirm) {
        confirm.textContent = (name ? "Thanks, " + name + ". " : "Thanks. ") +
          "This is a working prototype form — it isn't wired to send email or CRM data yet. Connect it to your quote-request workflow before launch.";
        confirm.classList.add("show");
        confirm.setAttribute("role", "status");
        confirm.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });
  }

  // Footer year
  var yearEls = document.querySelectorAll(".current-year");
  yearEls.forEach(function (el) { el.textContent = new Date().getFullYear(); });
});
