export function shuffleNumbers(
  amount: number,
  max: number = 151
): Array<number> {
  const shuffledNumbers: Array<number> = [];

  for (let index: number = 0; index < amount; index++) {
    const shuffledNumber = Math.floor(Math.random() * max) + 1;

    if (!shuffledNumbers.find((number) => number === shuffledNumber)) {
      shuffledNumbers.push(shuffledNumber);
      continue;
    }

    index--;
  }
  return shuffledNumbers;
}
