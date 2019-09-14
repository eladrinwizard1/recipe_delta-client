angular.module('app.search', ['app.services', 'app.http'])
  .controller('searchCtrl', ['storage', 'message', 'search', searchCtrl])

function searchCtrl(storage, message, search) {
  this.storage = storage;
  this.message = message;
  this.search = search;
  this.ingredients = [];
  this.recipes = [];
  // Temporary data for UI testing
  /*this.recipes = [
    {
      "name": "Beef Stew",
      "desc": "This beef stew has both beef and stew",
      "ingredients": [
                        {
                          "name": "beef",
                          "owned": false
                        },
                        {
                          "name": "stew",
                          "owned": true
                        }
                     ],
      "time": "50 min",
      "url": "http://example.com",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1122px-Wikipedia-logo-v2.svg.png"
    },
    {
      "name": "Pork Stew",
      "desc": "This beef stew has both pork and stew",
      "ingredients": [
                        {
                          "name": "pork",
                          "owned": true
                        },
                        {
                          "name": "stew",
                          "owned": false
                        }
                     ],
      "time": "50 min",
      "url": "http://example.com",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1122px-Wikipedia-logo-v2.svg.png"
    }
  ];*/
}

searchCtrl.prototype.transformChip = function(chip) {
  if (angular.isObject(chip)) {
    return chip;
  }
  return {
    name: chip,
    type: 'new'
  }
}

searchCtrl.prototype.searchIngredients = function(name) {
  var self = this;
  return this.search.getIngredients(name).then(function(response) {
    return response.data;
  }, function(response) {
  //  self.message.toastTime(response.data);
    return [];
  })
}

searchCtrl.prototype.searchRecipes = function(ingredients) {
  var self = this;
  this.search.searchRecipes(ingredients).then(function(response) {
    if (response.data.length >= 16) {
      response.data = response.data.slice(0, 16);
    }
    self.setRecipes(response.data);
  }, function(response) {
  //  self.message.toastTime(response.data);
    self.setRecipes([]);
  })
}

searchCtrl.prototype.setRecipes = function(recipeIDs) {
  searchList = [];
  var self = this;
  this.clearRecipes();
  for (i = 0; i < recipeIDs.length; i++) {
    recipeData = this.search.getRecipe(recipeIDs[i]).then(function(response) {
      recipe = response.data;
      newIngredients = [];
      for (j = 0; j < recipe.ingredients.length; j++) {
        newIngredients.push({
          "name": recipe.ingredients[j],
          "owned": self.checkIngredient(recipe.ingredients[j])
        })
      }
      recipe.ingredients = newIngredients;
      self.addRecipe(recipe);
    }, function(response) {
      //self.message.toastTime(response.data);
    })
  }
}

searchCtrl.prototype.clearRecipes = function() {
  this.recipes = [];
}

searchCtrl.prototype.addRecipe = function(recipe) {
  this.recipes.push(recipe);
}

searchCtrl.prototype.checkIngredient = function(query) {
  ingredients = this.ingredients;
  for (i = 0; i < ingredients.length; i++) {
    if (query.includes(ingredients[i])) {
      return true;
    }
  }
  return false;
}
