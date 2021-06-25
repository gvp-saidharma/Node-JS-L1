const test = {
	one: function() {
		console.log(this);
	},
	two: () => {
		console.log(this);
	},
	three: () => {
		this.two();
	},
	four: function() {
		this.two();
	},
}
//test.one(); // got all the four fucntion as this is in test scope { one: [Function: one], two: [Function: two], three: [Function: three], four: [Function: four] }
//test.two(); // got no function as it is arrow function {}
//test.four(); // calls two {}
//test.three(); // got error as it is arrow function and no two defined in the sub function 


const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a[b] = 123; //b is [object Object] as string 
a[c] = 456; //because b is [object Object] as string  456 asigns 
//console.log(a, b, c);


function sayHi() {
  console.log(name); // undefined because var initialize at first of function call and assign at run time 
  console.log(age); // ReferenceError: Cannot access 'age' before initialization because let initialize and assign at run time 
  var name = 'Lydia';
  let age = 21;
}
//sayHi();

//let 0,1,2,3,4 let is a block scope
//var 5,5,5,5,5 var is a function scope 
for(var i=0;i<5;i++){
	setTimeout(()=>{
		//console.log(i);
	},100)
}

//Promise Chaining 
/*new Promise((resolve, reject)=>{
    resolve(1)
}).then((x)=>{
    x = x + 1;
    console.log('1:'+x);
    return x;
}).then((x)=>{
    console.log('2:'+x);
    x = x + 1;
    throw "Error";
}).catch((ex) => {
    console.error(ex); 
    return 1;
}).then((x)=>{
    x = x + 1;
    console.log('4:'+x);
    return x;
}).then((x)=>{
    x = x + 1;
    console.log('5:'+x);
}).catch((ex)=>{
    console.log(ex);
});*/
/*
1:2
2:2
Error
4:2
5:3
*/

/*
function test(a,b){
 console.log(a,b);
}

function test(a,b,c){
 console.log(a,b,c);
}

test();
test(1,2);
*/
