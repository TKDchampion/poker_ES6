class Poker {
  constructor(suit, number) {
    this.suit = suit;
    this.number = number;
  }
  toString() {
    return `${this.suit}-${this.number}`;
  }
  get img() {
    const src = `http://fakeimg.pl/200x300/?text=${this.toString()}`;
    const img = document.createElement('img');
    img.src = src;
    return img;
  }
}

Array.prototype.concatAll = function () {
  return this.reduce(
    (results, current) =>
      Array.isArray(current)
        ? results.concat(current).concatAll()
        : (results.push(current), results),
    []
  );
}

// generate pokers
const pokers = ['spades', 'hearts', 'diamonds', 'clubs'].map(
  suit => Array.from(Array(13)).map((d, number) => new Poker(suit, number + 1))
).concatAll();

// shuffle poker
const shuffledPokers = [];
while(pokers.length){
  shuffledPokers.push(pokers.splice(Math.floor(Math.random() * pokers.length),1)[0]);
}

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const player3 = document.getElementById('player3');
const player4 = document.getElementById('player4');

shuffledPokers.splice(0,13).forEach(poker => player1.append(poker.img));
shuffledPokers.splice(0,13).forEach(poker => player2.append(poker.img));
shuffledPokers.splice(0,13).forEach(poker => player3.append(poker.img));
shuffledPokers.splice(0,13).forEach(poker => player4.append(poker.img));



