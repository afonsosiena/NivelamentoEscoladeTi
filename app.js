angular
		.module('app', ['ui.router', 'ProdutoModule'])
		.controller('appController', appController)
		.config(config)

		function appController($scope, $state){


				console.log('asdkoaskdoask')
			$scope.abrirTela = function(){
				$state.go('produto')
			}
		}

		function config($stateProvider, $urlRouterProvider){
					$stateProvider
					.state('index', {
						url: '/index',
						controller: 'appController',
						templateUrl: 'index.html'
					})
		}

