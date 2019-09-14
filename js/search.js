angular.module('app.search', ['app.services', 'app.http'])
  .controller('searchCtrl', ['storage', 'message', 'search', searchCtrl])

function searchCtrl(storage, message, search) {
  this.storage = storage;
  this.message = message;
  this.search = search;
  this.ingredients = [];

  // Temporary data for UI testing
  this.recipes = [
    {
      "title": "Beef Stew",
      "description": "This beef stew has both beef and stew",
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
      "time": "50",
      "link": "http://example.com",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1122px-Wikipedia-logo-v2.svg.png"
    }
  ];
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
    self.message.toastTime(response.data);
    return [];
  })
}

searchCtrl.prototype.searchRecipes = function(ingredients) {
  var self = this;
  this.search.searchRecipes(ingredients).then(function(response) {
    self.setRecipes(response.data);
  }, function(response) {
    self.message.toastTime(response.data);
    self.setRecipes([]);
  })
}

searchCtrl.prototype.setRecipes = function(recipeIDs) {
  var self = this;
  recipes = [];
  for(recipe in recipeIDs) {
    recipeData = this.search.getRecipe(recipe).then(function(response) {
      recipes.push(response.data);
    }, function(response) {
      self.message.toastTime(response.data);
    })
  }
  this.recipes = recipes;
}
