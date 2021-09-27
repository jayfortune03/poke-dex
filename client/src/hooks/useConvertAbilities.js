export default function useConvertAbilities(abilities) {
  const extractedAbility = abilities.map((el) => {
    return el.ability.name;
  });

  return extractedAbility.join(", ");
}
