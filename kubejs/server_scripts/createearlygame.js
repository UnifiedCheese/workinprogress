settings.logSkippedRecipes = true
settings.logErroringRecipes = true
onEvent('recipes', event => { 
  event.remove({output: 'create:mechanical_press'})  
  event.shaped('create:mechanical_press', [
      ' Y ',
      'CAC',
      ' B '
    ], {
      A: 'create:andesite_casing',
      C: 'create:cogwheel',
      B: 'kubejs:cast_iron_block',
      Y: 'create:andesite_alloy'
  })
})