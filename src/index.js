"use strict";

(function() {
  window.addEventListener("load", function(){
    var article = document.getElementById("article");
    var allArticles = document.getElementById("all_articles");
    var link = document.getElementById("link");

    new NewsAppController(new NewsAppModel(),
                          new NewsAppView(article, allArticles, link))

  });
})();
