// radius scale
    var radiusScale = d3.scaleSqrt().domain([1,400]).range([10,100]);
// color scale    
    var colorScale = d3.scaleLinear().domain([1,130])
      .interpolate(d3.interpolateHcl)
      .range([d3.rgb("#007AFF"), d3.rgb('#FF0500')]);
// collection of forces    
    var simulation = d3.forceSimulation()
// forceX to direct everything towards  middle of x-axis
    .force("x", d3.forceX(1000/2).strength(0.05))
// forceY to direct everything towards  middle of y-axis
    .force("y", d3.forceY(1000/2).strength(0.05))
// separated from each other
    .force("collide", d3.forceCollide(function(d){
        return radiusScale(d.Comments) + 1;
    }));
// drawing circles
    var circles = svg.attr("height", 1000)
            .attr("width", 1000)
            .append("g")
            .selectAll(".Comment")
            .data(data)
            .attr("class", "Comment")
            .enter().append("circle")
            .attr("r", function(d){
               return radiusScale(d.Comments);
            })
            .attr("fill", function(d){
               return colorScale(d.Likes);
            })
            .on('click', function(d){
                console.log(d.text);
            });

        simulation.nodes(data)
            .on('tick', ticked);

        function ticked(){
            circles
            .attr("cx", function(d){
                return d.x;
            });
            circles
            .attr("cy", function(d){
                return d.y;
            });
        }