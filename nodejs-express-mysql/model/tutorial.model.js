import DB from "../config/connection.js";

//constructor

const Tutorial = (tutorial) => {
  this.title = tutorial.title;
  this.description = tutorial.description;
  this.published = tutorial.published;
};

Tutorial.create = (newTutorial, result) => {
  DB.query("INSERT INTO tutorials SET ?", newTutorial, (err, res) => {
    try {
      console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
      result(null, { id: res.insertId, ...newTutorial });
    } catch (error) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};
