let convert = {};

convert.postItem = function (newItem,dishes) {
  dishes.item.push(newItem);
  return dishes;
};


convert.editItem = function(itemId,newName,newComment,dishes){
  const oldName=dishes.item[itemId-1].name;
  const oldComment=dishes.item[itemId-1].comment;
  if(newName){
     if(newName!==oldName){
       dishes.item[itemId - 1].name = newName;
     }

  }
  if(newComment){
    if(newComment!==oldComment){
        dishes.item[itemId - 1].comment = newComment;
    }

  }
  return dishes;

}


// / non-linted proper indentation
// / make it work, then make it work better
// / linting
// / ideal names for functionas and vars
// / es6
// / testing

module.exports = convert;
