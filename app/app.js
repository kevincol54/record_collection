(function(){
	'use strict';

	angular.module('myapp', [ 'ngRoute','myapp-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();