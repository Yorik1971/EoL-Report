const params = new URLSearchParams(window.location.search); //parse params

const labName = params.get("ln"); //get lab name
const labLevel = params.get("ll"); //get lab name

document.querySelector(".lab-name").textContent = labName;
document.querySelector("#lab-details ul li:first-child").textContent += labLevel;