"use strict";

function ArticleList(){
  this._articles = [];
}

ArticleList.prototype.addArticles = function(articles) {
  this._articles.push(articles);
}
