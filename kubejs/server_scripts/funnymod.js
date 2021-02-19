onEvent('recipes', event => {
    event.custom({
        "type": "thermal:bottler",
        "ingredient": [
            {
            "item": "minecraft:snowball"
            },
            {
            "fluid": "thermal:syrup",
            "amount": 250
            }
        ],
        "result": [
            {
            "item": "kubejs:maple_taffy"
            }
        ]
    })
    event.recipes.create.filling('kubejs:poutine', [
        'kubejs:fries',
        {fluid: 'kubejs:gravy', amount: 250}
      ])
})
events.listen('item.food_eaten',function(event){
    if(event.item.id == "kubejs:poutine"){
      event.entity.runCommand('/kill');
      event.entity.tell("You ate a poisoned apple :Yikes:");
    }
  });
events.listen('entity.spawned',function(event){
    if(event.entity.id == "minecraft:sheep"){
        event.entity.setMaxHealth(300);
        event.entity.setHealth(300);
    }
});