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


img.addEventListener("click", function(changeColour){
    img.style.background = "#e664a1"
    console.log("click")
})
// event addmore(){
//     setInterval
// }
// setInterval((buy1) => {
//     cookies =+ cookies + (cookies);
//     console.log(cookies);
//   }, 5000);

// Let buy1 = 1;
// const buy1 = document.getElementById("buy1");

buy1.addEventListener("click", function() { 
    setInterval((buy1) => {
        cookies =+ cookies ;
        console.log(cookies);
      }, 1000) } )

buy10.addEventListener("click", function() { 
    setInterval((buy2) => {
        cookies =+ + 10 ;
        console.log(cookies);
      }, 1000) } )

buy100.addEventListener("click", function() { 
    setInterval((buy3) => {
            cookies =+ 100 ;
            console.log(cookies);
          }, 1000) } )


 const resetBtn = document.getElementById("resetBtn") 


//  resetBtn.addEventListener("click",function()  {
//     setTimeout(() => {
//         resetBtn = 0
//     }, timeout);

//  })
  








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




