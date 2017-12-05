app.controller("searchByHistoryController", function($scope, $state, $stateParams, searchService){

  //two way binding
  $scope.viewSearchItem = ""
  $scope.searchResults = searchService.returnSearchResults();

  // object of properities and the argument is to select the unique id/$stateParams.id 
  $scope.search = searchService.getViewSearchItem($stateParams.id)
  console.log($scope.searchResults)

  $scope.viewSearchItem = function (id) {
   $state.go("search", {id: id});
  }
  // this the searched item entirely
  $scope.deleteSearchItem = function (){
    searchService.deleteSearchItem($stateParams.id)
  }
})