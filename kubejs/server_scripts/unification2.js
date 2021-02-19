//server script
//priority 998
onEvent("item.tags", event => {
    for(let tag of global["matchingTags"]){
        let stacks = Ingredient.of(tag).getStacks().toArray()
        let oItem = global["unifyTags"].get(tag)
        for(let tItem of stacks){
            if(tItem != oItem){
                event.remove(tag, tItem)
            }
        }
    }
})