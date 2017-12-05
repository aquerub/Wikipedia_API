var app = angular.module("wikipediaApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");

    $stateProvider
    .state("index", {
      url:"/",
      templateUrl: "./views/home.html",
      controller: "searchController"
    })

    // Searches

      .state("searches", {
       url: "/searches",
       templateUrl: "./views/searchList.html",
       controller: "searchByHistoryController"
       })

       .state("search", {
        url: "/searches/:id",
        templateUrl: "./views/search.html",
        controller: "searchByHistoryController"
       })

    // .state("searchTerm", {
    //   url: "searchTerm/ :id",
    //   templateUrl: "./views.home.html",
    //   controller: "searchController",

    // })

})

