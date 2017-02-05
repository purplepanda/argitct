var app = angular.module("argitct", ["ui.router"]);

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
    .state("biography", {
      url: "/biography",
      templateUrl: "partials/biography.html",
      controller: "bioCtrl"
    })
    .state("projects", {
      url: "/projects",
      templateUrl: "partials/projects.html",
      controller: "projectsCtrl"
    })
    .state("process", {
      url: "/process",
      templateUrl: "partials/process.html",
      controller: "processCtrl"
    })
    .state("contact", {
      url: "/contact",
      templateUrl: "partials/contact.html",
      controller: "contactCtrl"
    });

}]);
