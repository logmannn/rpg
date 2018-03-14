import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { assignAttrPoints } from './../src/rpg.js';


$(document).ready(function() {




  $('.modifier').click(function() {
    var thisId = event.target.id;
    var attributePoints = parseInt($('.attribute-points').text());
    // alert(thisId);
    assignAttrPoints(thisId, attributePoints);
  });
  //
  // $('#char-creation').submit(function(event) {
  //   event.preventDefault();
  //   // processSolution();
  // });
});
