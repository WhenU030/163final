// *********************** show/hide sidebar *****************************
var show = document.getElementById("map");
var f_btn = document.getElementById("f-btn");

map.addEventListener('click', function(){
   document.getElementById('navbar').style.height = '0';
   document.getElementById('title').style.display = 'none';
   document.getElementById('logo').style.display = 'block';
});

f_btn.addEventListener('click', function(){
   document.getElementById('filterbar').style.width = '0px';
});

// *********************** show/hide filterbar end*****************************
// // *********************** flip filterbar *****************************

// Element.prototype.hasClassName = function (a) {
//     return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className);
// };

// Element.prototype.addClassName = function (a) {
//     if (!this.hasClassName(a)) {
//         this.className = [this.className, a].join(" ");
//     }
// };

// Element.prototype.removeClassName = function (b) {
//     if (this.hasClassName(b)) {
//         var a = this.className;
//         this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ");
//     }
// };

// Element.prototype.toggleClassName = function (a) {
//   this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a);
// };

// var init = function() {
//   var card = document.getElementById('card');

//   document.getElementById('flipbtn').addEventListener( 'click', function(){
//     card.toggleClassName('flipped');
//   }, false);
// };

// window.addEventListener('DOMContentLoaded', init, false);

// // *********************** flip filterbar end *****************************
