// Create a SignMaster class that uses the Levenshtein Distance algorithm.

class SignMaster {
  constructor() {
    this.add = 0;
    this.rem = 0;
  }
  changePrices(prices) {
    this.add = prices?.add ?? 0;
    this.rem = prices?.rem ?? 0;
  }
  estimatePrice(oldSign, newSign) {
    const { insertions, deletions } = this.editDistanceCounts(oldSign, newSign);
    return insertions * this.add + deletions * this.rem;
  }
  editDistanceCounts(str1, str2) {
    // Levenshtein Distance Algorithm
    const m = str1.length;
    const n = str2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
      dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
      dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    // Backtracking to count insertions and deletions
    let i = m;
    let j = n;
    let insertions = 0;
    let deletions = 0;

    while (i > 0 || j > 0) {
      if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) {
        deletions++;
        i--;
      } else if (j > 0 && dp[i][j] === dp[i][j - 1] + 1) {
        insertions++;
        j--;
      } else {
        i--;
        j--;
      }
    }

    return { insertions, deletions };
  }
}

const sign = new SignMaster();
sign.changePrices({ add: 5, rem: 4 });
console.log(sign.estimatePrice("totes", "toes"), 4);
console.log(sign.estimatePrice("totes", "oats"), 13);

sign.changePrices({ add: 77, rem: 73 });
console.log(sign.estimatePrice("lk3w6jkk5td0kfobjgif", "4plus98rt7g2u8tdibc"), 2323);

// Create class SignMaster with two functions:
//   - changePrices(prices: object<add: price, rem: price). Should handle incomplete data. Default is free.
//   - estimatePrice(oldSign, newSign). Return the cost of changing the sign from old to new. If there are multiple ways, return the cheapest.
