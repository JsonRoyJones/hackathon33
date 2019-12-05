$(document).ready(function() {
  // $(this).attr(
  //   'src',
  //   '/Users/jasonjones/Desktop/Codesmith/cohort33/hackathon33/assets/explode.png'
  // );
  // );
  // change img to explosion
  // play explosion audio
  // randomize position
  let monsterA = $('#a');
  animateDiv(monsterA);
  // console.log('another div animated');
  new Monster(monsterA);
  animateDiv($('#a'));
  let monsterB = $('.b');
  $('.b').click(() => console.log('clicked B'));
  animateDiv(monsterB);

  let monsterC = $('.c');
  $('.c').click(() => console.log('clicked C'));
  animateDiv(monsterC);

  let monsterD = $('.d');
  $('.d').click(() => console.log('clicked D'));
  animateDiv(monsterD);
  // this works, but needs tweaking
  // let monster = new Monster($('.a'));
});
function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv(alphabet) {
  var newq = makeNewPosition();
  var oldq = alphabet.offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);
  // console.log(alphabet.position().top, alphabet.position().left);
  alphabet.animate({ top: newq[0], left: newq[1] }, speed, function() {
    animateDiv(alphabet);
  });
  $('#a').click(function clickBoom() {
    this.node = $('<img id="a"></img>');
    // console.log('clicked ', this.node);
    // this.node.attr('display', 'none');
    $('#a').detach();
    // console.log('detached');
    // a.style.left = x_pos + 'px';
    // a.style.top = y_pos + 'px';
    // new Monster('body');
    $(this.node).appendTo('body');
    console.log('appended to body', this.node);
    this.node.css({
      top: Math.floor(Math.random() * Math.floor(14)) * 50,
      left: Math.floor(Math.random() * Math.floor(14)) * 50
    });
    animateDiv(alphabet);
  });
}

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = 0.1;

  var speed = Math.ceil(greatest / speedModifier);

  return speed;
}
