// Write a User class that contains a ranking system.

class User {
  constructor(rank, progress) {
    this.rank = rank || -8;
    this.progress = progress || 0;
  }
  incProgress(challengeRank) {
    if (challengeRank < -8 || challengeRank === 0 || challengeRank > 8) {
      throw new RangeError("Invalide challenge rank");
    }

    const rank = this.rank;
    const difference =
      rank < 0 && challengeRank > 0
        ? rank - challengeRank + 1
        : rank - challengeRank;

    let points = 10 * difference ** 2;

    if (difference === 0) {
      points = 3;
    }

    if (this.rank !== 1) {
      if (challengeRank === this.rank - 1) {
        points = 1;
      }
      if (challengeRank < this.rank - 1) {
        points = 0;
      }
    } else {
      if (challengeRank === -1) {
        points = 1;
      }
      if (challengeRank < -1) {
        points = 0;
      }
    }

    const total = this.progress + points;

    this.rank = this.rank + Math.floor(total / 100);
    this.rank = rank < 0 && this.rank >= 0 ? this.rank + 1 : this.rank;
    this.rank = this.rank > 8 ? 8 : this.rank;
    this.progress = this.rank < 8 ? total % 100 : 0;
  }
}

const user = new User();
console.log(user.rank, -8);
console.log(user.progress, 0);
user.incProgress(-7);
console.log(user.progress, 10);
user.incProgress(-5);
console.log(user.progress, 0);
console.log(user.rank, -7);
