var v = [10,20,30,40,50,10,5,20,0,100,100,2,20,50];

v[2] = 60;

var items = v.length;
var total = 0;

function meanValue() {
	for (var i = 0; i < items; i++) {
		total += v[i];
	}
	var mean = 0;
	mean = total / items;
	return mean;
	//alert(mean);
}

var bs = document.getElementById("hello");
    //bs.textContent = meanValue();