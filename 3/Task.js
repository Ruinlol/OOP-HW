/**
 * 
 */

function Task(name, workingHours) {
	var __name = name;
	var __workingHours = workingHours;
	
	this.getName = function() {
		return __name;
	};
	this.setName = function(value) {
		__name = value;
	};
	this.getWork = function() {
		return __workingHours;
	};
	this.setWork = function(value) {
		__workingHours = value;
	};
}