app.directive("modalDialog", function() {
  return {
    restrict: "E",
    scope: {
      show: '='
    },
    replace: true, //replace with template below
    transclude: true, //we want to insert custom content inside directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    templateUrl: "partials/moreInformation.html",
  };
});
