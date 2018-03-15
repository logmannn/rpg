import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { assignAttrPoints } from './../src/rpg.js';


$(document).ready(function() {

  var colorList = [
    '000000', '993300', '333300', '003300', '003366',
    '000066', '333399', '333333', '660000', 'FF6633',
    '666633', '336633', '336666', '0066FF', '666699',
    '666666', 'CC3333', 'FF9933', '99CC33', '669966',
    '66CCCC', '3366FF', '663366', '999999', 'CC66FF',
    'FFCC33', 'FFFF66', '99FF66', '99CCCC', '66CCFF',
    '993366', 'CCCCCC', 'FF99CC', 'FFCC99', 'FFFF99',
    'CCffCC', 'CCFFff', '99CCFF', 'CC99FF', 'FFFFFF'
  ];

  var picker = $('#color-picker');

  for (var i = 0; i < colorList.length; i++ ) {
    picker.append('<li class="color-item" data-hex="' + '#' + colorList[i] + '" style="background-color:' + '#' + colorList[i] + ';"></li>');
  }

  $('body').click(function () {
    picker.fadeOut();
  });

  $('.call-picker').click(function(event) {
    event.stopPropagation();
    picker.fadeIn();
    picker.children('li').hover(function() {
      let codeHex = $(this).data('hex');
      $('.color-holder').css('fill', codeHex);
      $('.cat-image').css('fill', codeHex);
      $('#pickcolor').val(codeHex);
    });

    $('#reset-color').click(function (event) {
      event.preventDefault();
      $('.cat-image').css('fill', "#FFFFFF");
      $('.color-holder').css('fill', "#FFFFFF");
    });
  });

  var attributePoints = 15;
  $('.attribute-points').html(attributePoints);

  $('.modifier').click(function() {
    let thisId = event.target.id;
    attributePoints = parseInt($('.attribute-points').text());
    assignAttrPoints(thisId, attributePoints, 0);
  });

  $('#char-creation').submit(function(event) {
    event.preventDefault();
    $(".character-create-screen").hide();
    $(".character-stats").hide();
    $(".player-home").show();
    $("#show-stats").show();
    $(".player-home").show();
  });

  $('#show-stats').click(function() {
    $(".character-stats").toggle();
    var charName = $("#charName").val();
    var codeHex = $('.cat-image').css("fill");
    var strength = $('#strVal').text();
    var accuracy = $('#accVal').text();
    var defense = $('#defVal').text();
    var vitality = $('#vitVal').text();
    // var level = $('#vitVal').text();
    // var stats = [charName, codeHex, strength, accuracy, defense, vitality];

    $(".display-name").html(charName);
    $(".display-color").html(codeHex);
    $(".display-strength").html(strength);
    $(".display-accuracy").html(accuracy);
    $(".display-defense").html(defense);
    $(".display-vitality").html(vitality);
    // $(".display-level").html(level);
  });

  $('#arena').click(function() {
    $(".player-home").hide();
    $(".arena").show();
  });
});
