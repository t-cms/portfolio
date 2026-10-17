document.addEventListener(
  "click",
  function (event) {
    const button = event.target.closest(".filter");

    if (!button) return;

    const selected = button.dataset.filter;

    document.querySelectorAll(".portfolio-group").forEach(function (section) {
      section.hidden = section.dataset.group !== selected;
    });

    document.querySelectorAll(".filter").forEach(function (btn) {
      const active = btn === button;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    console.log("Category selected:", selected);
  },
  true
);

// Typewriter effect for the heading
document.addEventListener("DOMContentLoaded", function () {
  const heading = document.getElementById("typing-heading");

  if (!heading) return;

  const text = heading.textContent;
  heading.textContent = "";

  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      heading.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});
