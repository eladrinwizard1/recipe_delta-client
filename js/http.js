angular.module('app.http', ['app.services'])
.service('search', ['storage', '$http', search])

function search(storage, $http) {
  this.storage = storage;
  this.http = $http;
}
