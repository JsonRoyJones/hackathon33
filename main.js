$(document).ready(function() {
  const monster = new Monster($('#overlay'));
  $('body').on('keydown', function(e) {
    if (e.keyCode === 37) {
      // control flow to limit backwards movement
      if (monster.currentDirection !== 'right') {
        // console.log('pressed left');
        monster.currentDirection = 'left';
        // change offset of tail
      }
    }
    if (e.keyCode === 38) {
      // control flow to limit backwards movement
      if (monster.currentDirection !== 'down') {
        // console.log('pressed up');
        monster.currentDirection = 'up';
      }
    }
    if (e.keyCode === 39) {
      // control flow to limit backwards movement
      if (monster.currentDirection !== 'left') {
        // console.log('pressed right');
        monster.currentDirection = 'right';
      }
    }
    if (e.keyCode === 40) {
      // control flow to limit backwards movement
      if (monster.currentDirection !== 'up') {
        // console.log('pressed down');
        monster.currentDirection = 'down';
      }
    }
  });
});
