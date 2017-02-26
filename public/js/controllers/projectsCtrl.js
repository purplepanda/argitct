app.controller("projectsCtrl", function($scope, $state, projectData) {
  currentProjectIndex = 0
  $scope.title = "Projects";
  $scope.projects = projectData;
  $scope.currentProject = null;

  $scope.nxtProj = function () {
    if (isLastProject()) {
      currentProjectIndex = 0  
    }
    else {
      currentProjectIndex += 1
    }
    updateCurrentProject()
  }

  $scope.prvProj = function () {
    if (isFirstProject()) {
      currentProjectIndex = ($scope.projects.length - 1)
    }
    else {
      currentProjectIndex -= 1
    }
    updateCurrentProject()
  }

  init = function () {
    updateCurrentProject()
  }

  isFirstProject = function () {
    return currentProjectIndex == 0;
  }

  isLastProject = function () {
    return (currentProjectIndex + 1) == $scope.projects.length;
  }

  updateCurrentProject = function (argument) {
    $scope.currentProject = $scope.projects[currentProjectIndex]
  }

  init();
});
