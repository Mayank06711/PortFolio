// -----------about section ---------

let tabLinks = document.getElementsByClassName("tab-links");
let tabContent = document.getElementsByClassName("tab-contents");
const openTab = (event, tabName) => {
  for (var tablink of tabLinks) {
    tablink.classList.remove("active-link");
  }
  for (var tabcontent of tabContent) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
};
// -------------sideMenu----------
const openMenu = () => {
  document.querySelector('nav ul').style.right = "0";
};

const closeMenu = () => {
  const sidemenu = document.getElementById('sideMenu');
  sidemenu.style.transition = "all ease 0.5s";
  sidemenu.style.right = `-${sidemenu.offsetWidth}px`;
};

  


// ---------------form ------------
// problem is it also appear in search
// document.addEventListener("DOMContentLoaded", function () {
//   const scriptURL =
// "https://script.google.com/macros/s/AKfycbzdfiAX6MIemygMFHnCkoSPQTUy1z8dJ-bnz88tIBE4hRt6GknUEiaSf35615PUGCPGdw/exec";
// const form = document.forms["submit-to-google-sheet"];
// const msg = document.getElementById("msg");
  

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     fetch(scriptURL, { method: "POST", body: new FormData(form) })
//       .then((response) => {
//         msg.innerHTML = "Message Sent";
//         setTimeout(() => {
//           msg.innerHTML = "";
//         }, 3000);
//         form.reset();
//         console.log(
//           "Success! Please wait 1-2 days for the response",
//           response
//         );
//       })
//       .catch((error) => console.error("Error!", error.message));
//   });
// });
