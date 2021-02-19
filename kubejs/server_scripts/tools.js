settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true
onEvent('recipes', event => {
    event.remove({output: 'minecraft:iron_pickaxe'})
    event.shaped(Item.of('minecraft:iron_pickaxe', 1), [
        'PPP',
        ' S ',
        ' S '
      ], {
        S: 'minecraft:stick',
        P: '#forge:plates/iron'
      })

    event.remove({output: 'minecraft:iron_shovel'})
    event.shaped(Item.of('minecraft:iron_shovel', 1), [
        'P',
        'S',
        'S'
      ], {
        S: 'minecraft:stick',
        P: '#forge:plates/iron'
      })
    event.remove({output: 'minecraft:iron_axe'})
    event.shaped(Item.of('minecraft:iron_axe', 1), [
        'PP',
        'SP',
        'S '
      ], {
        S: 'minecraft:stick',
        P: '#forge:plates/iron'
      })
    event.remove({output: 'minecraft:iron_hoe'})
    event.shaped(Item.of('minecraft:iron_hoe', 1), [
        'PP',
        'S ',
        'S '
      ], {
        S: 'minecraft:stick',
        P: '#forge:plates/iron'
      })
    event.remove({output: 'minecraft:iron_sword'})
    event.shaped(Item.of('minecraft:iron_sword', 1), [
        'P',
        'P',
        'S'
      ], {
        S: 'minecraft:stick',
        P: '#forge:plates/iron'
      })
})
