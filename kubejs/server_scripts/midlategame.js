onEvent('recipes', event => {
    event.remove({output: 'mekanism:steel_casing'})
    event.recipes.create.mechanical_crafting('mekanism:steel_casing', [
        'CSSSC',
        'SM MS',
        'S   S',
        'SM MS',
        'CSSSC'
      ], {
        S: '#forge:ingots/steel',
        C: 'create:shadow_steel_casing',
        M: 'botania:manasteel_ingot'
      })
})