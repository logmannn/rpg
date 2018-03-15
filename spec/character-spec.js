import { Character } from './../src/character.js';


describe('character', function() {
  let char;
  let stats;

  beforeEach(function() {
    stats = ["roger", "rgb(51, 102, 255)", 0, 0, 0, 0, 1, 10, 0, 0];
    char = new Character(stats);
  });

  it('gets character name', function() {
    expect(char.name).toEqual("roger");
  });

  it('should add experience and level up character', function() {
    char.addExperience(32);
    expect(char.experience).toEqual(7);
    expect(char.level).toEqual(3);
    expect(char.nextLevel).toEqual(22);
  });

  // it('switches turns everytime', function() {
  //   char.changeTurn();
  //   expect(char.turn).toEqual(1);
  // });
});
