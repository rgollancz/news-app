"use strict";

(function(exports) {
  function NewsAppView(article, allArticles, link) {
    this._article = article
    this._allArticles = allArticles
    this._link = link
  }

  NewsAppView.prototype.createListItem = function(url,headline) {
    return "<li> <a href='#" + url + "'>" + headline + "</a></li><br>";
  };

  NewsAppView.prototype.createLink = function(url) {
    return "<a href='" + url + "'>" + "Read full article" + "</a>"
  };

  NewsAppView.prototype.resetArticle = function(element) {
    this._article.innerHTML = element
  };

  NewsAppView.prototype.resetButton = function(element) {
    this._allArticles.innerHTML = element
  };

  NewsAppView.prototype.resetLink = function(element) {
    this._link.innerHTML = element
  };

  exports.NewsAppView = NewsAppView;
})(this);
