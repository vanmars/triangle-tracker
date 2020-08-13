// Business Logic
function equTriangle (side1, side2, side3) {
  if (side1 === side2 && side1 ===side3){
    return true;
  };
};

function isoTriangle (side1, side2, side3) {
  if (side1 === side2 && side1 !== side3){
    return true;
  };
};

function scalTriangle (side1, side2, side3) {
  if (side1 !== side2 && side1 !== side3 && side2 !== side3){
    return true;
  };
};

function notATriangle (side1, side2, side3) {
  if (side1+side2 <= side3 || side1+side3 <= side2 || side2+side3 <= side1){
    return true;
  };
};


// User Interface Logic
  $(document).ready(function () {
    $("#form").submit(function (event) {
      event.preventDefault();
      const side1Input = parseInt($("#side1").val());
      const side2Input = parseInt($("#side2").val());
      const side3Input = parseInt($("#side3").val());

      if (equTriangle(side1Input, side2Input, side3Input)) {
        $("#result").text("You have an equilateral triangle!")
      } else if (isoTriangle(side1Input, side2Input, side3Input)) {
        $("#result").text("You have an isosceles triangle!")
      } else if (scalTriangle(side1Input, side2Input, side3Input)) {
        $("#result").text("You have a scalene triangle!")
      } else {
        $("#result").text("Sorry, you do not have a triangle!")
      }
    });
  });
 