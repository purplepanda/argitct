var app = angular.module("argitct", ["ui.router", "slickCarousel"]);

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .otherwise("/landing");

  $stateProvider
    .state("landing", {
      url: "/landing",
      templateUrl: "partials/landing.html",
      controller: "landingCtrl"
    })
    .state("nav", {
      url: "/nav",
      templateUrl: "partials/nav.html",
      controller: "navCtrl"
    })
    .state("home", {
      url: "/home",
      templateUrl: "partials/home.html",
      controller: "homeCtrl"
    })
    .state("projectsOverview", {
      url: "/projects",
      templateUrl: "partials/projectsOverview.html",
      controller: "subjectPageCtrl"
    })
    .state("projects", {
      url: "/projects",
      templateUrl: "partials/projectsWrapper.html",
      controller: "projectsCtrl"
    })
    .state("projects.project", {
      url: "/{projectId}",
      templateUrl: "partials/project.html",
      controller: "projectCtrl"
    })
    .state("process", {
      url: "/project-recovery",
      templateUrl: "partials/process.html",
      controller: "processCtrl"
    })
    .state("services", {
      url: "/services",
      templateUrl: "partials/services.html",
      controller: "subjectPageCtrl"
    })
    .state("team", {
      url: "/team",
      templateUrl: "partials/team.html",
      controller: "subjectPageCtrl"
    })
    .state("biography", {
      url: "/biography",
      templateUrl: "partials/biography.html",
      controller: "subjectPageCtrl"
    })
    .state("contact", {
      url: "/contact",
      templateUrl: "partials/contact.html",
      controller: "subjectPageCtrl"
    });

}]);
