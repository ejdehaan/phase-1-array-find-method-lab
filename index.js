const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

function findWin(obj) {
  return (obj.result === "W")
}

/*
  function superbowlWin(teamRecord) {
    var found = teamRecord.find(element => element.result === "W")
    console.log(found)
    return found.year
  }
*/
function superbowlWin(teamRecord) {
  var found = teamRecord.find(findWin)
  console.log(found)
  return (found && found !== null && found !== undefined) ? found.year : undefined
}
 

