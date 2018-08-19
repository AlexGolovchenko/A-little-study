
// event after click enter
function calc() {
  //get answer span
  let an = document.getElementById("an");
  // get input value
  let rubCost = document.getElementById("rubCost").value;
  let dollarCost = document.getElementById("dollarCost").value;
  let dollarValue = document.getElementById("dollarValue").value;
  let rubValue = document.getElementById("rubValue").value;
  let re = /^[\d]*[,.]?[\d]+$/; //match only numbers
  let tempDol, tempRub, res; //temp and main result
  // cost must be
  if (rubCost && dollarCost && dollarValue && rubCost != 0 && dollarCost != 0 && dollarValue != 0 || rubCost && dollarCost && rubValue && rubCost != 0 && dollarCost != 0 && rubValue != 0) {
    if (!re.test(rubCost) || !re.test(dollarCost)) {
      res = "You didnt write a number or perhaps you wrote a negative number. Please, try again!";
      an.innerHTML = res;
      return;
    }
    if (dollarValue) {
      if (!re.test(dollarValue)) {
        res = "You didnt write a number or perhaps you wrote a negative number. Please, try again!";
        an.innerHTML = res;
        return;
      }
    }
    if (rubValue) {
      if (!re.test(rubValue)) {
        res = "You didnt write a number or perhaps you wrote a negative number. Please, try again!";
        an.innerHTML = res;
        return;
      }
    }
  } else {
    res = "You didnt write a number or perhaps you wrote a negative number. Please, try again!";
    an.innerHTML = res;
    return;
  }
  let reComma = /,/; // match a single comma
  // check a single comma and replace by dot
  if (reComma.test(rubCost)) {
    rubCost = rubCost.replace(/,/, '.');
  };
  if (reComma.test(dollarCost)) {
    dollarCost = dollarCost.replace(/,/, '.');
  };
  if (reComma.test(dollarValue)) {
    dollarValue = dollarValue.replace(/,/, '.');
  };
  if (reComma.test(rubValue)) {
    rubValue = rubValue.replace(/,/, '.');
  };
  if (dollarValue) {
    tempRub = (rubCost * dollarValue / dollarCost).toFixed(2);
    tempRub = parseFloat(tempRub);
  }
  if (rubValue) {
    tempDol = (rubValue * dollarCost / rubCost).toFixed(2);
    tempDol = parseFloat(tempDol);
  }
  if (tempDol && tempRub) {
    res = `${tempRub} rub  /  ${tempDol} doll`;
  } else if (tempRub) {
    res = `${tempRub} rub`;
  } else if (tempDol) {
    res = `${tempDol} doll`;
  }
  an.innerHTML = res;
};

document.onkeyup = function(e) {
  // e = e || window.event;
  if (e.keyCode === 13) {
    calc();
  }
  return false;
}
