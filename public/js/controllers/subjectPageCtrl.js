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
    introText: "Anne R. Goulet has over 20 years of experience managing, coordinating, and resolving project owner’s issues in the fields of architecture, planning, and design.",
    moreInformation: "Ms. Goulet has successfully directed a wide range of consultant types and client teams, and she has worked with many different client approval processes, regulations, timelines, and budgets -- from government-funded to ultra-luxury.",
    modalContentA: "Ms. Goulet started ARGitct project consulting in 2012.  Her clients include many home and business owners, developers, architects, designers, and contractors.",
    modalContentB: "Ms. Goulet received a B. S. in Architecture from The University of Virginia and a Masters in Architecture from Yale University, with concentrations in Structural Engineering, Materials Sciences, and Real Estate Development.  She received her NCARB training in project management, finance, regulatory approvals, and contract administration at Reese, Lower, Patrick, + Scott Architects in Lancaster, PA; and subsequently moved to NYC, where she worked at Ottaiano Architects, Cooper Robertson + Partners, The Stephen B. Jacobs Group, and Studio Sofield.  She also provided in-house programming and planning services for The Museum of Modern Art (MoMA) in 2014.",
    modalContentC: "She is an inactive Registered Architect in New York State and a member of YANA, the Yale Alumni Non-Profit Alliance. She is President ex officio of the Virginia Club of New York, served as Co-Op Board President for 8 years, volunteered master planning and design services for the Cultural Olympiad division of the NYC 2012 Olympic Bid, and is a co-founder of “The Architect is IN,” a Yale University alumni volunteer collaborative (www.yalearchdos.com).",
    modalContentD: "Ms. Goulet enjoys traveling to American cities for historic urban research, and she guest lectures/juries about project process + communication, real estate development, and difficult design execution. She enjoys Decorative Arts, biking, great food and wine.",
    modalContentE: "Ms. Goulet has lived in New York City for 17 years."
  };

  $scope.contactPage = {
    title: "Contact",
    introText: "Please contact us to continue the conversation about your project:",
    moreInformation: {
      contact1: "ARGitct, LLC",
      contact2: "Anne R. Goulet",
      contact3: "info@ARGitct.com",
      contact4: "(o) +1 212 472 8159"
    },
    modalContent: "Content to encourage visitors to contact Argitct will go here, as well as actual contact information. This will be a one-page section and not require additional routing or modals."
  };


});
