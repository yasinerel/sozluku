    const addTopicBtn = document.getElementById("add-topic-btn");
    const addTopicForm = document.getElementById("add-topic-form");
    const topicList = document.getElementById("topic-list");

    addTopicBtn.addEventListener("click", () => {
      addTopicForm.style.display = "block";
    });

    addTopicForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const titleInput = document.getElementById("title");
        const contentInput = document.getElementById("content");
        const newTopic = document.createElement("li");
        newTopic.innerHTML = `<a href="#">${titleInput.value}</a>`;
        topicList.appendChild(newTopic);
        titleInput.value = "";
        contentInput.value = "";
        addTopicForm.style.display = "none";
      });

/************************************ */

const mysql = require('mysql');

// Connect to the MySQL server
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root@localhost',
  password: 'Asya2703.',
  database: 'sozluku'
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});


addTopicBtn.addEventListener("click", () => {
  addTopicForm.style.display = "block";
});

addTopicForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const title = titleInput.value;
  const content = contentInput.value;
  
  // Insert the new topic into the database
  const sql = `INSERT INTO topics (title, content) VALUES ('${title}', '${content}')`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  
  const newTopic = document.createElement("li");
  newTopic.innerHTML = `<a href="#">${title}</a>`;
  topicList.appendChild(newTopic);
  titleInput.value = "";
  contentInput.value = "";
  addTopicForm.style.display = "none";
});

// Close the database connection when the application exits
process.on('exit', function() {
  connection.end();
});
