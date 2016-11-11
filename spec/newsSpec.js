//  need to run this function
window.onload = function() {
  function tests() {
    this.model = new NewsAppModel
    this.results = []
  }

  tests.prototype.extractHeadlinetest = function() {
    var result = toEqual(this.model.extractHeadline(pages, 0), "Cupcakes are liked by all");
    this.results.push("Extract headline test: " + result)
  };

  tests.prototype.extractUrltest = function () {
    var result = toEqual(this.model.extractUrl(pages, 0), "https://www.cupcakeslove")
    this.results.push("Extract URL test: " + result)
  };

  tests.prototype.extractSummarytest = function () {
    var result = toEqual(this.model.extractSummary(cupcakes), "British baker calls all cupcake lovers. The only industry title to cover the entire baking industry. Gather at the church at 1pm on sunday. Bring your own sprinkles.")
    console.log(this.model.extractSummary(cupcakes));
    this.results.push("Extract summary test: " + result)
  };

  tests.prototype.printResults = function() {
    var self = this
    var results = []
    for (var i = 0; i < self.results.length; i++) {
      results += "<li>" + self.results[i] + "</li>"
    }
    document.getElementById("results").innerHTML = results
  };

  test = new tests();
  test.extractHeadlinetest();
  test.extractUrltest();
  test.extractSummarytest();
  test.printResults();
}
