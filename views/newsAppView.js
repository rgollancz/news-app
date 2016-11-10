"use strict";

(function(exports) {
  function NewsAppView() {
  }

  NewsAppView.prototype.createListItem = function(url,headline) {
    return "<li> <a href='#" + url + "'>" + headline + "</a></li><br>";
  };

  NewsAppView.prototype.createLink = function(url) {
    return "<a href='" + url + "'>" + "Read full article" + "</a>"
  };

  NewsAppView.prototype.resetHtml = function() {
    
  };

  exports.NewsAppView = NewsAppView;
})(this);
