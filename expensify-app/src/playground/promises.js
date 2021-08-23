const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('this is well data'); // call only single time with single argument
    // if you need multiple lines use objects
    // resolve({
    //   name: 'Holy Cow',
    //   age: 27
    // });
    reject('Something went wrong!');
  }, 1500);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error', error);
});

// Alternative syntax
promise.then((data) => {
  console.log('1', data);
}, (error) => {
  console.log('error', error);
});

console.log('after');
