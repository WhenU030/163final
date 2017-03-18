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

// *********************** flip sidebar *****************************

(function() {
  var cards = document.querySelectorAll(".clickflip");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    flip( card );
  }

  function flip(card) {
    card.addEventListener( "click", function() {
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
})();

// var flip = document.getElementById('flipbtn');
// var card = document.getElementById("card");

// flip.addEventListener('click', function(){
//    var cardClass = card.className + ' ';
//     console.log("SSkkkkksss")
//     if ( ~cardClass.indexOf(' flipped ') ) {
//         this.cardClass = cardClass.replace(' flipped ', ' ');
//     } else {
//         this.cardClass += ' flipped';
//     }
// })
//
// document.getElementById('flipbtn').onclick = function() {
//     console.log("SSsssss")
//     var card = document.getElementById("card");
//     var cardClass = card.className + ' ';
//     console.log("SSkkkkksss")
//     if ( ~cardClass.indexOf(' flipped ') ) {
//         this.cardClass = cardClass.replace(' flipped ', ' ');
//     } else {
//         this.cardClass += ' flipped';
//     }
// }
//
// *********************** show/hide sidebar *****************************
