var should = require('chai').should(),
    ArrayMerge = require('../index'),
    m = ArrayMerge.merge;

describe('#testingMerge', function() {
  it('merges [1, 2] [] to [1,2];', function() {
    m([1, 2], []).should.deep.equal([1,2]);
  });

  it('merges [1,2,3,4] [1,2,3] to [1,1,2,2,3,3,4];', function() {
    m([1,2,3,4], [1,2,3]).should.deep.equal([1,1,2,2,3,3,4]);
  });

  it('merges [] [] to [];', function() {
    m([], []).should.deep.equal([]);
  });

  it('merges [] [1,2] to [1,2];', function() {
    m([], [1,2]).should.deep.equal([1,2]);
  });

  it('merges [] [2, 1] to [2, 1];', function() {
    m([], [2, 1]).should.deep.equal([2, 1]);
  });
});