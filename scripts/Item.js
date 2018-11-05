// eslint-disable-next-line no-unused-vars
/* global shoppingList, cuid */

// Objective: Build an Item module that
//contains functions to validate and create items.

'use strict';

const Item = (function () {

  function validateName(name) {
    if (name === ''){
      throw new TypeError('Name does not exist');
    }
  }

  const create = function(name) {
    return {
      id: cuid(),
      name: name,
      checked: false
    };

  };

  return {
    validateName,
    create
  };

}());
