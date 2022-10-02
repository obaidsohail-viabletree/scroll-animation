const zeroPad = (num, places) => String(num).padStart(places, "0");

const value = 1674;
// for (let index = 1; index <= value; index++) {
//   const imageNumber = zeroPad(index, value.toString().length + 2);
//   console.log("imageNumber", imageNumber);
//   const html =
//     '<div class="mac-area-clip"> <div class="mac-area-clip-inner"> <div class="mac-area"> <img src="assets/final' +
//     imageNumber +
//     '.png" alt="" /></div></div></div>';
//   // document.getElementsByClassName("projects")[0].innerHTML += html;
// }
window.onscroll = function () {
  const top = window.pageYOffset || document.body.scrollTop;
  document.getElementById("anim-bg").src = `assets/final${zeroPad(
    parseInt(top + 1),
    value.toString().length
  )}.png`;
};
document.getElementsByClassName("projects")[0].style.height = `${parseInt(
  value * 1.49
)}px`;
