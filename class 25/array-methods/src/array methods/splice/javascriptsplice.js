
// array.splice(start, deletcount, item1, item2, item3, item4.....)

//start..start index
//delcount ...how many wanted to delete
// item1, item2, item3, item4..items to add

  let mobiles = ["lg", "oppo", "vivo", "iphone", "samsung"];
  
  //let remove = mobiles.splice(1, 1); //1 is starting index, 3 will be delete count
  let addMobiles = mobiles.splice(2, 2, "bpl", "lava", "shine mobile")

  //console.log(remove);
  console.log(addMobiles)
  console.log(mobiles)