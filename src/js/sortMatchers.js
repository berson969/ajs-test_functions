export default function sortMatchers(characters) {
  return characters.sort((a, b) => b.health - a.health);
}
