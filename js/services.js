angular.module('app.services', ['ngMaterial', 'ngSanitize'])

  .service('storage', ['$window', function($window) {
    // Clears session storage
    this.clear = function() {
      $window.sessionStorage.clear();
    }

    // Gets value from session storage
    this.get = function(name) {
      return JSON.parse($window.sessionStorage.getItem(name));
    }

    // Sets key-value pair in session storage
    this.set = function(name, value) {
      $window.sessionStorage.setItem(name, JSON.stringify(value));
    }

    //TODO: If necessary, implement copies of the above APIs with localStorage

  }])

  .service('message', ['$mdToast', function($mdToast) {
      this.toastTime = function(message) {
        $mdToast.show(
          $mdToast.simple()
          .textContent(message)
          .position("bottom")
          .hideDelay(3000)
        );
      }

      this.toastAction = function(message) {
        $mdToast.show(
          $mdToast.simple()
          .textContent(message)
          .position("bottom")
          .hideDelay(0)
          .action('Close')
        );
      }

      //TODO: If necessary, implement $mdDialog stuff

    }])
