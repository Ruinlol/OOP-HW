/**
 * 
 */
function Employee (name, obj) {
	var __name = name;
	var __currentTask = obj;
	var __hoursLeft = 8;
	
	this.getEmpName = function() {
		return __name;
	};
	this.setEmpName = function(emplName) {
		__name = emplName;
	};
	this.getTask = function() {
		return __currentTask;
	};
	this.getHours = function(){
		return __hoursLeft;
	};
	this.setHours = function(time){
		__hoursLeft = time;
	};
}
Employee.prototype.work = function() {
	var work = this.getTask().getWork();
	var time = this.getHours();
	
	if (work >= time) {
		this.setHours(0);
		this.getTask().setWork(work - time);
	}else {
		this.setHours(time - work);
		this.getTask().setWork(0);
	}
}
Employee.prototype.getNfo = function() {
	return 'Name: ' + this.getEmpName()+ '\n' +
			'Task: ' + this.getTask().getName() + '\n' +
			'Working time left: ' + this.getHours() + '\n' +
			'Task time left: ' + this.getTask().getWork();
			
}