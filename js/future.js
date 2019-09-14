angular.module('app.future', [])
.controller('futureCtrl', ['$state', futureCtrl])

function futureCtrl($state) {
  this.state = $state;
}
