const assert = require('chai').assert;
const middle = require("../middle");
describe("#middle", () => {
  it("returns 3 for [1,2,3,4,5]", () =>
  {
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  });
  it("returns [] for []", () =>
  {
    assert.deepEqual(middle([]),[]);
  });
  it("returns [] for [3]", () =>
  {
    assert.deepEqual(middle([3]),[]);
  });
  it("returns ['Lighthouse'] for ['Yo-yo','Lighthouse','Labs]", () =>
  {
    assert.deepEqual(middle(['Yo-yo','Lighthouse','Labs']),['Lighthouse']);
  });
  it("returns [] for [1,3]", () =>
  {
    assert.deepEqual(middle([1,3]),[]);
  });
  it("returns [5,7] for [1,5,7,8]", () =>
  {
    assert.deepEqual(middle([1,5,7,8]),[5,7]);
  });
})
