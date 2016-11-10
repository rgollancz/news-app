"use strict";

(function(exports) {
  function NewsApp() {
  }

  NewsApp.prototype.extractUrl = function(obj,i) {
    return obj.response.results[i].webUrl
  };

  NewsApp.prototype.extractHeadline = function(obj,i) {
    return obj.response.results[i].webTitle
  };

  NewsApp.prototype.extractSummary = function(obj) {
    return obj.sentences.join(" ");
  };

  NewsApp.prototype.extractUrlfromUrl = function(url) {
    return url.hash.split("#")[1];
  };

  exports.NewsApp = NewsApp;
})(this);
