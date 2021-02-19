settings.logErroringRecipes = true
onEvent('recipes', event => {
    //CHROMATIC COMPOUND
    event.remove({output: 'create:chromatic_compound'})
    event.recipes.create.mixing('create:chromatic_compound', 
    ['#forge:scales/dragon', 'create:polished_rose_quartz', 'mekanism:dust_refined_obsidian', 'mekanism:dust_refined_obsidian', 'minecraft:netherite_scrap',  
    'mekanism:dust_refined_obsidian', '#forge:ingots/terrasteel', '#forge:ingots/refined_glowstone', 
    '#forge:ingots/refined_glowstone', '#forge:ingots/refined_glowstone']).superheated()
    //REFINED OBSIDIAN
    event.remove({output: 'create:powdered_obsidian'})
    event.recipes.create.crushing(['#forge:dusts/obsidian', Item.of('minecraft:obsidian').withChance(0.75)], 'minecraft:obsidian')
    //REFINED GLOWSTONE INGOTS
    event.recipes.create.compacting('#forge:ingots/refined_glowstone', ['minecraft:glowstone_dust', 'mekanism:ingot_osmium']).superheated()
    //SIGNALUM
    event.remove({output: '#forge:dusts/signalum'})
    event.recipes.create.mixing('thermal:signalum_dust', ['minecraft:blaze_powder', 'mekanism:enriched_redstone', '#forge:dusts/steel', '#forge:dusts/steel', '#forge:nuggets/terrasteel']).superheated()
    event.remove({id: 'thermal:fire_charge/signalum_ingot_4'})
    //PLATES
    /*
    let metal = ['signalum', 'enderium']
    metal.forEach(metal => {
        event.recipes.create.pressing(`#forge:plates/${metal}`, `#forge:ingots/${metal}`);
      });
    */
    //EYES OF ENDER
    event.remove({output: 'minecraft:ender_eye'})
    event.recipes.create.compacting('kubejs:prepared_pearl', ['thermal:signalum_dust', 'thermal:signalum_dust', 'minecraft:ender_pearl', 'minecraft:phantom_membrane',
     'minecraft:ender_pearl', 'create:chromatic_compound', 'create:chromatic_compound' ]).superheated()
    //ENRICHED REDSTONE
    event.recipes.create.compacting('mekanism:enriched_redstone', ['minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone', 
    'minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone']).heated()
    //Circuits
    event.remove({output: 'create:integrated_circuit'})
    event.recipes.create.mechanical_crafting('create:integrated_circuit', [
      ' EEEE ',
      'ESSSSE',
      'GGGGGG'
    ], {
      E: '#forge:plates/enderium',
      S: '#forge:dusts/signalum',
      G: 'minecraft:gold_nugget'
    })
    //ENDERIUM
    event.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
    event.remove({id: 'thermal:enderium_dust_2'})
    event.recipes.create.crushing([Item.of('#forge:dusts/enderium').withChance(0.05), Item.of('minecraft:end_stone').withChance(0.50)], 'minecraft:end_stone')
    //ROSE QUARTZ
    event.remove({output: 'create:rose_quartz'})
    event.recipes.create.mixing('create:rose_quartz', ['minecraft:quartz', 'biomesoplenty:nether_crystal', 'mekanism:enriched_redstone'])
    event.custom({
      "type": "botania:elven_trade",
      "ingredients": [
        {
          "item": "kubejs:prepared_pearl"
        }
      ],
      "output": [
        {
          "item": "minecraft:ender_eye"
        }
      ]
    })
})
 