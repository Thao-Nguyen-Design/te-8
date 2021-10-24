// Adapted from the following Processing example:
// http://processing.org/learning/topics/follow3.html

// The amount of points in the path:
var points = 20;

// The distance between the points:
var length = 35;

var path = new Path({
	strokeColor: '#3ea7e8',
	strokeWidth: 20,
	strokeCap: 'round'
});

var start = view.center;
for (var i = 0; i < points; i++)
	path.add(start + new Point(i * length, 0));

function onMouseMove(event) {

	path.firstSegment.point = event.point;
	for (var i = 0; i < points - 1; i++) {
		var segment = path.segments[i];
		var nextSegment = segment.next;
		var vector = segment.point - nextSegment.point;
		vector.length = length;
		nextSegment.point = segment.point - vector;
    path.rotate(20, view.center);

	}
	path.smooth({ type: 'continuous' });

}


function onMouseDown(event) {
	path.fullySelected = true;
	path.strokeColor = '#1d136a';
  path.scale(2);

}

function onMouseUp(event) {
	path.fullySelected = false;
	path.strokeColor = '#3ea7e8';
}
