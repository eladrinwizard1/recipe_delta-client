angular.module('app.search', ['app.services', 'app.http'])
  .controller('searchCtrl', ['storage', searchCtrl])

function searchCtrl(storage) {
  this.storage = storage;
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
  // Passes a name or partial name query
  // Returns a list of ingredient objects that are possible matches
}
