import seedrandom from 'seedrandom'

export const getRandom = (seed: string, min: number, max: number): number => {
  const rng = seedrandom(seed)
  const randomValue = rng()
  const range = max - min + 1
  const scaledValue = randomValue * range
  const result = scaledValue + min

  return parseFloat(result.toFixed(2))
}