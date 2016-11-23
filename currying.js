var greet = function(greeting, name) {
	console.log(greeting + ", " + name);
};
greet("Hello", "Heidi"); //"Hello, Heidi"

var greetCurried = function(greeting) {
	return function(name) {
		console.log(greeting + ", " + name);
	};
};

greet("Hello")("Heidi"); //"Hello, Heidi"
var greetHello = greetCurried("Hello");
greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"






var statuses = {
	rejected: 'rejected_api',
	confirmed: 'comfirmed_ruby_api',
	removed: 'removed_attr'
};

function getValue(obj) {
	return function(key) {
		return obj[key];
	}
}

function getKey(obj) {
	return function(value) {
		return Object.keys(obj).find((key) => obj[key] === value);
	}
}

var getStatusValue = getValue(statuses);
var getStatusKey = getKey(statuses);

getStatusValue('rejected') // 'rejected_api'
getStatusKey('comfirmed_ruby_api') // 'confirmed'




