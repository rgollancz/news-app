"use strict";

(function(exports) {
  function NewsAppController(model, view) {
    this._model = model;
    this._view = view;
    this.news =  new XMLHttpRequest();
    this.getArticles();
    this.makeUrlChangeShowSummary();
    this.getAllArticles();
  }

  NewsAppController.prototype = {
    getArticles:  function() {
      this.news.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=12%20years%20a%20slave&format=json&tag=film/film,tone/reviews&from-date=2010-01-01&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&show-refinements=all&order-by=relevance", true);
      this.news.send();
      var self = this;
      this.news.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
          var obj = JSON.parse(this.responseText);
          self.processArticlesRequest(obj);
        }
      }
    },

    processArticlesRequest: function(obj) {
      var result = []
      for (var i = 0; i < obj.response.results.length; i++){
        result += this._view.createListItem(this._model.extractUrl(obj,i),this._model.extractHeadline(obj,i))
      }
      this._view.resetArticle(result);
    },

    makeUrlChangeShowSummary: function(){
      var self = this
       window.addEventListener("hashchange", function(){
         self.showSummaryForCurrentPage()
       });
    },

    showSummaryForCurrentPage: function(){
       this.getSummaryFromApi(this.getUrlFromUrl(window.location));
    },

    getUrlFromUrl: function(location){
      return this._model.extractUrlfromUrl(location);

    },

    getSummaryFromApi: function(url){
      var summary = new XMLHttpRequest();
      summary.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url, true);
      summary.send();
      var self = this;
      summary.onreadystatechange = function(){
        if (summary.readyState == 4 && summary.status == 200) {
          var summaryObject = JSON.parse(summary.responseText);
          self._view.resetArticle(self._model.extractSummary(summaryObject))
          self._view.resetLink(self._view.createLink(url));
        }
      }
    },

    getAllArticles: function() {
      var self = this
      this._view._allArticles.addEventListener("click", function() {
        self.getArticles();
        self._view.resetLink("");
      });
    }
  }

  exports.NewsAppController = NewsAppController;
})(this);
