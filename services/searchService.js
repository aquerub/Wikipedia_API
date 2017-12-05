app.service("searchService", function ($http, $state) {

  var _searchResults = [];
  var _searchResultId = 0;

  var SearchObject = function (id, heading, description, link) {
    this.id = id;
    this.heading = heading;
    this.description = description;
    this.link = link
    this.date = new Date();
  }

  // Looping thru the _searchResults to check if headingdescription == searchTerm
  var validateSearch = function (searchTerm) {
    for (var i = 0; i < _searchResults.length; i++) {
      if (_searchResults[i].heading.toLowerCase() == searchTerm.toLowerCase()) {
        alert("You've already search this in Wiki-FRESH-SEARCHES")
        return false;
      }
    }
    return true;
  }

  //function declaration of the submit button
  this.getSearchByTerm = function (searchTerm) {
    console.log(searchTerm)
    // https://en.wikipedia.org/w/api.php?action=opensearch&search=&format=json
    $http.get("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&origin=*")
      .then(function (response) {
   
        var header = response.data[1][0];
        var description = response.data[2][0];
        var link = response.data[3][0];

        // considering the first instance of submit in the array
         if (_searchResults.length == 0) {
          _searchResults.unshift(new SearchObject(_searchResultId++, header, description, link));
          console.log(_searchResults);
          $state.go("searches");
          // if the search term/item = the wikipedia search/item push this in the array
        } else if (_searchResults.length !== 0 && validateSearch(searchTerm) == true) {
          _searchResults.unshift(new SearchObject(_searchResultId++, header, description, link));
          console.log(_searchResults);
          $state.go("searches")
        } 

      })
  }





  // function that returns search results this is all objects/properties
  this.returnSearchResults = function () {
    return _searchResults
  }

//this function searches the item in the array in order to $state.go search
  this.getViewSearchItem = function (id) {
    if (id == undefined || id == null || id == "") {
      var search = {}
      return search
    }
    else {
      for (var i = 0; i < _searchResults.length; i++) {
        if (_searchResults[i].id == id) {
          return _searchResults[i]
        }
      }
    }
  }
// This function deletes the serached item in search
  this.deleteSearchItem = function (id) {
    for (var i = 0; i < _searchResults.length; i++) {
      if (_searchResults[i].id == id) {
        _searchResults.splice(i, 1)
        $state.go("index")
      }
    }
  }

})




