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
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    templateUrl: "partials/moreInformation.html",
  };
});
