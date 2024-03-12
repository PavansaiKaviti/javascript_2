p1 = Promise.resolve(150);
p2 = Promise.reject(new Error('200'));
p3 = new Promise((resolve, reject)=>{
	setTimeout(resolve, 5000, 'geek');
});

Promise.race([p1,p2, p3]).then(function (values) {
	console.log(values);
});
 