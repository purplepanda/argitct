app.controller("subjectPageCtrl", function($scope, $state) {


  $scope.servicesPage = {
    title: "Services",
    introText: "Service content will go here. This will be a one-page section and will not require additional routing. This may use modals to display additional information.",
    moreInformation: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temp",
    modalContent: ""
  };

  $scope.projectsPage = {
    title: "Projects",
    introText: "An engaging yet brief introduction to the work ... maybe include various specialties. Some content from biography might be better suited for this section. Mostly we want to capture the user’s attention and encourage them to click below.",
    moreInformation: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temp.",
    modalContent: ""
  };

  $scope.teamPage = {
    title: "Team",
    introText: "Team content will go here. This will be a one-page section and will not require additional routing. This may use modals to display additional information.",
    moreInformation: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temp.",
    modalContent: ""
  };

  $scope.biographyPage = {
    title: "Biography",
    introText: "Anne R. Goulet has over 20 years of project management and construction administration experience in the architecture, planning, and design industry.",
    moreInformation: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temp.",
    modalContent: ""
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
    modalContent: ""
  };




  //----------arrays of biography information----------//
  // $scope.credentials = [{
  //   accomplishment: "Registered Architect",
  //   institution: "State of New York",
  //   year: "2004",
  //   also: ""
  // }, {
  //   accomplishment: "Masters of Architecture",
  //   institution: "Yale University",``
  //   year: "2000",
  //   also: "Instructor for Architectural Design, Structural Engineering, and Urban Design + Real Estate Development"
  // }, {
  //   accomplishment: "Bachelors of Science in Architecture",
  //   institution: "University of Virginia",
  //   year: "1995",
  //   also: "Graduated cum laude"
  // }];

  // $scope.community = [{
  //   position: "Guest Instructor",
  //   institution: "Yale University School of Architecture"
  // }, {
  //   position: "President, ex officio",
  //   institution: "424 East 77th Street Owners Corporation"
  // }, {
  //   position: "President, ex officio",
  //   institution: " Virginia Club of New York (The University of Virginia Alumni Association of NY-NJ-CT)"
  // }];

  // $scope.employment = [{
  //   position: "Client-side Management",
  //   company: "ARGitct, LLC",
  //   location: "New York, NY",
  //   date: "October 2012 - present"
  // }, {
  //   position: "Project Manager for Architectural Design",
  //   company: "The Museum of Modern Art",
  //   location: "New York, NY",
  //   date: "February 2014 – August 2014"
  // }, {
  //   position: "Project Manager + Engineer",
  //   company: "Woodgate Millwork Westchester",
  //   location: "Westchester, NY",
  //   date: "January 2013 – February 2014"
  // }, {
  //   position: "Senior Designer + Project Manager",
  //   company: "Studio Sofield",
  //   location: "New York, NY",
  //   date: "March 2008 – October 2012"
  // }, {
  //   position: "Senior Architect + Project Manager",
  //   company: "Stephen B Jacobs Group, PC",
  //   location: "New York, NY",
  //   date: "June 2005 – March 2008"
  // }, {
  //   position: "Senior Architect + Project Manager",
  //   company: "William G. Winters, Architect, PC",
  //   location: "Westchester, NY",
  //   date: "April 2004 – June 2005"
  // }, {
  //   position: "Designer + Project Manager",
  //   company: "Cooper Robertson & Partners",
  //   location: "New York, NY",
  //   date: "January 2002–April 2004"
  // }, {
  //   position: "Designer + Project Manager",
  //   company: "Ottaiano Architects, PC",
  //   location: "New York, NY",
  //   date: "May 2000–January 2002"
  // }, {
  //   position: "Engineer + Designer",
  //   company: "CJS Millwork",
  //   location: "Stamford, CT",
  //   date: "July 1998–May 2000"
  // }, {
  //   position: "Intern Architect + Manager",
  //   company: "Reese, Lower, Patrick & Scott, Architects, Ltd.",
  //   location: "Lancaster, PA",
  //   date: "January 1996–August 1999"
  // }];



});
