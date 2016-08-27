/**
 * 
 */

function Call(caller, reciever, duration) {
	var __caller = caller;
	var __reciever = reciever;
	var __duration = duration;
	
	this.getCaller = function () {
		return __caller;
	}
	this.setCaller = function (value) {
		__caller = value;
	}
	this.getReciever = function () {
		return __reciever;
	}
	this.setReciever = function (value) {
		__reciever = value;
	}
	this.getDuration = function() {
		return __duration;
	}
	this.setDuartion = function (value) {
		__duration = value;
	}
}