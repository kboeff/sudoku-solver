// Building NN from scratch using Michael Nielsen's book
// http://neuralnetworksanddeeplearning.com/chap1.html

// ------ Chapter 1 

/* --- perceptron ---- 
 x1 ---\
	    \
 x2 ----(  ) --> output
	    /
 x3--- /
 
 1. The binary inputs x1, x2, x3 are assigned weights 
 and the Sum of those is compared to a threshold to evaluate the binary output.
 2. The threshold is replaced by the term bias - some semantics
 
*/

// get some user input
const input = [{ isTrue: true, weight: 4 }, { isTrue: false, weight: 2 }, { isTrue: true, weight: 2 }];
const bias = -5;

const perceptron = (threshold, inputs) => {
	let sum = 0;
	for (let i = 0; i < inputs.length; i++) {
		if(inputs[i].isTrue) 
			sum += inputs[i].weight;
	}
	return sum + bias > 0;
};

perceptron(bias, input);


// ------ Chapter 1 

/* --- sigmoid neuron ---- 
 x1 ---\
	    \
 x2 ----(  ) --> output
	    /
 x3--- /
 
 Same as perceptron, but output is floating point number between 0 and 1
 sigma(w.x + b) = 1 / ( 1 + exp ( -sum(w.x - b) ) )
 
*/

// get some user input
const input = [{ isTrue: true, weight: 4 }, { isTrue: false, weight: 2 }, { isTrue: true, weight: 2 }];
const bias = -5;

const perceptron = (threshold, inputs) => {
	let sum = 0;
	for (let i = 0; i < inputs.length; i++) {
		if(inputs[i].isTrue) 
			sum += inputs[i].weight;
	}
	let sigma = 1 / (1 + Math.exp(-sum - bias));
	return sigma;
};

perceptron(bias, input);
