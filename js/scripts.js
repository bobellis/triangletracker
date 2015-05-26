var triangleType = function(side1, side2, side3) {
  if ((side1 >= (side2 + side3)) || (side2 >= (side1 + side3)) || (side3 >= (side1 + side2))){
    return 'not a triangle';
  }
  else if ((side1 === side2) && (side2 === side3)){
    return 'equilateral';
  } else if ((side1 === side2) || (side2 === side3) || (side1 === side3)){
    return 'isosceles';
  } else {
    return 'scalene';
  }
};

$(document).ready(function() {
  $("form#sides").submit(function(event){
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    $("#triangle_type").text(triangleType(side1, side2, side3));
    event.preventDefault();
  });

});
