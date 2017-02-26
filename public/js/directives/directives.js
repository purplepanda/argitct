app.directive("projectDetail", function($compile) {
  return {
    restrict: "EA",
    scope: { project: '=' },
    templateUrl: "partials/projectDetail.html",
    link: function (scope, element) {
      scope.$watch('project', function() {
        $compile(element.find('slick'))(scope)
      })
    }
  };
});
