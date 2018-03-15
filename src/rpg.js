export function assignAttrPoints (thisId, attributePoints, attributeValTest) {

  let valNumber = thisId.replace(/-(.*?)$/, 'Val');
  // console.log(valNumber);
  let attribute = thisId.replace(/^(.*?)-/, '');
  // console.log(attribute);

  let attributeVal = parseInt($('#'+valNumber).text());
  if (attributeValTest != 0) {attributeVal = attributeValTest}

  if (attributePoints == 0) {
    alert("You have no more attribute points!");
  }
  if (attribute == "increment") {
    if (attributePoints > 0) {
      $('#'+valNumber).html(attributeVal+1);
      $('.attribute-points').html(attributePoints-1);
      attributePoints = attributePoints-1;
    }
  } else {
    if (attributeVal != 0) {
      if (attributeVal > 0) {
        $('#'+valNumber).html(attributeVal-1);
        $('.attribute-points').html(attributePoints+1);
        attributePoints = attributePoints+1;
      }
      $('#'+valNumber).html(attributeVal-1);
    }
  }
  return attributePoints;
}
