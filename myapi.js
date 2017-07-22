const express = require('express');

const app = express();
const bodyParser = require('body-parser');

let convert = require('./functionstest.js');

app.use(bodyParser.json({ strict: false }));

const f2 = function () {
  console.log('function');
};
const dishes = { item: [
  {
    id: '1', name: 'korma', comment: 'tasty',
  },
				{ id: '2', name: 'biryani', comment: 'mughlai' },
				{ id: '3', name: 'dosa', comment: 'south indian' },
				{ id: '4', name: 'fried rice', comment: 'chinese' },
				{ id: '5', name: 'momo', comment: 'tibetan' },
] };

console.log('dishes.item.length', dishes.item.length);
app.get('/', (req, res) => {
  res.send(dishes);
});


app.post('/create', (req, res) => {
	// get stuff from req
  const newId = req.body.id;
  const itemName = req.body.name;
  const itemComment = req.body.comment;
  const newItem = { id: newId,
		             name: itemName,
								 comment: itemComment,
							 };

	// pass that stuff and run your logic, get response
  const response = convert.postItem(newItem, dishes);

	// set response in res
  res.send(response);
});

app.put('/edit/:id', (req, res) => {
	// console.log('req.params.id',req.params.id);
  const itemId = req.params.id;
  const newName =req.body.name;
  const newComment = req.body.comment;
  console.log(req.body);
  console.log('req.body.name : ', req.body.name);
  convert.editItem(itemId,newName,newComment,dishes);
  res.send(`item with id${itemId}has been edited to ${dishes.item[itemId - 1].name}`);
});

app.delete('/remove/:id', (req, res) => {
  const itemId = req.params.id;
  const itemDeleted = dishes.item[itemId - 1];

  dishes.item.splice([itemId - 1], 1);
  res.send(`already deleted. the deleted item is :${JSON.stringify(itemDeleted)}`);
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
