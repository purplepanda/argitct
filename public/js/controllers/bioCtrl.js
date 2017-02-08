app.controller("bioCtrl", function($scope, $state) {

  //----------arrays of biography information----------//
  $scope.biography = [{
    part: "one",
    content: "Anne R. Goulet has over 20 years of project management and construction administration experience in the architecture, planning, and design industry. Her work includes educational, institutional, hospitality, condominium development, retail, commercial, and single-family residential projects. She has worked on new buildings, renovations, and historical restorations located regionally, nationally, and internationally; and she has worked with a variety of construction types and within a wide range of budgets, from government-funded to ultra-luxury."
  }, {
    part: "two",
    content: "Prior to starting ARGitct in 2012, Ms. Goulet managed projects in-house for Studio Sofield, The Stephen B. Jacobs Group, and Cooper Robertson & Partners. She also provided in-house client management services for the concept and schematic phases of the expansion project at MoMA, The Museum of Modern Art, in 2014."
  }, {
    part: "three",
    content: "Ms. Goulet received a B. S. in Architecture from The University of Virginia and a Masters in Architecture from Yale University. She is an inactive licensed architect, most recently practicing in New York State."
  }, {
    part: "four",
    content: "As a hobby, Ms. Goulet travels to American cities to conduct historical urban research. She also guest lectures/juries about the architectural project process and real estate development and design. Additionally, she creates fabrication drawings for high-end custom millwork and furniture, and offers specialized hand-drawn rendering, graphics, and conceptualizing services."
  }, {
    part: "five",
    content: "Ms. Goulet resides in New York City. She is President ex officio of the UVA’s Virginia Club of New York, and she is a co-founder of “The Architect is IN,” a Yale University alumni collaborative that provides annual pro-bono architectural, design and planning consultations to non-profit organizations in need."
  }];

  $scope.credentials = [{
    accomplishment: "Registered Architect",
    institution: "State of New York",
    year: "2004",
    also: ""
  }, {
    accomplishment: "Masters of Architecture",
    institution: "Yale University",
    year: "2000",
    also: "Instructor for Architectural Design, Structural Engineering, and Urban Design + Real Estate Development"
  }, {
    accomplishment: "Bachelors of Science in Architecture",
    institution: "University of Virginia",
    year: "1995",
    also: "Graduated cum laude"
  }];

  $scope.community = [{
    position: "Guest Instructor",
    institution: "Yale University School of Architecture"
  }, {
    position: "President, ex officio",
    institution: "424 East 77th Street Owners Corporation"
  }, {
    position: "President, ex officio",
    institution: " Virginia Club of New York (The University of Virginia Alumni Association of NY-NJ-CT)"
  }];

  $scope.employment = [{
    position: "Client-side Management",
    company: "ARGitct, LLC",
    location: "New York, NY",
    date: "October 2012 - present"
  }, {
    position: "Project Manager for Architectural Design",
    company: "The Museum of Modern Art",
    location: "New York, NY",
    date: "February 2014 – August 2014"
  }, {
    position: "Project Manager + Engineer",
    company: "Woodgate Millwork Westchester",
    location: "Westchester, NY",
    date: "January 2013 – February 2014"
  }, {
    position: "Senior Designer + Project Manager",
    company: "Studio Sofield",
    location: "New York, NY",
    date: "March 2008 – October 2012"
  }, {
    position: "Senior Architect + Project Manager",
    company: "Stephen B Jacobs Group, PC",
    location: "New York, NY",
    date: "June 2005 – March 2008"
  }, {
    position: "Senior Architect + Project Manager",
    company: "William G. Winters, Architect, PC",
    location: "Westchester, NY",
    date: "April 2004 – June 2005"
  }, {
    position: "Designer + Project Manager",
    company: "Cooper Robertson & Partners",
    location: "New York, NY",
    date: "January 2002–April 2004"
  }, {
    position: "Designer + Project Manager",
    company: "Ottaiano Architects, PC",
    location: "New York, NY",
    date: "May 2000–January 2002"
  }, {
    position: "Engineer + Designer",
    company: "CJS Millwork",
    location: "Stamford, CT",
    date: "July 1998–May 2000"
  }, {
    position: "Intern Architect + Manager",
    company: "Reese, Lower, Patrick & Scott, Architects, Ltd.",
    location: "Lancaster, PA",
    date: "January 1996–August 1999"
  }];

  $scope.projectList = [{

  }];

  $scope.clientList = [{

  }];

});
