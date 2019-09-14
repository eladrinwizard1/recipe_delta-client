angular.module('app.splash', [])
  .controller('splashCtrl', ['$state', splashCtrl])

function splashCtrl($state) {
  this.state = $state;
}

splashCtrl.prototype.goSearch = function() {
  this.state.go('search');
}
