// eslint-disable-next-line no-unused-vars
/*eslint-env jquery*/
// eslint-disable-next-line no-unused-vars
/* global Item, cuid */
'use strict';
// eslint-disable-next-line no-unused-vars
const store = (function() {

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  function findById(id) {
    console.log('findById ran');
    return this.items.find(item => item.id === id);
  }

  // Inside store.js, make an addItem method, which accepts a name parameter. Use a try/catch block and the Item module
  // to validate the name and create the item, then push it to this.items.
  function addItem(name) {
    try {
      //validate name
      Item.validateName(name);
      //create the item & push it to items array
      this.items.push(Item.create(name));
    }
    catch(error) {
      console.log(error.message);
    }
  }

  function findAndToggleChecked(id) {
    const foundItem = this.findById(id);
    foundItem.checked = !foundItem.checked;
    // console.log('findAndToggleChecked ran');
  }

  // Make a findAndUpdateName method, which accepts id and newName parameters.
  // Use a try/catch to first validate the name and then use findById()
  // to fetch the item and update its name.
  // Inside catch, log out 'Cannot update name: {error.message}'
  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      const item = this.findById(id);
      console.log(item);
      item.name = newName;
    }catch(error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  }

  // Make a findAndDelete method, which accepts an id, and then removes the item from this.items.
  // (HINT: You can use array method .filter() or a combination of .findIndex() and .splice().)
  function findAndDelete(id) {
    this.items = this.items.filter(i => i.id !== id);
  }



  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
  };

}() );
