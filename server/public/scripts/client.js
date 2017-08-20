// function Phirephiter(name, username, shoutout){
//   this.name = name;
//   this.username = username;
//   this.shoutout = shoutout;
// }
var phirephiterArray;
var currentPersonIndex = 0;
var currentBlockIndex = 0;
var numberOfBlocks = 18;

$(document).ready(function(){
  // Upon page load, get the data from the server
  $.ajax({
    method: "GET",
    url: "/data",
    success: function(data){
      // yay! we have data!
      // console.log('returned data from server: ', data);
      phirephiterArray = data.phirephiters;
      console.log(phirephiterArray.length);
      console.log(phirephiterArray[1]);
      // init();
      // loadCarousel(phirephiterArray);

      displayPersonAtIndex(0);

    }
     // sucess done
  });

  addBlocksToPage();
  // highlightBlock(0);

  currentPersonIndex = currentBlockIndex;
  // highlightBlock(currentBlockIndex);

  $('#next').on('click', function(){
    $('.content').empty();

    // $('#carouselBlock').addClass(focus);
    currentPersonIndex++;
    highlightBlock(currentPersonIndex);
    console.log(currentPersonIndex);
    if (currentPersonIndex < phirephiterArray.length) {
      displayPersonAtIndex(currentPersonIndex);
  } else {
    currentPersonIndex = 0;
    displayPersonAtIndex(currentPersonIndex);
  }

  });

  $('#prev').on('click', function(){
    $('.content').empty();
    // currentPersonIndex = currentBlockIndex;
    // $('#carouselBlock').addClass(focus);
    currentPersonIndex--;
    highlightBlock(currentPersonIndex);
    if (currentPersonIndex >= 0) {
      displayPersonAtIndex(currentPersonIndex);
    } else {
    currentPersonIndex = 17;
    displayPersonAtIndex(currentPersonIndex);
  }
  });
  // highlightBlock(currentPersonIndex);

  // loadCarousel(data.phirephiters[i]);
});


// display one person option 2
function displayPersonAtIndex(i) {
  $(".content").append("<div class='person'></div>");
  $(".content").children().last();
  var $el = $(".content").children().last();
  $el.append('<h2>' + phirephiterArray[i].name + '</h2>');
  $el.append('<p>' + phirephiterArray[i].git_username + '</p>');
  $el.append('<p>' + phirephiterArray[i].shoutout + '</p>');
  // highlightBlock();
}


function addBlocksToPage() {
  // $('#carouselBlock').empty();
  for (var i = 0; i < numberOfBlocks; i++) {
    var newCarouselBlock = $('<div>');
    // var blockNumber = i;
    // newCarouselBlock.data(blockNumber);
    newCarouselBlock.css('background-color', 'Aqua');
    newCarouselBlock.addClass('carouselColorBlock');
    // newCarouselBlock.attr('#' + i );
    $('#carouselBlock').append(newCarouselBlock);
  }
}

function highlightBlock(currentBlockIndex) {
  var i = currentBlockIndex;
  // var $blockToHighlight = '#' + i;
  var $blockToHighlight = $(i);
  if ($blockToHighlight == i) {
    $blockToHighlight.addClass('active');
  } else {
  // $blockToHighlight.removeClass('active');
}
}

// function unhighlightBlock(person) {
//   var $unHighBlock = $('#' + person)
// }






  // var blocks = $('#carouselColorBlock').length;







//   var highlightedBlock = currentPersonIndex;
//   if ( highlightedBlock === carouselColorBlock.data().currentBlockIndex ) {
//   $('#carouselColorBlock').addClass('active');
// } else {
//   $('#carouselColorBlock').addClass('carouselColorBlock');
//   }
// }

// writes everything to the DOM option 1
// function loadCarousel(phirephiterArray){
//   for (var i = 0; i < phirephiterArray.length; i++) {
//   $(".content").append("<li class='person'></li>");
//   $(".content").children().last();
//   var $el = $(".content").children().last();
//   // $el.data("name", phirephiterArray[i].name);
//   // $el.data("username", phirephiterArray[i].username);
//   // $el.data("shoutout", phirephiterArray[i].shoutout);
//   $el.append('<h2>' + phirephiterArray[i].name + '</h2>');
//   $el.append('<p>' + phirephiterArray[i].git_username + '</p>');
//   $el.append('<p>' + phirephiterArray[i].shoutout + '</p>');
// }
// }
//
//




// function init(){
//   $(".content").children().empty();
//   carousel = (function(){
//     var box = document.querySelector('.carouselbox');
//     var next = box.querySelector('.next');
//     var prev = box.querySelector('.prev');
//     var counter = 0;
//     var items = box.querySelectorAll('.content li');
//     var amount = items.length;
//     var current = items[0];
//     box.classList.add('active');
//     function navigate(direction) {
//       current.classList.remove('current');
//       counter = counter + direction;
//       if (direction === -1 && counter < 0) {
//         counter = amount - 1;
//       }
//       if (direction === 1 && !items[counter]) {
//         counter = 0;
//       }
//       current = items[counter];
//       current.classList.add('current');
//         }
//         next.addEventListener('click', function(ev){
//           navigate(1);
//         });
//         prev.addEventListener('click', function(ev){
//           navigate(-1);
//         });
//         navigate(0);
//       })();
//     }


//   function buildPhirephiters(phirephiterArray) {
//     for (var i = 0; i < phirephiterArray[i].length; i++) {
//       var newPhirephiter = new Phirephiter(phirephiterArray[i]);
// }
// }
