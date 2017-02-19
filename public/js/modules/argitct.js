var app = angular.module("argitct", ["ui.router", "slickCarousel"]);

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .otherwise("/landing-outer");

  $stateProvider
    .state("landing-outer", {
      url: "/landing-outer",
      templateUrl: "partials/landing-outer.html",
      controller: "landingCtrl"
    })
    .state("nav", {
      url: "/nav",
      templateUrl: "partials/nav.html",
      controller: "navCtrl"
    })
    .state("landing-inner", {
      url: "/landing-inner",
      templateUrl: "partials/landing-inner.html",
      controller: "landingCtrl"
    })
    .state("projects", {
      url: "/projects",
      templateUrl: "partials/projects.html",
      controller: "projectsCtrl"
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
