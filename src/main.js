import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { assignAttrPoints } from './../src/rpg.js';


$(document).ready(function() {


  var attributePoints = 15;
  $('.attribute-points').html(attributePoints);

  $('.modifier').click(function() {
    var thisId = event.target.id;
    attributePoints = parseInt($('.attribute-points').text());
    assignAttrPoints(thisId, attributePoints, 0);
  });
  //
  // $('#char-creation').submit(function(event) {
  //   event.preventDefault();
  //   // processSolution();
  // });
});
