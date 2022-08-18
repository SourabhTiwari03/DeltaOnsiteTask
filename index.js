var count = 0;
var btn1 = document.getElementById("addition");
var btn2 = document.getElementById("subtraction");
btn1.onclick = function () {
  count++;
};
btn1.addEventListener("click", function () {
  if (count === 1) {
    const conecreate = document.createElement("div");
    conecreate.className = "cone";
    document.body.appendChild(conecreate);

    //} else if (count === 2) {
    //const squarecreate = document.createElement("div");
    // squarecreate.className = "square";
    // document.body.appendChild(square);
    // } else if (count === 3) {
    //  const squarecreate = document.createElement("div");
    // squarecreate.className = "square";
    // document.body.appendChild(square);
    // else if (count === 4) {
    // const circlecreate = document.createElement("div");
    // squarecreate.className = "circle";
    // document.body.appendChild(circle);
  } else if (count === 2) {
    document.getElementById("warning").innerText =
      "You Can Select Only One Cone At A time ";
  }
});
btn2.addEventListener("click", function () {
  //if (count === 3) {
  const squarecreate = document.createElement("div");
  squarecreate.className = "square";
  document.body.appendChild(squarecreate);
  //} else if (count === 5) {
  // document.getElementById("creamful").innerText =
  //  "You Can't Take More Than this Cream";
  // }
});
btn3 = document.getElementById("clear");
btn3.addEventListener("click", function () {
  const el = document.getElementById("cone");
  el.remove();
  const el2 = document.getElementById("square");
  el2.remove();
});
