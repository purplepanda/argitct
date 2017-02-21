app.controller("homeCtrl",function(e,t){e.homePage={title:"Home",introText:"Argitct mission statement will go here. This may use modals to display additional information.",moreInformation:"There will also be another nav menu at the bottom of this page",modalContent:""}}),app.controller("landingCtrl",function(e,t){e.location="New York, NY"}),app.controller("navCtrl",function(e,t){e.opened=!1}),app.controller("processCtrl",function(e,t){e.process=[{step:"analyze",timeframe:"2 weeks",description:["Collect existing project-related benchmark data including master plan guides, consultants contracts, design intent and construction drawing issuances, pricing documents, construction and purchasing agreements, regulatory filings, property agreements, marketing and donor packages, and other similar related owner-level documentation"],shortDescription:""},{step:"synthesize",timeframe:"2 - 4 weeks",description:["Review data with all team members one-on-one and/or in groups to fully vet and understand project issues, concerns, and complexities"],shortDescription:""},{step:"strategize",timeframe:"4 weeks",description:["Identify gaps and redundancies in consultant roles and project deliverables","Re-set project goals and objectives for scope, schedule, and budget with client representatives and key deliverables managers","Re-order and re-sequence project deliverables to meet objectives"],shortDescription:""},{step:"execute",timeframe:"varies, ongoing through handover",description:["Implement action plan, including revising, removing, or adding consultants to maximize project resources","Provide over-arching management strategy and guidance in support of the project goals","Advise and guide owner with balance of aesthetic, budget, schedule, regulatory, and legal decision-making","Direct project team members as needed to improve cross-communication and efficiency","Interface on behalf of owner at project-related meetings","Assist client with owner's obligations and deliverables, including administration of any direct or indirect purchasing/procurement, samples/mock-up approvals, transition/phasing plans","Identify value engineering and project acceleration opportunities"],shortDescription:""},{step:"transition",timeframe:"varies, after handover",description:["Assist with owner occupancy, fit-out, and move into new space after Contractor’s handover","Assist with post-construction follow-up and close-out of owner’s obligations"],shortDescription:""}]}),app.controller("projectsCtrl",function(e,t){e.title="Projects",e.details=[{title:"Project Title One",location:"Paris, France",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",longDescription:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",designer:"Lorem Ipsum Ipsum",images:[{path:"images/projects/img_one.jpg",alt:"some alt text"},{path:"images/projects/img_two.jpg",alt:"some alt text"},{path:"images/projects/img_three.jpg",alt:"some alt text"},{path:"images/projects/img_eight.jpg",alt:"some alt text"}],backgroundColor:"#EDE6E2"},{title:"Project Title Two",location:"New York, NY, USA",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",longDescription:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",designer:"Lorem Ipsum Ipsum",images:[{path:"images/projects/img_three.jpg",alt:"some alt text"},{path:"images/projects/img_seven.jpg",alt:"some alt text"}],backgroundColor:"#D9D6D2"},{title:"Project Title Three",location:"Beijing, China",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",longDescription:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",designer:"Lorem Ipsum Ipsum",images:[{path:"images/projects/img_four.jpg",alt:"some alt text"},{path:"images/projects/img_six.jpg",alt:"some alt text"}],backgroundColor:"#ECEAE7"},{title:"Project Title Four",location:"New York, NY, USA",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",longDescription:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",designer:"Lorem Ipsum Ipsum",images:[{path:"images/projects/img_five.jpg",alt:"some alt text"},{path:"images/projects/img_six.jpg",alt:"some alt text"}],backgroundColor:"#DFDFDD"}]}),app.controller("subjectPageCtrl",function(e,t){e.servicesPage={title:"Services",introText:"Service content will go here. This will be a one-page section and will not require additional routing. This may use modals to display additional information.",moreInformation:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temp",modalContent:""},e.projectsPage={title:"Projects",introText:"An engaging yet brief introduction to the work ... maybe include various specialties. Some content from biography might be better suited for this section. Mostly we want to capture the user’s attention and encourage them to click below.",moreInformation:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temp.",modalContent:""},e.teamPage={title:"Team",introText:"Team content will go here. This will be a one-page section and will not require additional routing. This may use modals to display additional information.",moreInformation:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temp.",modalContent:""},e.biographyPage={title:"Biography",introText:"Anne R. Goulet has over 20 years of project management and construction administration experience in the architecture, planning, and design industry.",moreInformation:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temp.",modalContent:""},e.contactPage={title:"Contact",introText:"Content to encourage visitors to contact Argitct will go here, as well as actual contact information. This will be a one-page section and not require additional routing or modals.",moreInformation:{principal:"Anne R Goulet",address1:"111 East 14th Street, Suite 365",address2:"New York, NY 10003",phone1:"(o) +1 212 472 8159",email:"argitct@gmail.com"},modalContent:""}}),app.directive("projectDetail",function(){return{restrict:"EA",templateUrl:"partials/projectDetail.html",repeat:!0}});var app=angular.module("argitct",["ui.router","slickCarousel"]);app.config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/landing"),e.state("landing",{url:"/landing",templateUrl:"partials/landing.html",controller:"landingCtrl"}).state("nav",{url:"/nav",templateUrl:"partials/nav.html",controller:"navCtrl"}).state("home",{url:"/home",templateUrl:"partials/home.html",controller:"homeCtrl"}).state("projects",{url:"/projects",templateUrl:"partials/projects.html",controller:"subjectPageCtrl"}).state("projectDetails",{url:"/projectDetails",templateUrl:"partials/projectDetails.html",controller:"projectsCtrl"}).state("process",{url:"/project-recovery",templateUrl:"partials/process.html",controller:"processCtrl"}).state("services",{url:"/services",templateUrl:"partials/services.html",controller:"subjectPageCtrl"}).state("team",{url:"/team",templateUrl:"partials/team.html",controller:"subjectPageCtrl"}).state("biography",{url:"/biography",templateUrl:"partials/biography.html",controller:"subjectPageCtrl"}).state("contact",{url:"/contact",templateUrl:"partials/contact.html",controller:"subjectPageCtrl"})}]);