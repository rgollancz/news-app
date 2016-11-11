var contain = {

  toContain: function(url, string) {
    if (url == string) {
      console.log("passed");
    }
    else {
      console.log("error");
    }
  }
};

var frankie = {
  haveContent: function(a) {
    if (document.body.innerHTML.indexOf(a) !==  -1) {
      console.log("passed");
    } else {
      console.log("error");
    }
  }
};

var stuart = {
  hasLoaded: function(string) {
    if (content.readyState === 4) {
      console.log("passed");
    } else {
      console.log("error");
    }
  }
};
