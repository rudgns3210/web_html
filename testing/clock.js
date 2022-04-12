const clockContainer = document.querySelector(".js-Clock"),
      clockTitle = clockContainer.querySelector(".clock");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clockTitle.innerText = `현재시간 : ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}

function init(){
  getTime();
  setInterval(getTime, 1000);
}

init();
