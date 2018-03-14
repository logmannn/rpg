import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {

  $('.modifier').click(function() {
    var thisId = event.target.id;
    var valNumber = thisId.replace(/-(.*?)$/, 'Val');
    console.log(valNumber);
    var attribute = thisId.replace(/^(.*?)-/, '');
    console.log(attribute);
    var attributePoints = parseInt($('.attribute-points').text());
    var attributeVal = parseInt($('#'+valNumber).text());
    if (attributePoints == 0) {
      alert("You have no more attribute points!");
    }
    if (attribute == "increment") {
      if (attributePoints > 0) {
        $('#'+valNumber).html(attributeVal+1);
        $('.attribute-points').html(attributePoints-1);
      }
    } else {
      if (attributeVal != 0) {
        if (attributeVal > 0) {
          $('#'+valNumber).html(attributeVal-1);
          $('.attribute-points').html(attributePoints+1);
        }
        $('#'+valNumber).html(attributeVal-1);
      }
    }
  });
  //
  // $('#char-creation').submit(function(event) {
  //   event.preventDefault();
  //   // processSolution();
  // });
});
