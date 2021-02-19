settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true
var x;

onEvent('recipes', event => {

    event.remove({output: '#forge:ingots/iron'})
    //ore to cast iron
    event.recipes.minecraft.blasting(item.of('kubejs:cast_iron'),'minecraft:iron_ore')

    //clumps to iron compacting(heated)
    event.recipes.create.compacting(['dustrial_decor:rusty_iron_ingot'],'create:crushed_iron_ore').heated()
    //ore to molten impure iron + sulfur in superheated
    event.recipes.create.mixing(fluid.of('kubejs:impure_molten_iron', 144), 'dustrial_decor:rusty_iron_ingot').heated()
    //molten impure iron to pure molten iron in superheated mixer
    event.recipes.create.mixing(fluid.of('kubejs:molten_iron', 144), [fluid.of('kubejs:impure_molten_iron', 144)]).heated()
    //molten iron to blocks in compactor to get high grade iron
    event.recipes.create.compacting(['minecraft:iron_block'], fluid.of('kubejs:molten_iron', 1296))
    // fluid.of('kubejs:molten_iron', 1296)
    event.shapeless(Item.of('minecraft:iron_ingot', 9), 'minecraft:iron_block')
    event.shapeless(Item.of('minecraft:iron_nugget', 9), 'minecraft:iron_ingot')
    event.shapeless('minecraft:iron_ingot', Item.of('minecraft:iron_nugget', 9))
})

onEvent('recipes', event => {
    //high grade iron to molten superheated mixer
    event.recipes.create.mixing(fluid.of('kubejs:molten_iron', 144), ['minecraft:iron_ingot']).heated()
    //molten iron + limestone dust to get low carbon molten iron
    event.recipes.create.mixing(fluid.of('kubejs:low_carbon_molten_iron', 144), ['kubejs:limestone_dust', fluid.of('kubejs:molten_iron', 144)],).superheated()
    //coke dust + lowcarbsteel = molten steel
    event.recipes.create.mixing(fluid.of('kubejs:molten_steel', 144), ['kubejs:coke_dust', fluid.of('kubejs:low_carbon_molten_iron', 144)],).superheated()
    //molten steel to steel block
    event.recipes.create.compacting(['mekanism:block_steel'], fluid.of('kubejs:molten_steel', 1296))
}) 