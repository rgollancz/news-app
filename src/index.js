// GET ARTICLE LIST
var news = new XMLHttpRequest();
news.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=12%20years%20a%20slave&format=json&tag=film/film,tone/reviews&from-date=2010-01-01&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&show-refinements=all&order-by=relevance", true);
news.send();
news.addEventListener("readystatechange", processArticlesRequest, false);
function processArticlesRequest() {
  if (news.readyState == 4 && news.status == 200) {
    var obj = JSON.parse(news.responseText);
    var result = [];
    for (var i = 0; i < obj.response.results.length; i++){
      var url = obj.response.results[i].webUrl
      var headline = obj.response.results[i].webTitle
      var id = obj.response.results[i].id
      result += "<li> <a href='#" + url + "'>" + headline + "</a></li><br>";
    }
    document.getElementById("article").innerHTML = result;
  }
}

//  ALL ARTICLES BUTTON
window.onload = function() {
  document.getElementById("all_articles").addEventListener("click", function() {
    processArticlesRequest();
    document.getElementById("link").innerHTML = ""
  });
}

// GET SUMMARY
makeUrlChangeShowSummary();

function makeUrlChangeShowSummary() {
    window.addEventListener("hashchange", showSummaryForCurrentPage);
  };

  function showSummaryForCurrentPage() {
    getSummaryFromApi(getUrlFromUrl(window.location));
  };

// gets url of article from note app url
  function getUrlFromUrl(location) {
    return location.hash.split("#")[1];
  };

// gets summary from api
  function getSummaryFromApi(url) {
    var summary = new XMLHttpRequest();
    summary.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url, true);
    summary.send();
    summary.addEventListener("readystatechange", processSummaryRequest, false);
    function processSummaryRequest(e){
      if (news.readyState == 4 && news.status == 200) {
        summaryObject = JSON.parse(summary.responseText);
        link = "<a href='" + url + "'>" + "Read full article" + "</a>";
      }
      document.getElementById("article").innerHTML = summaryObject.sentences.join(" ");
      document.getElementById("link").innerHTML = link;
    }
  };
