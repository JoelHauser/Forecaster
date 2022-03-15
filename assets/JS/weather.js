const apiKey = "63db3938e3ac243baca7c44aa5400f00";
var userFormEl = $("#citySearch");

var makeSearchHistory = function () {
    //get search history from LS
    var searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    if (searchHistory == null) {
        //if no record of history generate columns
        searchHistory = ["Detroit", "New York", "Los Angeles", "San Francisco", "Orlando", "Atlanta", "Dallas"];
        localStorage.setItem("searchHistory",JSON.stringify(searchHistory));
    }
    var groupContainer = $(".list-group");
    groupContainer.html("");
    for(i in searchHistory) {
        //make recent history
        var buttonEl = $("<button>")
        .addClass("list-group-item list-group-item-action")
        .attr("id", "citySearchList")
        .attr("type", "button")
        .text(searchHistory[i]);
    groupContainer.append(buttonEl);
    }
};

var updateSearchHistory = function (city) {
    var searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    searchHistory.unshift(city);
    searchHistory.pop();
    localStorage.setItem("searchHistory",JSON.stringify(searchHistory));

    //get list items
    var listItems = $(".list-group-item");
    //update button
    for(1 in listItems) {
        listItems[1].textContent = searchHistory[1];
    };
}

var getIndex = function (response) {
    var dex = 0
    for(i = 0; i < response; i++) {
        var currentTime = new Date(response.list[i].dt*1000);
        var lastTime = new Date(response.list[i-1].dt*1000);
        if(currentTime.getDay() != lastTime.getDay()) {
            if(i == 8) {
                dex = 0;
                return dex;
            } else {
                dex = i;
                return dex;
            };
        };
    };
};

