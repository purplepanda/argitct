app.controller("projectsCtrl", function($scope, $state) {
  $scope.title = "Projects";

  $scope.details = [{
    title: "Project Title One",
    location: "Paris, France",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    longDescription: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    designer: "Lorem Ipsum Ipsum",
    images: [{
      path: "images/projects/img_one.jpg",
      alt: "some alt text"
    }, {
      path: "images/projects/img_two.jpg",
      alt: "some alt text"
    }, {
      path: "images/projects/img_three.jpg",
      alt: "some alt text"
    }, {
      path: "images/projects/img_eight.jpg",
      alt: "some alt text"
    }],
    backgroundColor: "#EDE6E2"
  }, {
    title: "Project Title Two",
    location: "New York, NY, USA",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    longDescription: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    designer: "Lorem Ipsum Ipsum",
    images: [{
      path: "images/projects/img_three.jpg",
      alt: "some alt text"
    }, {
      path: "images/projects/img_seven.jpg",
      alt: "some alt text"
    }],
    backgroundColor: "#D9D6D2"
  }, {
    title: "Project Title Three",
    location: "Beijing, China",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    longDescription: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    designer: "Lorem Ipsum Ipsum",
    images: [{
      path: "images/projects/img_four.jpg",
      alt: "some alt text"
    }, {
      path: "images/projects/img_six.jpg",
      alt: "some alt text"
    }],
    backgroundColor: "#ECEAE7"
  }, {
    title: "Project Title Four",
    location: "New York, NY, USA",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    longDescription: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    designer: "Lorem Ipsum Ipsum",
    images: [{
      path: "images/projects/img_five.jpg",
      alt: "some alt text"
    }, {
      path: "images/projects/img_six.jpg",
      alt: "some alt text"
    }],
    backgroundColor: "#DFDFDD"
  }];

});
