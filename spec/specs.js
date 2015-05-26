describe('triangleType', function() {
  it('returns equilateral if all sides are equal', function() {
    expect(triangleType(2, 2, 2)).to.equal('equilateral');
  });

  it('returns isosceles if two sides are equal', function(){
    expect(triangleType(2, 3, 2)).to.equal('isosceles');
  });

  it('returns scalene if no sides are equal', function(){
    expect(triangleType(3,4,6)).to.equal('scalene');
  });

  it('returns not a triangle if one side is the same or longer than the other two combined', function() {
    expect(triangleType(2,2,8)).to.equal('not a triangle');
  });
});
