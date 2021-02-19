// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent(`jei.hide.items`, e => {
  e.hide([
      'create:powdered_obsidian'
  ]);
});

onEvent(`jei.add.items`, e => {
  
});
onEvent('item.tooltip', tooltip => {
  tooltip.add('minecraft:dirt', 'Consume it.')
  tooltip.add('minecraft:ender_eye', '§a#Blessed')
  tooltip.add('kubejs:prepared_pearl', '§2It must Be Blessed.')
})