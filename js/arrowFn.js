const sum = (a, b) => {
  return a + b;
};
function sum2(a,b) {
    return a +b;
}

sum(5,6) //11

//Choose this if your function is one liner only and returning
const sum3 = (a, b) => a + b

//Default value
const sum4 = (a, b = 0) => {
    return a + b;
    //return 5 + undefined

    //return 5 + 0
  };

  sum4(5)

