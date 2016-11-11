

('Shows all articles', function() {
  var site = window.location;
  document.getElementById('all_articles').click();
  contain.toContain(site, 'file:///Users/frankiebell/Makers/Projects/week-7/news-app/views/index.html#');
}());

('Shows single article', function() {
  article = document.getElementById ("article");
  article.addEventListener ('DOMSubtreeModified',
  function(){ frankie.haveContent('the')},
  true);
}());


('Shows full article', function() {
  article = document.getElementById ("article");
  document.getElementById('link').click();
  article.addEventListener ('DOMSubtreeModified',
  function(){ frankie.haveContent('theguardian')},
  true);
}())
