app.controller("projectsCtrl", function($scope, $state, projectData) {
  projectIds = _.map(projectData, 'id').sort()

  currentProjectId = function() {
    return parseInt($state.params.projectId)
  }

  $scope.project = _.find(projectData, function(x) {
    return x.id == $state.params.projectId
  })

  $scope.title = "Projects";
  // $scope.currentProject = projectIds;
  $scope.projectLength = projectIds.length;

  $scope.goToFirstProj = function() {
    $state.go("projects.project", {
      projectId: firstProjectId()
    });
  }

  $scope.goToNextProj = function() {
    $state.go("projects.project", {
      projectId: nextProjId()
    });
  }

  $scope.goToPreviousProj = function() {
    $state.go("projects.project", {
      projectId: previousProjId()
    });
  }

  nextProjId = function() {
    return isLastProject() ? firstProjectId() : nextProjectId()
  }

  previousProjId = function() {
    return isFirstProject() ? lastProjectId() : previousProjectId()
  }

  isFirstProject = function() {
    return projectIds.indexOf(currentProjectId()) == 0;
  }

  isLastProject = function() {
    return (projectIds.indexOf(currentProjectId()) + 1) == projectIds.length;
  }

  firstProjectId = function() {
    return projectIds[0]
  }

  lastProjectId = function() {
    return projectIds[projectIds.length - 1]
  }

  nextProjectId = function() {
    return projectIds[projectIds.indexOf(currentProjectId()) + 1]
  }

  previousProjectId = function() {
    return projectIds[projectIds.indexOf(currentProjectId()) - 1]
  }

});
