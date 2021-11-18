var officeItems = ["stapler", "monitor", "computer", "desk", 
"lamp", "computer", "lamp", "stapler", "computer",  "computer"]

console.log(officeItems.length) //returns 10
let count = 0
for ( var i = 0; i < officeItems.length; i ++){
	console.log(officeItems[i])
	if (officeItems[i] == "computer"){
		count++ 
	}
}

console.log("Computer appears " + count +  " times.")



var peopleWhoWantToSeeMadMaxFuryRoad = [
	{
	  name: "Mike",
	  age: 12,
	  gender: "male"
	},{
	  name: "Madeline",
	  age: 80,
	  gender: "female"
	},{
	  name: "Cheryl",
	  age: 22,
	  gender: "female"
	},{
	  name: "Sam",
	  age: 30,
	  gender: "male"
	},{
	  name: "Suzy",
	  age: 4,
	  gender: "female"
	}
  ]

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){

	if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
		console.log("old enough")

	} else {
		console.log("not old enough")
	}
}
