function getParticipants(num) {
  let count = 0;

  while (num > (count * (count - 1)) / 2) {
    count++;
  }

  return count;
}
