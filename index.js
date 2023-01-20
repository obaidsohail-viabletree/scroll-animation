const zeroPad = (num, places) => String(num).padStart(places, "0");

const imageDiff = 1;
const value = 1674;
let imagesArr = [
  {
    key: 1,
    image: `final${zeroPad(1, value.toString().length)}.png`,
  },
];

for (let index = 2; index < value; index++) {
  imagesArr.push({
    key: imageDiff * index,
    image: `final${zeroPad(index, value.toString().length)}.png`,
  });
}
console.log("imagesArr", imagesArr);
window.onscroll = function () {
  const top = window.pageYOffset || document.body.scrollTop;
  console.log("top", parseInt(top + 1));
  const isImage = imagesArr.find((x) => x.key === parseInt(top + 1));
  if (isImage) {
    document.getElementById("anim-bg").src = `assets/${isImage.image}`;
  }
};
document.getElementsByClassName("projects")[0].style.height = `${parseInt(
  value * imageDiff + value / 2 + 3
)}px`;
// 5019
// setTimeout(() => {
//   window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
// }, 1000);
