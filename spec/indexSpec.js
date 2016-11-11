

  ('Shows all articles', function() {
    var site = window.location;
    document.getElementById('all_articles').click();
    contain.toContain(site, 'file:///Users/frankiebell/Makers/Projects/week-7/news-app/views/index.html#');
  }());

  ('Shows single article', function() {
        article = document.getElementById ("article");
            article.addEventListener ('DOMSubtreeModified', function(){
              frankie.haveContent('the')},
               true);
    }());


  // ('Shows full article', function() {
  //   var site = window.location.href;
  //   document.getElementById('link').click();
  //   expect.toContain(site, 'theguardian');
  // }())
