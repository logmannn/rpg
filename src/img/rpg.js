

export function assignAttrPoints (thisId, attributePoints) {

  var valNumber = thisId.replace(/-(.*?)$/, 'Val');
  // console.log(valNumber);
  var attribute = thisId.replace(/^(.*?)-/, '');
  // console.log(attribute);

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
  return attributePoints;
}
