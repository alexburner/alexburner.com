



/*

precendents

Boids
http://www.red3d.com/cwr/boids/

BREVE SWARM
http://faculty.hampshire.edu/lspector/pubs/spector-gecco2003.pdf

*/






//
// the birds
//

var flock = {
	birds: [],
	planes: [],
	createBirds: function (count) {
		var index = 0;
		while (index < count) {
			var bird = new Bird(flock.birds);
			index++;
		}
	},
	addNewFlockPlane: function (count) {

		// flock planes don't interfere w/ each other

		var plane = [];
		var index = 0;
		while (index < count) {
			// bird adds itself to flock plane 
			// (and snags a reference)
			var bird = new Bird(plane);
			index++;
		}
		flock.planes.push(plane);
	},
	destroyBirds: function (count) {
		var index = 0;
		while (index < count) {
			flock.birds[index].destroy();
			index++;
		}
	}
};



