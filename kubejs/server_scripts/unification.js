//server script
//priority 999
var modPriority = ["minecraft", "thermal", "create", "mekanism"] //mods for unification go in this order (0->n), then all other mods
var resourceMaterials = ["iron", "gold", "redstone", "emerald", "coal", "charcoal", "lapis", "diamond", "quartz", "netherite", "copper",
                        "tin", "lead", "silver", "osmium", "compressed_iron", "steel", "nickel", "bronze", "electrum", "invar", "constantan",
                        "uranium", "signalum", "lumium", "enderium", "steel", "coal_coke"]
var resourceTypes = ["ingots", "gears", "nuggets", "storage_blocks", "dusts", "plates", "gems", "ores"]



function findMatchingTags(){
    //generate array of all possible tags
    let allPossible = []
    for(mat in resourceMaterials){
        for(type in resourceTypes){
            allPossible.push("#forge:" + resourceTypes[type] + "/" + resourceMaterials[mat])
        }
    }
    let actualTags = []
    if(allPossible.length != 0){
        for(tag in allPossible){
            if(!(Ingredient.of(allPossible[tag]).getStacks().toArray().length == 0)){
                actualTags.push(allPossible[tag])
            }
        }
    }
    console.info(actualTags)
    return actualTags
}
function recipeUnify(validTags, modPriority){
    var tagItems = new Map()
    for(let tag of validTags){
        let stacks = Ingredient.of(tag).getStacks().toArray()
        for(let mod of modPriority){
            for(let stack of stacks){
                if(stack.getMod() == mod){
                    let modString = stack.getItem().getId().split(":")[0]
                    if(!(tagItems.has(tag))){
                        tagItems.set(tag, stack.getItem().getId())
                        console.info(stack.getItem().getId())
                     }
                     else{
                         let currentModString = tagItems.get(tag).split(":")[0]
                         if(modPriority.indexOf(modString) > modPriority.indexOf(currentModString)){
                            tagItems.set(tag, stack.getItem().getId())
                            console.info("OVERRIDE: " + stack.getItem().getId())
                         }

                     }
                    
                }
            }
        }
    }
    return tagItems
    


}

onEvent('recipes', event => {
    var matchingTags = findMatchingTags()
    var unifyTags = recipeUnify(matchingTags, modPriority)
    global["matchingTags"] = matchingTags
    global["unifyTags"] = unifyTags
    for(let tag of matchingTags){
        let stacks = Ingredient.of(tag).getStacks().toArray()
        let oItem = unifyTags.get(tag)
        for(let tItem of stacks){
            event.replaceInput({}, tItem.getId(), tag)
            event.replaceOutput({}, tItem.getId(), oItem)
        }
    }
})
