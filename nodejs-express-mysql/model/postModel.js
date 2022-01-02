import DB from "../config/connection.js";

// constructor
const Tutorial = function (tutorial) {
  this.title = tutorial.title;
  this.description = tutorial.description;
};

Tutorial.create = (newTutorial, result) => {
  DB.query("INSERT INTO tutorials SET ?", newTutorial, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
    result(null, { id: res.insertId, ...newTutorial });
  });
};

export default Tutorial;

// class Post {
//   constructor(title, description) {
//     this.title = title;
//     this.description = description;
//   }

//   async save() {
//     const sql = `INSERT INTO tutorials(
//             title,
//             description

//         )
//         VALUES(
//             '${this.title}',
//             '${this.description}'

//         ) `;

//     const [newPost, _] = await DB.execute(sql);

//     return newPost;
//   }

//   static findAll() {}
// }

// export default Post;
