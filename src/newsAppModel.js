"use strict";

(function(exports) {
  function NewsAppModel() {
  }

  NewsAppModel.prototype.extractUrl = function(obj,i) {
    return obj.response.results[i].webUrl
  };

  NewsAppModel.prototype.extractHeadline = function(obj,i) {
    return obj.response.results[i].webTitle
  };

  // need to work on this function
  // NewsAppModel.prototype.extractImage = function(obj,i) {
  //     return obj.response.results[i].fields.thumbnail
  // };

  NewsAppModel.prototype.extractSummary = function(obj) {
    return obj.sentences.join(" ");
  };

  NewsAppModel.prototype.extractUrlfromUrl = function(url) {
    return url.hash.split("#")[1];
  };



  exports.NewsAppModel = NewsAppModel;
})(this);
