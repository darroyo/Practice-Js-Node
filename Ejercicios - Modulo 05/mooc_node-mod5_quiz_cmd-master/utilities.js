const disorderArray = (array)=>{

	//	Ordenamos array de manera aleatoria
	return array.sort(disorderComparer);
	
}

const  disorderComparer = (a,b) => {
	// Get a random number between 0 and 10
	var temp = parseInt( Math.random()*10 );

	// Get 1 or 0, whether temp is odd or even
	var isOddOrEven = temp%2;

	// Get +1 or -1, whether temp greater or smaller than 5
	var isPosOrNeg = temp>5 ? 1 : -1;

	// Return -1, 0, or +1
	return( isOddOrEven*isPosOrNeg );
}

exports.disorderArray = disorderArray;