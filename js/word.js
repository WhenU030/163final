d3.csv("data/word-_8yxceldCT7oe0wJC-yDPA-3.csv", function(data) {dataViz(data)});

    wordScale=d3.scaleLinear().domain([0,100]).range([10,160]).clamp(true);
    var keywords = ["layout", "zoom", "circle", "style", "append", "attr"]

    function dataViz(data) {
     d3.layout.cloud().size([268, 268])
      .words(data)
      .rotate(function(d) { return d.words.length > 5 ? 0 : 0; })
      .fontSize(function(d) { return wordScale(d.count); })
      .on("end", draw)
      .start();

      function draw(words) {

      var wordG = d3.select("#word");

      var g = wordG.append("g")
      .attr("transform", "translate(250,250)");

      wordG.selectAll("text")
      .data(words)
      .enter()
      .append("text")
      .style("font-size", function(d) { return d.size + "px"; })
        .style("fill", function(d) { return (keywords.indexOf(d.words) > -1 ? "red" : "#fff"); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x+150, d.y+140] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.words; });
      }

    }
