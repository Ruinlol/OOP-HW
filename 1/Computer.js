/**
 * 
 */
function Computer(year, price, isNotebook, hardDiskMemory, freeMemory, operationSystem) {
	this.__year = year;
	this.__price = price;
	this.__isNotebook = isNotebook;
	this.__hardDiskMemory = hardDiskMemory;
	this.__freeMemory = freeMemory;
	this.__operationSystem = operationSystem;
}
Computer.prototype.changeOperatrionSystem = function(OS) {
	this.__operationSystem = OS;
}
Computer.prototype.useMemory = function (memory) {
	if(this.__freeMemory < memory) {
		console.log('Not enough free memory');
		return;
	}
	var reduction = this.__freeMemory - memory;
	this.__freeMemory = reduction;
}
Computer.prototype.getNfo = function () {
	console.log( 'Specs: \n' +
					'Year: ' + this. __year + '\n' + 
					'Price:' + this.__price + '\n' + 
					'Notebook:' + this.__isNotebook + '\n' + 
					'HDD Memory:' + this.__hardDiskMemory + '\n'+ 
					'Free Memory:' + this.__freeMemory + '\n' + 
					'Operation System:' + this.__operationSystem);
}
