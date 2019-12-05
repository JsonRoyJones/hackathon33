// creates a constructor function - research ES6 classes
class Monster {
  // this is what's called when you use the "new" keyword
  constructor($el) {
    this.node = $('<img class="a"></img>');
    this.node.attr('src', 'assets/PinClipart.com_motion-clipart_1236689.png');
    this.currentDirection = 'right';
    this.SPEED = 500;
    $el.append(this.node);
    this.node.css({
      top: Math.floor(Math.random() * Math.floor(14)) * 50,
      left: Math.floor(Math.random() * Math.floor(14)) * 50
    });
    this.prevPosArr = [];
    this.monsterPos = [];
    setTimeout(this.move.bind(this), this.SPEED);
  }

  // same as Head.prototype.move = function() {...}
  move() {
    let direction = this.currentDirection;
    let position = this.node.position();
    this.prevPosArr.unshift(position);

    if (direction === 'right') {
      position.left += 50;
      if (position.left > 650) {
        if (confirm('Game over! Thanks for playing. Play again?')) {
          location = location;
        } else {
          return;
        }
        // rather than alert, use confirm to prompt user to play again
        // on click, restart game function or refresh page
        // need to refactor later
      }
    }
    // left, up, down
    if (direction === 'left') {
      position.left -= 50;
      if (position.left < 0) {
        if (confirm(`Game over. Thanks for playing! Play again?`)) {
          location = location;
        } else {
          return;
        }
        // rather than alert, use confirm to prompt user to play again
        // on click, restart game function or refresh page
      }
    }
    if (direction === 'down') {
      position.top += 50;
      if (position.top > 650) {
        if (confirm('Game over! Thanks for playing. Play again?')) {
          location = location;
        } else {
          return;
        }
        // rather than alert, use confirm to prompt user to play again
        // on click, restart game function or refresh page
      }
    }
    if (direction === 'up') {
      position.top -= 50;
      if (position.top < 0) {
        if (confirm('Game over! Thanks for playing. Play again?')) {
          location = location;
        } else {
          return; //alert('Thanks for playing!');
        }
        // rather than alert, use confirm to prompt user to play again
        // on click, restart game function or refresh page
      }
    }

    // this.node.css(position);
    // setTimeout(this.move.bind(this), this.SPEED);
    // // apple.node.css(position);
    // let applePos = $('#apple').position();
    // // control flow checking position values against
    // if (position.left === applePos.left && position.top === applePos.top) {
    //   console.log('apple got ate');
    //   // creating tail segment
    //   // [{head}, {node}, {tail}]
    //   // this.prevPosArr.push([position.top, position.left])
    //   let tail = new Tail($('#board'));
    //   this.tails.push(tail);
    //   // changing position of tail segment
    //   // let tailPos = $("#tail").position();
    //   // $("#tail").css({
    //   //   top: position.top,
    //   //   left: position.left
    //   // })
    //   $('#apple').css({
    //     top: Math.floor(Math.random() * Math.floor(14)) * 50,
    //     left: Math.floor(Math.random() * Math.floor(14)) * 50
    //   });

    //   // return alert("this is working")
    //   // apple = null;
    // }
    // for (let i = 0; i < this.tails.length; i++) {
    //   this.tails[i].node.css(this.prevPosArr[i + 1]);
    //   if (
    //     position.left === this.tails[i].node.position().left &&
    //     position.top === this.tails[i].node.position().top
    //   ) {
    //     alert('Game over! Play again?');
    //     location = location;
    //     // } else { return alert('Thanks for playing!') }
    //   }
    // }
  }
}
