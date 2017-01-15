// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback("City not found")
// }
//
// getTempCallback("Philadelphia", function(err, temperature) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", temperature);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject("City not found");
//     }, 1000);
//   });
// }
//
// getTempPromise("Philadelphia").then(function(temperature) {
//   console.log("Success promise", temperature);
// }, function(err) {
//   console.log("Promise error", err);
// });

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === "number" && typeof b === "number") {
      resolve(a+b);
    } else {
      reject("NaN");
    }
  });
}

function displaySum(result) {
  console.log("Sum result: ", result);
}

function displayError(err) {
  console.log("Sum failed", err);
}

addPromise(8,2).then(displaySum, displayError);
addPromise(8,"abc").then(displaySum, displayError);
