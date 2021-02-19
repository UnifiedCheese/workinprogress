onEvent('recipes', event => {
    event.shapeless(Item.of('kubejs:cast_iron', 9), 'kubejs:cast_iron_block')
    event.shapeless(Item.of('kubejs:cast_iron_nugget', 9), 'kubejs:cast_iron')
    event.shapeless(Item.of('kubejs:cast_iron_block', 1), ['kubejs:cast_iron', 'kubejs:cast_iron', 'kubejs:cast_iron', 'kubejs:cast_iron', 'kubejs:cast_iron', 'kubejs:cast_iron', 'kubejs:cast_iron', 'kubejs:cast_iron', 'kubejs:cast_iron'])
    event.recipes.create.crushing(Item.of('kubejs:coke_dust', 2), 'thermal:coal_coke')
})

onEvent('item.tags', event => {
    event.get('forge:nuggets/iron').add('kubejs:cast_iron_nugget')
    event.get('forge:ingots/iron').add('kubejs:cast_iron')
  })
onEvent('fluid.tags', event => {
    event.get('minecraft:water').add('kubejs:gravy')
    event.get('minecraft:water').add('kubejs:flowing_gravy')
    event.get('minecraft:lava').add('kubejs:molten_iron')
    event.get('minecraft:lava').add('kubejs:flowing_molten_iron')
})