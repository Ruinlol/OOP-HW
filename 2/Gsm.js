/**
 * 
 */
const PRICEPERMINUTE = .29;

function Gsm(model) {
	var __model = model;
	var __hasSimCard;
	var __simMobileNumber;
	var __outgoingCallsDuration = 0;
	var __lastIncomingCall = '';
	var __lastOutgoingCall = '';

	this.getModel = function() {
		return __model;
	}
	this.setModel = function(value) {
		__model = value;
	}
	this.getSim = function() {
		return __hasSimCard;
	}
	this.setSim = function(value) {
		__hasSimCard = value;
	}
	this.getSimMobileNumber = function() {
		return __simMobileNumber;
	}
	this.setSimMobileNumber = function(value) {
		__simMobileNumber = value;
	}
	this.getOutgoingCallsDuration = function() {
		return __outgoingCallsDuration;
	}
	this.setOutgoingCallsDuration = function(value) {
		__outgoingCallsDuration += value;
	}
	this.getLastIncomingCall = function() {
		return __lastIncomingCall;
	}
	this.setLastIncomingCall = function(value) {
		__lastIncomingCall = value;
	}
	this.getLastOutgoingCall = function() {
		return __lastOutgoingCall;
	}
	this.setLastOutgoingCall = function(value) {
		__lastOutgoingCall = value;
	}
};

Gsm.prototype.insertSimCard = function(simMobileNumber) {
	var imput = simMobileNumber;
	var validStart = '08';
	if (imput.substring(0, 2) == validStart && imput.length == 10) {
		this.setSim(true);
		this.setSimMobileNumber(simMobileNumber);
	} else {
		throw new Error('Invalid number input');
	}
}
Gsm.prototype.removeSimCard = function() {
	this.setSim(false);
	this.setSimMobileNumber('');
}
Gsm.prototype.call = function(reciever, duration) {

	if (isNaN(duration)) {
		console.log('Time must be a number');
		return;
	}
	if (this.getSimMobileNumber() == reciever.getSimMobileNumber()) {
		console.log('Even numbers');
		return;
	}
	if (!this.getSim() || !reciever.getSim()) {
		console.log('No sim card/s');
		return;
	}
	var call = new Call(this, reciever, duration);
	this.setLastOutgoingCall(call);
	reciever.setLastIncomingCall(call);
	this.setOutgoingCallsDuration(duration);

}
Gsm.prototype.getSumForCall = function() {
	return this.getOutgoingCallsDuration() * PRICEPERMINUTE;
}

Gsm.prototype.printInfoForTheLastOngoingCall = function() {
	if (this.getLastOutgoingCall() != '') {
		return 'Duration :' + this.getLastOutgoingCall().getDuration() + '\n' +
		'Cost :' + this.getLastOutgoingCall().getDuration() * PRICEPERMINUTE + 'lv.';
	} else {
		return 'No last call';
	}
}
Gsm.prototype.printInfoForTheLastIncomingCall = function() {
	if (this.getLastIncomingCall() != '') {
		return 'Duration :' + this.getLastIncomingCall().getDuration() + '\n' +
		'Cost :' + this.getLastIncomingCall().getDuration() * PRICEPERMINUTE + 'lv.';
	} else {
		return 'No last call';
	}
}
