('Shows all articles', function() {
  window.onload = function(){
    var site = window.location;
    // document.getElementById('all_articles').click();
    console.log('goodbye')
    expect.toContain(site, 'index.html#');
  }
})

  // ('Shows single article', function() {
  //   var site = window.location.href;
  //   document.getElementById('article').click();
  //   expect.toContain(site, 'theguardian');
  // }())

  // ('Shows full article', function() {
  //   var site = window.location.href;
  //   document.getElementById('link').click();
  //   expect.toContain(site, 'theguardian');
  // }())
