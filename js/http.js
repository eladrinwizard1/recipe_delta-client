angular.module('app.http', ['app.services'])
  .service('search', ['storage', '$http', search])

var api = "";

function search(storage, $http) {
  this.storage = storage;
  this.http = $http;
}

search.prototype.searchRecipes = function(ingredients) {
  // Passes a list of ingredient IDs to a POST
  // Returns a list of recipe IDs
  var params = {
    "ingredients": ingredients
  }

  return this.http.post(api + "/search/", ingredients);
}

search.prototype.getRecipe = function(id) {
  // Passes a specific recipe ID
  // Returns a detailed recipe object
  return this.http.get(api + "/recipe/" + id.toString());
}

search.prototype.getIngredients = function(query) {
  // Passes a partial or full ingredient name
  // Returns a list of ingredient objects that match the query
  return this.http.get(api + "/ingredients/" + query);
}
