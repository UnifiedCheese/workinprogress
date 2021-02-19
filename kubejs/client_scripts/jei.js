//client script
onEvent('jei.hide.items', event => {
  try {
    for(let tag of global["matchingTags"]){
      let stacks = Ingredient.of(tag).getStacks().toArray()
      let oItem = Ingredient.of(global["unifyTags"].get(tag)).getStacks().toArray()[0]
      for(let tItem of stacks){
          if(tItem.getId() != oItem.getId()){
            console.log("true " + tItem + " " + oItem)
            event.hide(tItem)
          }
          else{
            console.log("false " + tItem + " " + oItem)
          }
      }
    }
  } catch (err) {
    console.error(err)
  } 
})
