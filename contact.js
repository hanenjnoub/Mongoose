const mongoose=require('mongoose')
const schema=mongoose.Schema
const personneSchema = new Schema({
    nom: {
      type: String,
      required: true
    },
    âge: {
      type: Number
    },
    favoriteFoods: {
      type: [String]
    }
  });

  const newPerson = new personneSchema({
    name: "John Doe",
    age: 25,
    favoriteFoods: ["Pizza", "Burger"]
  });
  
  newPerson.save(function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log("Person saved successfully:", data);
    }
  });
  
  