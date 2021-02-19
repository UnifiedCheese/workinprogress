
onEvent('recipes', event => {
    event.remove({output: '#forge:plates/iron', type: 'create:pressing'})
    event.recipes.create.pressing('#forge:plates/iron', '#forge:ingots/iron')

    event.remove({output: 'minecraft:blast_furnace'})
    event.shaped('minecraft:blast_furnace', [
        'CCC',
        'CBC',
        'CBC'
      ], {
        B: '#forge:stone',
        C: 'minecraft:bricks'
      })
})