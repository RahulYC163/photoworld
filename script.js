document.addEventListener("DOMContentLoaded", function () {
  const togglebutton = document.querySelector(" .mobile-menu-toggle");
  const mobilemenuitems = document.querySelector(" .mobile-menu-items");

  togglebutton.addEventListener("click", function () {
    mobilemenuitems.classList.toggle("active");
  });
});
