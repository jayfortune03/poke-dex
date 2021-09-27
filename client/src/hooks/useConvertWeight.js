export default function useConvertWeight(weight) {
  const toKilogram = weight * 0.1;
  const toPounds = toKilogram * 2.20462262;

  return `${toPounds.toString().slice(0, 4)} lbs (${toKilogram} kg)`;
}
