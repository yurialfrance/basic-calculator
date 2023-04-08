const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");


buttons.forEach((item) => {
  item.onclick = () => {

    // Check kung yung "clear" ay napindot
    if (item.id == "clear") {
      // Pag napindot, bura lahat "" wala na
      display.innerText = "";
    }

    // Pag napindot yung "delete" button 
    else if (item.id == "bura") {
      // Delete lang niya yung last character sa display
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    }

    // Pag yung "equal" button naman yug pinindot 
    else if (display.innerText != "" && item.id == "equal") {
      // Evaluate and compute na nya yung value
      display.innerText = eval(display.innerText);
    }

    // Pag naman napindot yung "equal" button pero walang laman yung display ng calculator or walang pinindot
    else if (display.innerText == "" && item.id == "equal") {
      // Mag error ng 2 seconds papakita sa display sasabihin "Nugagawen"
      display.innerText = "Nugagawen :(";
      setTimeout(() => (display.innerText = ""), 2000);
    } 

    // Para sa ibang buttons, add lang yung button value sa display
    else {
      display.innerText += item.id;
    }
  };
});


const themeToggleBtn = document.querySelector(".light-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

/* Function para makita yung preloader */
function showPreloader() {
    document.querySelector('.preloader').style.display = 'block';
    document.querySelector('.loading-message').innerHTML = 'Loading teka lang...';
  }
  
  /* Function para mawala yung preloader */
  function hidePreloader() {
    document.querySelector('.preloader').style.display = 'none';
  }
  
  /* Call showPreloader() when the page starts loading */
  window.addEventListener('load', function() {
    showPreloader();
  });
  
  /* Call hidePreloader() when the page finishes loading */
  window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      hidePreloader();
    }, 2000); // 2secs visible yung preloader
  });
  