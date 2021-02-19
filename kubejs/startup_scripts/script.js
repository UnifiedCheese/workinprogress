// priority: 0
onEvent('item.registry', event => {
  // Register new items here
  // event.create('example_item').displayName('Example Item')
  event.create('limestone_dust').displayName('Limestone Dust')
  event.create('cast_iron').displayName('Cast Iron')
  event.create('cast_iron_nugget').displayName('Cast Iron Nugget')
  event.create('coke_dust').displayName('Coke Dust')
  event.create('low_iron').displayName('Low Grade Iron')
  event.create('circuit_board').displayName('Terrasteel Circuit Board').tooltip(Text.green(''))
  event.create('enderium_cpu').displayName('Enderium CPU')
  event.create('prepared_pearl').displayName('Prepared Pearl')
  event.create('uncooked_fries').displayName('Uncooked Fries')
  event.create('fries').displayName('Fries')
  event.create('maple_taffy').displayName('Maple Taffy').food(function(food){
    food.hunger(5)
    food.saturation(10)
  })
  event.create('poutine').displayName('Poutine').food(function(food){
    food.hunger(10)
    food.saturation(10)
    food.effect('minecraft:regeneration', 400, 0, 1.0)
    //food.effect('farmersdelight:comfort', 2400, 0, 1.0)
    //food.effect('farmersdelight:nourished', 2400, 0, 1.0) //wait untill this gets fixed
  })
})

onEvent('block.registry', event => {
  // Register new blocks here
  // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})
events.listen('block.registry', function (event) {
  event.create('cast_iron_block').material('iron').hardness(0.5).displayName('Cast Iron Block')
})