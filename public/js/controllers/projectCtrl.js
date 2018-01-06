app.controller("projectCtrl", function($scope, $state, projectData) {
  $scope.project = _.find(projectData, function(x) {
    return x.id == $state.params.projectId;
  });

  $scope.modalShown = false;

  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
});
