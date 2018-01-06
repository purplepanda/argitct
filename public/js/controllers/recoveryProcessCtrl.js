app.controller("recoveryProcessCtrl", function($scope, $state, processData) {
  $scope.process = _.find(processData, function(x) {
    return x.id == $state.params.processId;
  });

  $scope.modalShown = false;

  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
});
