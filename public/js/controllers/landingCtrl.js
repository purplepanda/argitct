app.controller("landingCtrl", function($scope, $state) {
  $scope.title = "Project Strategy + Management Consulting";
  $scope.location = "New York, NY";
  $scope.logo = "images/logo/arg_white.svg";
  $scope.landingFadeIn = $('#landing-fadein');
  $scope.landingFadeOut = $('#landing-fadeout');
  $scope.enterIcon = $('.icon-enter');

  $scope.landingFadeIn.hide().delay(1000).fadeIn(3000).removeClass('hidden');
  $scope.landingFadeOut.delay(250).fadeOut(2000);
  // $scope.enterIcon.delay(3000).removeClass('hidden');
});
