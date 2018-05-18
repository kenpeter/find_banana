
/**
  * Returns true of false, indicating whether the given array of numbers is sorted
  *  isSorted([])                        // true
  *  isSorted([-Infinity, -5, 0, 3, 9])  // true
  *  isSorted([3, 9, -3, 10])            // false
  *
  * @param {number[]} arr 
  * @return {boolean}
  */
function isSorted(arr) {
  const limit = arr.length - 1;
  return arr.every((_, i) => (i < limit ? arr[i] <= arr[i + 1] : true));
}


function myrec(arr) {
	var pushRes = [];

	var rec = function(arr, res=[]) {
		if(arr.length == 0) {
			pushRes.push(res);
			return;
		}


		for(var i=0; i<arr.length; i++) {
			// copy
			var tmpArr = arr.slice();

			// get 1 letter
			var curr = tmpArr.splice(i, 1);

			// rest
			var nextArr = tmpArr.slice();

			var condi = isSorted(nextArr);

			var tmp;
			if(condi) {
				tmp = res.concat(curr);
				pushRes.push(tmp);
				return;
			} else {
				tmp = res.concat(curr);
				rec(nextArr, tmp);
			}
		}
	}

	rec(arr);

	return pushRes; 
}

function myfind(input) {
	var arr = input.split('');
	var res = myrec(arr);

	var min = Number.MAX_SAFE_INTEGER;
	for(var i=0; i<res.length; i++) {
		var num = res[i].length;
		if(num < min)
			min = num;
	}	

	return min;
}


var input = "banana";
//var input = "aaaaaaz";
var out = myfind(input);
console.log(out);
