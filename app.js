let cookies = 0;
let cookieDisplay = document.getElementById("cookie-display");

const img = document.getElementById("img");

img.addEventListener("click", function (event) {
    cookies += 1

});

function game() {
    setInterval(function () {
        cookies += 1
        cookieDisplay.innerText = cookies
        // console.log("🍪", cookies);
    }, 1000) // 1000 milliseconds == 1 second
}
game()

// event addmore(){
//     setInterval
// }
setTimeout(() => {
    console.log(cookies);
  }, 500);





// cookieDisplay.addEventListener("submit", function (event) {
//   event.preventDefault();
//   localStorage.setItem("cookieDisplay", cookieDisplay);
// });



//  cookieDisplay = localStorage.getItem("cookieDisplay");
// if (cookieDisplay) {
//     const input = document.querySelector("input");
//     input.value = cookieDisplay;
// }


// function savePreferences(event) {
//   event.preventDefault();

//   // so when we save it, we stringify it
//   localStorage.setItem("cookieDisplay", JSON.stringify(preferences));
// }

// form.addEventListener("submit", cookies);




