angular.module('Platzi', []);
angular.module('Platzi').controller('BaseCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/emoji').then(function(response) {
    $scope.emojis = response.data;
  });

  // Fake emojis
//   $scope.emojis = [
//     {
//       id: 1,
//       text: '=)',
//     },
//     {
//       id: 2,
//       text: ':-)',
//     },
//     {
//       id: 3,
//       text: '8)',
//     },
//     {
//       id: 4,
//       text: ':)',
//     },
//   ];
}]);