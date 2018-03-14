import { assignAttrPoints } from './../src/rpg.js';


describe('assignAttrPoints', function(){
  var thisId = "";

  it('Removes one from the total attribute points when you press increment', function(){
    expect(assignAttrPoints("str-increment", 15, 0)).toEqual(14);
  });
  it('Adds one to the total attribute points when you press increment if the current attribute is greater than 0', function(){
    expect(assignAttrPoints("str-decrement", 15, 1)).toEqual(16);
  });
  it('Does not add one to the total attribute points when the current attribute is 0', function(){
    expect(assignAttrPoints("str-decrement", 15, 0)).toEqual(15);
  });
});
