////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {
    
  const recipes = [
{
  output: 'wands:stone_wand',
  pattern: ['  A', ' B ', 'B  '],
  key: {
    A: '#c:stone',
    B: 'minecraft:stick',
},
  id: 'wands:stone_wand'
},

{
  output: 'wands:iron_wand',
  pattern: ['  A', ' B ', 'B  '],
  key: {
    A: '#c:iron_plates',
    B: 'minecraft:stick',
},
  id: 'wands:iron_wand'
},

{
  output: 'wands:diamond_wand',
  pattern: ['  A', ' B ', 'B  '],
  key: {
    A: '#c:diamond_plates',
    B: 'minecraft:stick',
},
  id: 'wands:diamond_wand'
}
];

recipes.forEach((recipe) => {
event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
 });
});
