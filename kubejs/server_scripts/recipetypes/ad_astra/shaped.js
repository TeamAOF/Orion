
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  const recipes = [
    {
      output: '16x ad_astra:iron_plating',
      pattern: ['AAA', 'AAA'],
      key: {
        A: 'modern_industrialization:iron_plate',
      },
      id: 'ad_astra:recipes/iron_plating'
    }
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
