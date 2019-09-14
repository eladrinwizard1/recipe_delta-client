angular.module('app.http', ['app.services'])
.service('search', ['storage', '$http', search])

function search(storage, $http) {
  this.storage = storage;
  this.http = $http;
}

search.prototype.searchRecipes = function(ingredients) {
  // Passes a list of ingredient IDs to a POST
  // Returns a list of recipe IDs
}

search.prototype.getRecipe = function(id) {
  // Passes a specific recipe ID
  // Returns a detailed recipe object
}

search.prototype.getIngredients = function(query) {
  // Passes a partial or full ingredient name
  // Returns a list of ingredient objects that match the query
}
