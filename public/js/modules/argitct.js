var app = angular.module("argitct", ["ui.router", "ngAnimate", "slickCarousel"]);

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
    .state("recovery", {
      url: "/project-recovery",
      templateUrl: "partials/recovery.html",
      controller: "subjectPageCtrl"
    })
    .state("recoveryProcess", {
      url: "/recoveryProcess",
      templateUrl: "partials/recoveryWrapper.html",
      controller: "recoveryWrapperCtrl"
    })
    .state("recoveryProcess.process", {
      url: "/{processId}",
      templateUrl: "partials/recoveryProcess.html",
      controller: "recoveryProcessCtrl"
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

// app.run(run);
