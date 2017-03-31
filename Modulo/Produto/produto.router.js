angular
		.module('ProdutoModule')
		.config(config)

		function config ($stateProvider, $urlRouterProvider){
			$stateProvider
			.state('produto', {
						url: '/produto',
						controller: 'ProdutoController',
						templateUrl: 'Modulo/Produto/produto.html'
					})

		}