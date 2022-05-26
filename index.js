document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
console.log('Hello' + ' World')

$(document).ready(function () {
          if (!$.browser.webkit) {
              $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
          }
      });
