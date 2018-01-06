app.controller("recoveryWrapperCtrl", function($scope, $state, processData) {
  processIds = _.map(processData, 'id').sort();

  currentProcessId = function() {
    return parseInt($state.params.processId);
  };

  $scope.currentProcessNumber = function() {
    return processIds.indexOf(currentProcessId()) + 1;
  };

  $scope.process = _.find(processData, function(x) {
    return x.id == $state.params.processId;
  });

  $scope.title = "Recovery Process";
  // $scope.currentProcess = processIds;
  $scope.processLength = processIds.length;

  $scope.goToFirstProcess = function() {
    $state.go("recoveryProcess.process", {
      processId: firstProcessId()
    });
  };

  $scope.goToNextProcess = function() {
    $state.go("recoveryProcess.process", {
      processId: nextProcessId()
    });
  };

  $scope.goToPreviousProcess = function() {
    $state.go("recoveryProcess.process", {
      processId: previousProcessId()
    });
  };

  nextProcessId = function() {
    return isLastProcess() ? firstProcessId() : nextProcessId();
  };

  previousProcessId = function() {
    return isFirstProcess() ? lastProcessId() : previousProcessId();
  };

  isFirstProcess = function() {
    return processIds.indexOf(currentProcessId()) === 0;
  };

  isLastProcess = function() {
    return (processIds.indexOf(currentProcessId()) + 1) == processIds.length;
  };

  firstProcessId = function() {
    return processIds[0];
  };

  lastProcessId = function() {
    return processIds[processIds.length - 1];
  };

  nextProcessId = function() {
    return processIds[processIds.indexOf(currentProcessId()) + 1];
  };

  previousProcessId = function() {
    return processIds[processIds.indexOf(currentProcessId()) - 1];
  };

});