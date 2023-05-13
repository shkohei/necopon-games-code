const cancelTransition = (e) => e.preventDefault();
const linkElements = document.querySelectorAll("a");
linkElements.forEach((el) => el.addEventListener("click", cancelTransition));
