// *********************** show/hide sidebar *****************************
var show = document.getElementById("map");

map.addEventListener('click', function(){
   document.getElementById('sidebar').style.width = '400px';
   document.getElementById('navbar').style.height = '0';
   document.getElementById('title').style.display = 'none';
   document.getElementById('logo').style.display = 'block';
});

map.addEventListener('dblclick', function(){
   document.getElementById('sidebar').style.width = '0px';
});

// *********************** End *****************************
// *********************** flip sidebar *****************************

Element.prototype.hasClassName = function (a) {
    return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className);
};

Element.prototype.addClassName = function (a) {
    if (!this.hasClassName(a)) {
        this.className = [this.className, a].join(" ");
    }
};

Element.prototype.removeClassName = function (b) {
    if (this.hasClassName(b)) {
        var a = this.className;
        this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ");
    }
};

Element.prototype.toggleClassName = function (a) {
  this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a);
};

var init = function() {
  var card = document.getElementById('card');

  document.getElementById('flipbtn').addEventListener( 'click', function(){
    card.toggleClassName('flipped');
  }, false);
};

window.addEventListener('DOMContentLoaded', init, false);

// *********************** flip sidebar end *****************************
