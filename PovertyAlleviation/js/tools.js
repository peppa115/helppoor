function move(obj, attr, target, speed, callback) {
	//clearInterval(obj.timer);
	var current = parseInt(getStyle(obj, attr));
	if(current > target) {
		speed = -speed;
	}
	obj.timer = setInterval(function() {
		var oldValue = parseInt(getStyle(obj, attr));
		var newValue = oldValue + speed;
		if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
			newValue = target;
		}
		obj.style[attr] = newValue + "px";
		
		if(newValue == target) {
			clearInterval(obj.timer);
			callback && callback();
			
		}
	}, 100);
}
//获取属性
function getStyle(obj, name) {
	if(window.getComputedStyle) {
		//正常浏览器的方式，具有getComputedStyle()方法
		return getComputedStyle(obj, null)[name];
	} else {
		//IE8的方式，没有getComputedStyle()方法
		return obj.currentStyle[name];
	}
}
