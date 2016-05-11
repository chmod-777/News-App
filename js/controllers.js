angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {
	$scope.article = {
		title: "RBZ Introduces Bond Notes",
		image: "https://mpoverello.files.wordpress.com/2012/09/zimreservebank.jpg?w=580", //"http://placehold.it/200x100",
		body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ipsam in accusamus quasi aliquam maxime, consequuntur quos adipisci pariatur veritatis voluptate modi, ipsum, voluptatibus distinctio maiores ad omnis cum nihil.\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ipsam in accusamus quasi aliquam maxime, consequuntur quos adipisci pariatur veritatis voluptate modi, ipsum, voluptatibus distinctio maiores ad omnis cum nihil.",
		date: "1 January 1970"
	};

})
   
.controller('localNewsCtrl', function($scope) {

})
   
.controller('businessNewsCtrl', function($scope) {

})
    