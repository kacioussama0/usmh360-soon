let countDownDate = new Date("July 01, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector("#day").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector("#hour").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector("#minute").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector("#second").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);


setInterval(()=> {

    let logo = document.querySelector('.logo');

    if(logo.alt == "usmh-360-yellow") {
        logo.src = "imgs/logo-yellow.svg";
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#ffffff";
        for(let i = 0 ; i < 4 ; i++){
            document.querySelectorAll('div.soon div.counter-down span')[i].classList = "span-color-white"
        }
        logo.alt = "usmh-360-black";

      }

    else if(logo.alt == "usmh-360-black") {
      logo.src = "imgs/logo-usmh.svg";
      document.body.style.backgroundColor = "var(--main-color)";
      document.body.style.color = "#000000";
      for(let i = 0 ; i < 4 ; i++){
          document.querySelectorAll('div.soon div.counter-down span')[i].classList = "span-color-black";
      }

      logo.alt = "usmh-360-yellow";


    }



},5000)


let isPlayed = false;
window.onclick = ()=> {


    if(!isPlayed) {
        isPlayed = true;
        new Audio('harrach.mp3').play();
    }
}