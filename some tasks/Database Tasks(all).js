//filter english company in the table 'testalex'
function filterEng() {
  let testalex = new SCFile("testalex");
  let res = testalex.doSelect("true"); //get line from the table 'testalex'
  let regExp = /^[0-9A-z\s'\.,-\/#!$%\^&\*;:{}=\-_`~()]+$/g; //only eng char | special char | num
  while (res == RC_SUCCESS) //while select success
  {
    let companyName = testalex["company.alias"]; //get value from the line
    let result = regExp.test(companyName);
    if (result) //if regExp true
    {
      print(testalex);
    }
    res = testalex.getNext(); //next line in the table
  }
}

//****************************************************

//replace id->company from a table 'secompany' to the table 'testalex'

function replaceId() {

  let testalex = new SCFile("testalex");
  let testalexResult = testalex.doSelect("true");

  let testalexCompanyId;
  let secompany = new SCFile("secompany");
  let secompanyResult;

  while (testalexResult == RC_SUCCESS) {
    testalexCompanyId = testalex["company.id"];
    secompanyResult = secompany.doSelect("company.id = \"" + testalexCompanyId + "\""); // select  company.id="CPY00000123"

    if (secompanyResult == RC_SUCCESS) {

      testalex["company.id"] = secompany["company"]; //replace value
    } else {
      testalex["company.id"] = "x"; //replace values
    };
    testalex.doAction("save");
    testalexResult = testalex.getNext();

  };
}

//****************************************************

//delete 'x' from testalex["company"]

function deleteX() {
  let testalex = new SCFile("testalex");
  let testalexResult = testalex.doSelect("true"); //'true' is evil

  while (testalexResult == RC_SUCCESS) {
    testalexCompanyId = testalex["company.id"];
    if (testalexCompanyId == "x") {
      testalex.doAction("delete"); //to delete value == 'x'
    };

    testalexResult = testalex.getNext();
  };
};

//****************************************************
//check user's lead capability, if it's not, add it

function checkSupportGroupLead(user) {

  var x = new SCFile("operator");
  x.doSelect("name=\"" + user + "\""); //good select expression
  var capexec = x["cap.exec"];
  var lead = "Support Group Lead";
  var exist = false;
  for (var key in capexec) { //simplified condition
    if (capexec[key] == lead) {
      exist = true; //boolean for full search list
      break;
    };
  }
  if (!exist) {
    capexec.push(lead); //add capability
    x.doAction("save");
  }
}

//****************************************************
//print users group (single value)

function checkGroup(login) {
  var x = new SCFile("assignment");
  x.doSelect("wdManagerName=\"" + login + "\"");
  loginGroup = x["name"];
  print(loginGroup);
};

//****************************************************

//check users group (any number of values), long function

function checkGroup(login) {
  var assign = new SCFile("assignment");
  var res = assign.doSelect("true");
  var whoManager;
  var loginGroup = new Array();
  while (res == RC_SUCCESS) {
    whoManager = assign["wdManagerName"];
    if (whoManager === login) {
      loginGroup.push(assign["name"]);
    };
    res = assign.getNext();
  };
  print(loginGroup);
};

//****************************************************

//return id (any number) if they're manager position

function getAssignentManager(login) {
  var arr = new Array()
  var ass = new SCRecordList("assignment", new QueryCond("wdManagerName", EQ, login).or(new QueryCond("se.wdsubmanager", EQ, login))) //simplified select expression
  for (var i = 0; i < ass.getCount(); i++) //calculation in the loop is evil
  {
    arr.push(ass[i]["se.id"])
  }
  return arr
}

//****************************************************

//rewrite check users group, short function

function checkGroup(login) {
  var loginGroup = new Array();
  var assign = new SCRecordList("assignment", new QueryCond("wdManagerName", EQ, login)); //simplified select expression
  var count = assign.getCount(); //calculate one time
  for (var i = 0; i < count; i++) {
    loginGroup.push(assign[i]["name"]);
  };
  print(loginGroup);
};

//****************************************************

//triger: if database changed, print it

var updateDb = function() {
  print("DB testalex updated " + Date());
};

//****************************************************
//count user's data

function countUserData(user) {
  var data = new SCRecordList("secorecategorization", new QueryCond("sysmoduser", EQ, user));
  var count = data.getCount();
  print(count);

};

//****************************************************

//check priority

var priorities = {
  "Critical": "Критический",
  "High": "Высокий",
  "Medium": "Средний",
  "Low": "Низкий"
}

var priority = priorities[$RECORD["priority.code"]] //$RECORD is a date of current table


//****************************************************

//check location street


var street = "";

var loc = new SCFile("location");
var resLoc = loc.doSelect("location.code=\"" + $RECORD["customer_location"] + "\"");
if (resLoc == RC_SUCCESS) {
  street = loc["address"].join(' ');
}

//****************************************************

//check group name

var group = "";
var assign = new SCFile("assignment");
var resAssign = assign.doSelect("se.id=\"" + $RECORD["se_assignment_group"] + "\"");
if (resAssign == RC_SUCCESS) {
  group = assign["name"];
}
