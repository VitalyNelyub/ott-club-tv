document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown-text");

  dropdowns.forEach((dropdown) => {
    const content = dropdown.querySelector(".dropdown-text__content");
    const closeButton = dropdown.querySelector(".close-button");

    dropdown.addEventListener("click", () => {
      content.classList.toggle("active");
    });

    closeButton.addEventListener("click", (event) => {
      event.stopPropagation();
      content.classList.remove("active");
    });
  });
});