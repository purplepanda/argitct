app.controller("subjectPageCtrl", function($scope, $state) {
  $scope.modalShown = false;

  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };

  $scope.servicesPage = {
    title: "Services",
    introText: "Service content will go here. This will be a one-page section and will not require additional routing. This may use modals to display additional information.",
    moreInformation: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temp",
    modalContent: "Service content will go here. This will be a one-page section and will not require additional routing. This may use modals to display additional information."
  };

  $scope.projectsPage = {
    title: "Projects",
    introText: "An engaging yet brief introduction to the work ... maybe include various specialties. Some content from biography might be better suited for this section. Mostly we want to capture the user’s attention and encourage them to click below.",
    moreInformation: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temp.",
    modalContent: "An engaging yet brief introduction to the work ... maybe include various specialties. Some content from biography might be better suited for this section. Mostly we want to capture the user’s attention and encourage them to click below."
  };

  $scope.teamPage = {
    title: "Team",
    introText: "Team content will go here. This will be a one-page section and will not require additional routing. This may use modals to display additional information.",
    moreInformation: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temp.",
    modalContent: "Team content will go here. This will be a one-page section and will not require additional routing. This may use modals to display additional information."
  };

  $scope.biographyPage = {
    title: "Biography",
    introText: "Anne R. Goulet has over 20 years of project management and construction administration experience in the architecture, planning, and design industry.",
    moreInformation: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temp.",
    modalContent: "Anne R. Goulet has over 20 years of project management and construction administration experience in the architecture, planning, and design industry."
  };

  $scope.contactPage = {
    title: "Contact",
    introText: "Content to encourage visitors to contact Argitct will go here, as well as actual contact information. This will be a one-page section and not require additional routing or modals.",
    moreInformation: {
      principal: "Anne R Goulet",
      address1: "111 East 14th Street, Suite 365",
      address2: "New York, NY 10003",
      phone1: "(o) +1 212 472 8159",
      email: "argitct@gmail.com"
    },
    modalContent: "Content to encourage visitors to contact Argitct will go here, as well as actual contact information. This will be a one-page section and not require additional routing or modals."
  };


});
