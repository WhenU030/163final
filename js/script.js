// *********************** show/hide sidebar *****************************
var showfilter = document.getElementById("map");
var reset = document.getElementById("reset");

showfilter.addEventListener('click', function(){
   document.getElementById('filterbar').style.width = '0px';
});

reset.addEventListener('click', function(element){
   document.getElementById('filterbar').style.width = '470px';
   if (!element.checked) {
      element.setAttribute("checked", "");
   }
});

// *********************** show/hide sidebar end *****************************

// *********************** checkbox status *****************************
function toggleCheckbox(element){
   if (element.checked) {
      element.setAttribute("checked", "checked");
   } else {
      element.setAttribute("checked", "");
   }
}

// *********************** checkbox status *****************************

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
