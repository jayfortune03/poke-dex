export default function useConvertWeight(weight) {
  const kilograms = weight * 0.1;
  const pounds = kilograms / 0.45359237;

  return `${pounds.toString().slice(0, 4)} lbs (${kilograms} kg)`;
}
