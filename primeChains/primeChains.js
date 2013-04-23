var primeSum = 0, primeArray = [];
var instance = 1;
var awesome = function () {
  	var primer = primeArray[primeArray.length - 1];
	var instanceGen = function() {
		var z = 0;

		do { // Finds prime numbers until primeSum % primeArray[primeArray.length-1] == 0
			primer += 1;
			var notPrime = false;
			var n = 0

			do { // Closes when a prime number is found
				if (z == 0) { // For small chains
					z++ ;
					primer++;
				}
		        else if (primer % primeArray[n] == 0) { // If primer is divided by a number
		            notPrime = true;
	            } else { // When a prime number is found...
	       		    n+=1;

		            if (primeArray[n] > Math.sqrt(primer)) { // Only check primer against ints <= primer's sqrt
			            primeSum += primeArray[primeArray.length-1];
			            primeArray.push(primer);
						notPrime = true // Ensures do/while loop closes
					}
		        }
		    } while (notPrime == false)
		} while (primeSum % primeArray[primeArray.length - 1] != 0);
	}		

// Printing	
	if (primeArray == 0) {
		primeArray.push(2);
		primeSum = 0;
	} else if (primeArray == 2) {
 		primeArray.push(3,5);
		primeSum = 5
	} else if (instance == 5) {
		document.getElementById('explain').innerHTML += 
		'<br><div class="title" style="text-align:right;color:#FFFAE4">That\'s All, Folks!</div>';
		instance++
		return
	} else if (instance > 5) {
		return
	} else {
		instanceGen();
	}	
	// }

	if (instance >= 4) {
		document.getElementById('chain').innerHTML += 
		'<div class="block"><div class="title">Clean Chain ' + instance + 
		'</div><div class="text"><span class="bold"> Array Length: </span>' + primeArray.length +
		'<br><span class="bold"> Sum of All Primes Except Last: </span>' + primeSum + 
		'<br><span class="bold">Final Prime in Chain: </span>' + primeArray[primeArray.length-1] + 
		'<br><span class="bold">Array: </span></div><div class="tiny">{ ' + 
		(primeArray.join(' | ')).toString() + ' }</div></div>';

	} else {
		document.getElementById('chain').innerHTML += 
		'<div class="block"><div class="title">Clean Chain ' + instance + 
		'</div><div class="text"><span class="bold"> Array Length: </span>' + primeArray.length +
		'<br><span class="bold"> Sum of All Primes Except Last: </span>' + primeSum + 
		'<br><span class="bold">Final Prime in Chain: </span>' + primeArray[primeArray.length-1] + 
		'<br><span class="bold">Array: </span>{ ' + primeArray.join(' | ') + ' }</div><div>';

	}
	
	instance++;

}

window.onload=function(){
	awesome();
	awesome();
}
