var width = 1600,
    height = 400;

var fill = d3.scale.category20();

var force = d3.layout.force()
    .size([width, height])
    .nodes([{}]) // initialize with a single node
    .linkDistance(100) // target distance
    .linkStrength(0.02)  // 0-1 (1 being strongest)
    .friction(0.0) // 0-1 (1 is frictionless,0 freezes all particles in place)
    .charge(-30) // how much particles repel each other
    .theta(0.8) // determines accuracy of calculations, higher values may slow down processor
    .gravity(0.0) // draws nodes to center, defaults to 0.1
    .on("tick", tick);

var svg = d3.select("header").append("svg")
    .attr("width", width)
    .attr("height", height)
    .on("mousemove", mousemove)
    .on("mousedown", mousedown);

svg.append("rect")
    .attr("width", width)
    .attr("height", height);

var nodes = force.nodes(),
    links = force.links(),
    node = svg.selectAll(".node"),
    link = svg.selectAll(".link");

var cursor = svg.append("circle")
    .attr("r", 100)
    .attr("transform", "translate(-100,-100)")
    .attr("class", "cursor");


restart();
// populate();

function mousemove() {
  cursor.attr("transform", "translate(" + d3.mouse(this) + ")");
}

function mousedown() {
  var point = d3.mouse(this),
      node = {x: point[0], y: point[1]},
      n = nodes.push(node);

  // add links to any nearby nodes
  nodes.forEach(function(target) {
    var x = target.x - node.x,
        y = target.y - node.y;
    if (Math.sqrt(x * x + y * y) < 100) {
      links.push({source: node, target: target});
    }
  });

  restart();
}

function tick() {
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}

function restart() {
  link = link.data(links);

  link.enter().insert("line", ".node")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value/5); });

  node = node.data(nodes);

  node.enter().insert("circle", ".cursor")
      .attr("class", "node")
      .attr("r", .3)
      .call(force.drag);

  force.start();
}

function populate () {
  for (var i=0;i<50;i++){ 
    var node = {x: Math.floor((Math.random()*300)+100), y: Math.floor((Math.random()*200)+100) };
    var n = nodes.push(node);
  }
  // add links to any nearby nodes
  nodes.forEach(function(target) {
    var x = target.x - node.x,
        y = target.y - node.y;
    if (Math.sqrt(x * x + y * y) < 100) {
      links.push({source: node, target: target});
    }
  });
  restart();
}