// replace some values in database by values another db's

function replaceDb() {
  var company = new SCFile("company");
  var seSG = new SCFile("sesitegroup");
  var resSeSG = seSG.doSelect("true"); //select from db, typeof => object
  var fil = new SCFile("sefilial");

  while (resSeSG == RC_SUCCESS) {
    company.doSelect("company=\"" + seSG["company"] + "\""); //select the same values
    seSG["company"] = company["customer.id"]; //replace values

    fil.doSelect("filial=\"" + seSG["region"] + "\""); //select the same values
    seSG["region"] = fil["region.id"]; //replace values

    seSG.doAction("save"); //save changes
    resSeSG = seSG.getNext(); //get next data object
  };
}
