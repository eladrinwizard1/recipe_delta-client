angular.module('app.search', ['app.services', 'app.http'])
  .controller('searchCtrl', ['storage', searchCtrl])

function searchCtrl(storage) {
  this.storage = storage;
  this.ingredients = [];
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
