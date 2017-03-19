(function(d3) {
        'use strict';

        var widthpie = 250;
        var heightpie = 250;
        var radiuspie = Math.min(widthpie, heightpie) / 2;
        var donutWidth = 65;
        var legendRectSizePie = 12;
        var legendSpacingPie = 3;

        var colorpie = d3.scaleOrdinal()
    .range(["#fcd6d6", "#ff9e9e", "#e26c6c","#db4c4c","#d32828"]);
;

        var svgDonut = d3.select('#donut')
          .append('svg')
          .attr('width', widthpie)
          .attr('height', heightpie)
          .append('g')
          .attr('transform', 'translate(' + (widthpie / 2) +
            ',' + (heightpie / 2) + ')');

        var arcDonut = d3.arc()
          .innerRadius(radiuspie - donutWidth)
          .outerRadius(radiuspie);

        var pie = d3.pie()
          .value(function(d) { return d.count; })
          .sort(null);

        var tooltipDonut = d3.select('#donut')
           .append('div')
           .attr('class', 'tooltipDonut');

        tooltipDonut.append('div')
           .attr('class', 'label');

        tooltipDonut.append('div')
           .attr('class', 'count');
        tooltipDonut.append('div')
           .attr('class', 'percent');



        //test: id: _3olhuCXhoqjy4M2rBp1YA

        d3.csv('data/bus-stars-pie/pie-_3olhuCXhoqjy4M2rBp1YA.csv', function(error, dataset) {
          dataset.forEach(function(d) {
            d.count = +d.count;
          });

          var path = svgDonut.selectAll('path')
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr('d', arcDonut)
            .attr('fill', function(d, i) {
              return colorpie(d.data.star);
            });

          path.on('mouseover', function(d) {
            var total = d3.sum(dataset.map(function(d) {
               return d.count;
            }));
            var percent = Math.round(1000 * d.data.count / total) / 10;
              tooltipDonut.select('.label').html("Number of "+d.data.star + " rating:");
              tooltipDonut.select('.count').html(d.data.count);
              tooltipDonut.select('.percent').html(percent + '% of total');
              tooltipDonut.style('display', 'block');
          });

          path.on('mouseout', function() {
             tooltipDonut.style('display', 'none');
           });

          path.on('mousemove', function(d) {
            tooltipDonut.style('top', (d3.event.pageY -50) + 'px')
              .style('left', (d3.event.pageX -50) + 'px');
          });


          var legendDonut = svgDonut.selectAll('.legendDonut')
            .data(colorpie.domain())
            .enter()
            .append('g')
            .attr('class', 'legendDonut')
            .attr('transform', function(d, i) {
              var heightpie = legendRectSizePie + legendSpacingPie;
              var offset =  heightpie * colorpie.domain().length / 2;
              var horz = -2 * legendRectSizePie;
              var vert = i * heightpie - offset;
              return 'translate(' + horz + ',' + vert + ')';
            });

          legendDonut.append('rect')
            .attr('width', legendRectSizePie)
            .attr('height', legendRectSizePie)
            .style('fill', colorpie)
            .style('stroke', colorpie);

          legendDonut.append('text')
            .attr('x', legendRectSizePie + legendSpacingPie)
            .attr('y', legendRectSizePie - legendSpacingPie)
            .text(function(d) { return d; });

        });

      })(window.d3);
