const mobileMenu = document.querySelector("#mobile-menu");
const mobileButton = document.querySelector("#mobile-btn");

// Initially set the height to 0 using inline styles to ensure transition works on first click
mobileMenu.style.height = "0px";

mobileButton.addEventListener("click", () => {
  if (mobileMenu.style.height === "0px") {
    // Expand: Set the height to scrollHeight for smooth expansion
    mobileMenu.style.height = `${mobileMenu.scrollHeight}px`;
  } else {
    // Collapse: Set the height back to 0px
    mobileMenu.style.height = "0px";
  }
});
