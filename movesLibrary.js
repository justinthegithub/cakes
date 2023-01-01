function horizontalCutCake(cut, cakeDimensions) {
  let newValue = cakeDimensions[1] - cut;
   cakeDimensions[1] = newValue;
  return cakeDimensions;

}

function verticalCut(cut, cakeDimensions) {
  let newValue = cakeDimensions[0] - cut;
  cakeDimensions[0] = newValue;

  return cakeDimensions;
}
module.exports = {horizontalCutCake, verticalCut }