describe('triangleType', function() {
  it('returns equilateral if all sides are equal', function() {
    expect(triangleType(2, 2, 2)).to.equal('equilateral');
  });

  it('returns isosceles if two sides are equal', function(){
    expect(triangleType(2, 3, 2)).to.equal('isosceles');
  });
});
