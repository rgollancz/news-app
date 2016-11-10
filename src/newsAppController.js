"use strict";

(function(exports) {
  function NewsAppController(model, view) {
    this._model = model
    this._view = view
    this.getArticles();
  }

  NewsAppController.prototype.getArticles = function() {
    var news = new XMLHttpRequest();
    news.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=12%20years%20a%20slave&format=json&tag=film/film,tone/reviews&from-date=2010-01-01&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&show-refinements=all&order-by=relevance", true);
    news.send();
    news.addEventListener("readystatechange", processArticlesRequest(news), false);
  };

  NewsAppController.prototype.processArticlesRequest = function(news) {
    if (news.readyState == 4 && news.status == 200) {
      var obj = JSON.parse(news.responseText);
      var result = []
      for (var i = 0; i < obj.response.results.length; i++){
        result += this._view.createListItem(this._model.extractUrl(obj,i),this._model.extractHeadline(obj,i))
      }
      this._view.resetArticle(result);
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

  function getUrlFromUrl(windowLocation) {
    return this._model.extractUrlfromUrl(windowLocation)
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
        link = this._view.createLink(url);
      }
      document.getElementById("article").innerHTML = this._model.extractSummary(summaryObject)
      document.getElementById("link").innerHTML = link;
    };
  };
  exports.NewsAppController = NewsAppController;
})(this);
