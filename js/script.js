// *********************** show/hide sidebar *****************************
var showfilter = document.getElementById("map");
var reset = document.getElementById("reset");
var checked = document.getElementsByClassName('check');

var close = document.getElementById('close');

showfilter.addEventListener('click', function(){
   document.getElementById('filterbar').style.width = '0px';
   // document.getElementById('detailbar').style.display = "none";
});

close.addEventListener('click', function(){
   document.getElementById('detailbar').style.display = 'none';
});

reset.addEventListener('click', function(){
   document.getElementById('filterbar').style.width = '470px';
   var checked = document.getElementsByName('check');
   for (var i = 0; i < checked.length; i++) {
      if (document.getElementsByName("check")[i].checked) {
               document.getElementsByName("check")[i].checked = false;
           }
   }

   d3.selectAll('.circleMap').style("opacity", 1);
   d3.selectAll('.cir-star-selected').class('cir-star-selected', false);
   d3.selectAll('.cir-rev-selected').class('cir-rev-selected', false);
   d3.selectAll('.cir-cat-selected').class('cir-cat-selected', false);
   d3.selectAll('.selected-bar').class('selected-bar', false);


});

// *********************** show/hide sidebar end *****************************

// *********************** checkbox status *****************************
function toggleCheckbox(element){
   if (element.checked) {
      element.setAttribute("checked", "checked");
      selectBoxs(element);
   } else {
      element.setAttribute("checked", "");
      unselectBoxs(element);
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
