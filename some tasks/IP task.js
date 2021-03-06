/*Task: check value is it an IP
long*/

function c(x) {
  console.log(x);
}

function isIp(str) {
  // match only IP : 1-3 num [1-9], '.', 1-3 num [0-9], '.' etc <= 255
  const x = '(((25[0-5]|2[0-4][0-9]))|(1[0-9][0-9])|([1-9][0-9])|[0-9])';
  const rx = new RegExp('^(((25[0-5]|2[0-4][0-9])|(1[0-9][0-9])|([1-9][0-9])|([1-9]))\.)' + x + '\.' + x + '\.' + x + '$')
  if (rx.test(str)) {
    return true;
  } else {
    return false;
  }

};

//c(isIp('249.255.255.229'));	//true

//*********************************************************************

/*Task: check value is it an IP
short*/

const isIp2 = (str) => str.trim().split('.').every((e, i) => i === 0 ? ((e >= 1) && (e <= 255)) : ((e >= 0) && (e <= 255)))
//c(isIp2('249.255.255.229'))	//true
