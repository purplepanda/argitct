app.directive("projectsPost", function() {
  return {
    restrict: "EA",
    templateUrl: "partials/projectDetail.html",
    repeat: true,
  };
});
app.directive("subjectPage", function() {
  return {
    restrict: "EA",
    templateUrl: "partials/subject.html",
    repeat: true,
  };
});
