mainImg = document.getSelection('.mainImg');

var thumb1 = document.getSelection('#thumb1');
var thumb2 = document.getSelection('#thumb2');
var thumb3 = document.getSelection('#thumb3');

var thumb1Src = document.getSelection('#thumb1').src;
var thumb2Src = document.getSelection('#thumb2').src;
var thumb3Src = document.getSelection('#thumb3').src;

thumb1.addEventListener("click", () => {
    mainImg.src = thumb1Src
})

thumb2.addEventListener("click", () => {
    mainImg.src = thumb2Src
})

thumb3.addEventListener("click", () => {
    mainImg.src = thumb3Src
})