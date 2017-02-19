app.directive("projectsPost", function() {
  return {
    restrict: "E",
    templateUrl: "partials/post.html",
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
