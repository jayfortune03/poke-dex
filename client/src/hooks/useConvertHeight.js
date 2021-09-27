export default function useConvertHeight(height) {
  const toCentimeter = height * 10;
  const toMeter = height / 10;

  return `${toCentimeter} cm (${toMeter} m)`;
}
