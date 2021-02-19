onEvent('recipes', event => {
    event.remove({output: 'dustrial_decor:barbed_chain_link_fence'})
    event.shaped('dustrial_decor:barbed_chain_link_fence', [
        'CBC',
        'BCB',
        'CBC'
      ], {
        B: '#forge:nuggets/iron',
        C: 'minecraft:chain'
    })
})