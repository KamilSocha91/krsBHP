angular.module('formApp', ['ngAnimate', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        .state('form.profil', {
            url: '/profil',
            templateUrl: 'form-profil.html'
        })
        .state('form.tekst', {
            url: '/tekst',
            templateUrl: 'form-tekst.html'
        })
        .state('form.odpowiedz', {
            url: '/odpowiedz',
            templateUrl: 'form-odpowiedz.html'
        })
        .state('form.ostatni', {
            url: '/ostatni',
            templateUrl: 'form-ostatni.html'
        });

    $urlRouterProvider.otherwise('/form/profil');
})

.controller('formController', function($scope) {
    $scope.formData = {};

    $scope.processForm = function() {
        alert('Ukończono szkolenie!');  
    };
    
});

