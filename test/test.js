let assert = require('assert');
let convert = require('../functionstest.js');

const dishes = { item: [
  {
    id: '1', name: 'korma', comment: 'tasty',
  },
				{ id: '2', name: 'biryani', comment: 'mughlai' },
				{ id: '3', name: 'dosa', comment: 'south indian' },
				{ id: '4', name: 'fried rice', comment: 'chinese' },
				{ id: '5', name: 'momo', comment: 'tibetan' },
] };


describe('apitest',function(){
  describe('post',function(){
    it('should add new item',function(){
      const oldLength= dishes.item.length;
      console.log('oldLength is : ',oldLength);
      const newItem = {id:6,name:'chopsuey',comment:'chinese'};
      convert.postItem(newItem,dishes);
      const newLength = dishes.item.length;
      console.log('newLength is : ',newLength);
      assert.equal(1,(newLength-oldLength));
      console.log('newItem.name',newItem.name);

      assert.equal(newItem.name,dishes.item[newLength-1].name);
      console.log('dishes.item[newLength-1].name is : ',dishes.item[newLength-1].name);
      //assert.notNull(newLength)
    });
  });
  describe('edit',function(){
    it('should edit the item for given id',function(){
      const oldItemName=dishes.item[2].name;
      console.log('oldItemName :',oldItemName);
      const oldItemComment=dishes.item[2].comment;
      console.log('oldItemComment :',oldItemComment);
      const newName='bhaji pav';
      const newComment='goan';
      console.log('dishes in test after edit :',dishes);
      convert.editItem(3,newName,newComment,dishes);
      console.log('dishes in test after edit :',dishes);
      const newItemName= dishes.item[2].name;
      console.log('newItemName :',newItemName);

      const newItemComment = dishes.item[2].comment;

      console.log('newItemComment :',newItemComment);
      assert.notEqual(newItemName,oldItemName);
      assert.notEqual(newItemComment,oldItemComment);
    });
  });
});
