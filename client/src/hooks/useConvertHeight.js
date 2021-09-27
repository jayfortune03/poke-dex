export default function useConvertHeight(height) {
  const toCentimeter = height * 0.1;

  return toCentimeter.toString().slice(0, 3) + " cm";
}
