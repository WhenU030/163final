
    var leafletMap = L.map('map').setView([36.18, -115.17], 10);

    L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',{
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
}).addTo(leafletMap);



    var svgMap = d3.select(leafletMap.getPanes().overlayPane).append("svg")
      .attr("width", 2000).attr("height", 2500);
    var circleGroup = svgMap.append("g").attr("class", "leaflet-zoom-hide");



    // function projectPoint(x, y) {
    //   var point = map.latLngToLayerPoint(new L.LatLng(y, x));
    //   this.stream.point(point.x, point.y);

    //   return "translate("+
    //               leafletMap.latLngToLayerPoint(d.LatLng).x +","+
    //               leafletMap.latLngToLayerPoint(d.LatLng).y +")";
    // }


    // waiting for fix the pan bug
    // var transform = d3.geoTransform({point: projectPoint}),
    // path = d3.geoPath().projection(transform);

    // var bounds = path.bounds(collection),
    // topLeft = bounds[0],
    // bottomRight = bounds[1];



    // svg .attr("width", bottomRight[0] - topLeft[0])
    // .attr("height", bottomRight[1] - topLeft[1])
    // .style("left", topLeft[0] + "px")
    // .style("top", topLeft[1] + "px");

    // g.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");





    d3.csv('data/business_final_version.csv', function (error, dataset) {
        if (error) throw error;

        dataset.forEach(function(d) {
            d.LatLng = new L.LatLng(d.latitude, d.longitude)
            d.star = +d.star;
          });



        var circleBind = circleGroup.selectAll("g")
          .data(dataset)

        var mapCircles = circleBind.enter()
          .append("g")
          .append("circle")
          .attr("pointer-events", "visible")
          .attr("r", 7)
          .attr("class", "circleMap")
          .style("fill", "#d64a4a")


        function updateMap() {
           mapCircles.attr("transform",
           function(d) {
             return "translate("+
              leafletMap.latLngToLayerPoint(d.LatLng).x +","+
              leafletMap.latLngToLayerPoint(d.LatLng).y +")";
            });
          }
        leafletMap.on("viewreset", updateMap);
        updateMap();

      });
