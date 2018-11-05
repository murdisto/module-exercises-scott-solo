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
    return store.items.find(id => items.id === id);
  }

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
    const foundItem = this.items.findById(id);
    foundItem.checked = !foundItem.checked;
    // console.log('findAndToggleChecked ran');
  }

  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(name);
      this.items.findById(id);
      this.items.name = newName;
    }catch(error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  }

  function findAndDelete(id) {
    this.items.filter(i => i !== id);
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
