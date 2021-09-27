export default function useConvertHeight(height) {
  const toCentimeter = height * 10;
  const toInch = height * 3.93701;

  return `${parseFloat(toInch).toFixed(2)} in (${toCentimeter} cm)`;
}
