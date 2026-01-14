function add(a, b) {
  return a + b;
}
function remove(a, b) {
  return a - b;
}
/*
In nodejs in order to export a function we use module.exports = function name
Or if we want to export muitiple functions then we pass all of that funcitons in an object and export them from there.
 */
module.exports = { add, remove };
