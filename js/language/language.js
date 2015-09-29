var app = angular.module('nova', ['pascalprecht.translate']);
app.config(function($translateProvider) {
	$translateProvider.translations('chinese', chinese);
	$translateProvider.translations('english', english);
	$translateProvider.preferredLanguage('chinese');
});
app.controller('Ctrl', function($scope, $translate) {
	$scope.changeLanguage = function(key) {
		$translate.use(key);
	};
});