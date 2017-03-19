var bar = d3.select("#cates_filter"),
    margin_bar = {top: 40, right: 20, bottom: 30, left: 130},
    b_w = +bar.attr("width") - margin_bar.left - margin_bar.right,
    b_h = +bar.attr("height") - margin_bar.top - margin_bar.bottom;

var tooltip_bar = d3.select("#f-b").append("div").attr("class", "toolTip_bar");

var x_bar = d3.scaleLinear().range([0, b_w]);
var y_bar = d3.scaleBand().range([b_h, 0]);

var g = bar.append("g")
      .attr("transform", "translate(" + margin_bar.left + "," + margin_bar.top + ")");

d3.csv("data/business-100-categ-frequence.csv", function(error, data) {
   if (error) throw error;

   data.sort(function(a, b) { return a.count - b.count; });

   x_bar.domain([100, d3.max(data.filter(function(d){ return d.count >= 100;}), function(d) { return d.count; })]).nice();
   y_bar.domain(data.filter(function(d){ return d.count >= 100;}).map(function(d) { return d.categs; })).padding(0.1);

    g.append("g")
        .attr("class", "x_bar axis")
         .call(d3.axisTop(x_bar))
          .selectAll("text")
      .style("fill", "#fff")
      .style("font-family", "'latolight'");

    g.append("g")
        .attr("class", "y_bar axis")
        .call(d3.axisLeft(y_bar))
        .selectAll("text")
      .style("text-anchor", "end")
      .style("fill", "#fff")
      .style("font-family", "'latolight'")
      .attr("transform", "rotate(-15)");

    g.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("height", y_bar.bandwidth())
        .attr("y", function(d) { return y_bar(d.categs); })
        .attr("width", function(d) { return x_bar(d.count); })
        .on("mousemove", function(d){
            tooltip_bar
              .style("left", d3.event.pageX - 50 + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html("Number of Business under " + "<strong>"+(d.categs)+"</strong>" + ": " + (d.count));
        })
         .on("mouseout", function(d){ tooltip_bar.style("display", "none");});
});
