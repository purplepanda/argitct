app.controller("processCtrl", function($scope, $state) {

  $scope.process = [{
    step: "analyze",
    timeframe: "2 weeks",
    description: [
      "Collect existing project-related benchmark data including master plan guides, consultants contracts, design intent and construction drawing issuances, pricing documents, construction and purchasing agreements, regulatory filings, property agreements, marketing and donor packages, and other similar related owner-level documentation"
    ],
    shortDescription: ""
  }, {
    step: "synthesize",
    timeframe: "2 - 4 weeks",
    description: [
      "Review data with all team members one-on-one and/or in groups to fully vet and understand project issues, concerns, and complexities"
    ],
    shortDescription: ""
  }, {
    step: "strategize",
    timeframe: "4 weeks",
    description: [
      "Identify gaps and redundancies in consultant roles and project deliverables",
      "Re-set project goals and objectives for scope, schedule, and budget with client representatives and key deliverables managers",
      "Re-order and re-sequence project deliverables to meet objectives"
    ],
    shortDescription: ""
  }, {
    step: "execute",
    timeframe: "varies, ongoing through handover",
    description: [
      "Implement action plan, including revising, removing, or adding consultants to maximize project resources",
      "Provide over-arching management strategy and guidance in support of the project goals",
      "Advise and guide owner with balance of aesthetic, budget, schedule, regulatory, and legal decision-making",
      "Direct project team members as needed to improve cross-communication and efficiency",
      "Interface on behalf of owner at project-related meetings",
      "Assist client with owner's obligations and deliverables, including administration of any direct or indirect purchasing/procurement, samples/mock-up approvals, transition/phasing plans",
      "Identify value engineering and project acceleration opportunities"
    ],
    shortDescription: ""
  }, {
    step: "transition",
    timeframe: "varies, after handover",
    description: [
      "Assist with owner occupancy, fit-out, and move into new space after Contractor’s handover",
      "Assist with post-construction follow-up and close-out of owner’s obligations"
    ],
    shortDescription: ""
  }];

});
