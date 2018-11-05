// eslint-disable-next-line no-unused-vars
/*eslint-env jquery*/
// eslint-disable-next-line no-unused-vars
/* global shoppingList, cuid */
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
    console.log(`findById ran`);
    return store.items.find(id);
  }

  function addItem(name) {
    try {
      //validate name
      Item.validateName(name);
      //create the item & push it to items array
      this.items.create.push(name);
    }
    catch(error) {
      console.log(error.message);
    }
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
  };

}() );

