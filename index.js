const zeroPad = (num, places) => String(num).padStart(places, "0");
const value = 25;
for (let index = 1; index <= value; index++) {
  const imageNumber = zeroPad(index, value.toString().length + 2);
  console.log("imageNumber", imageNumber);
  const html =
    '<div class="mac-area-clip"> <div class="mac-area-clip-inner"> <div class="mac-area"> <img src="assets/final' +
    imageNumber +
    '.png" alt="" /></div></div></div>';
    document.getElementsByClassName("projects")[0].innerHTML += html;
}
