var attrStats = [];
export function assignAttrPoints () {
  $('#char-creation :input').each(function() {
    var input = $(this).val();
    attrStats.push(parseInt(input));
  });
}
