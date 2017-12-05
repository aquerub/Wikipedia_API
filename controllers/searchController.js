app.controller("searchController", function($scope, $state, $stateParams, searchService){

  //two way binding ng-model
  $scope.searchTermBox = ""

 
  
      $scope.getSearchByTerm = function(){
        console.log($scope.searchTermBox)
        searchService.getSearchByTerm($scope.searchTermBox)
    
      }

  })