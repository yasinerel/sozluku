    /*const addTopicBtn = document.getElementById("add-topic-btn");
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
*/

/************************************ */

//local storage


const addTopicBtn = document.getElementById("add-topic-btn");
const addTopicForm = document.getElementById("add-topic-form");
const topicList = document.getElementById("topic-list");
const topicContent = document.querySelector(".topic-content");

// Retrieve saved topics from localStorage and display them in the DOM
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const topic = JSON.parse(localStorage.getItem(key));
  const newTopic = document.createElement("li");
  newTopic.innerHTML = `<a href="#" data-key="${key}">${topic.title}</a><button class="delete-topic-btn">Delete</button>`;
  topicList.appendChild(newTopic);
}

addTopicBtn.addEventListener("click", () => {
  addTopicForm.style.display = "block";
});

addTopicForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const key = Date.now().toString(); // Generate a unique key for the topic
  const topic = { title: titleInput.value, content: contentInput.value };
  const newTopic = document.createElement("li");
  newTopic.innerHTML = `<a href="#" data-key="${key}">${topic.title}</a><button class="delete-topic-btn">Delete</button>`;
  topicList.appendChild(newTopic);
  localStorage.setItem(key, JSON.stringify(topic)); // Save the topic in localStorage
  titleInput.value = "";
  contentInput.value = "";
  addTopicForm.style.display = "none";
});

// Add event listener to delete buttons
topicList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-topic-btn")) {
    const topicLink = event.target.previousElementSibling;
    const key = topicLink.getAttribute("data-key");
    localStorage.removeItem(key); // Remove the topic from localStorage
    topicList.removeChild(topicLink.parentNode);
    topicContent.innerHTML = ""; // Clear the selected topic content when a topic is deleted
  } else if (event.target.tagName === "A") {
    event.preventDefault();
    const key = event.target.getAttribute("data-key");
    const topic = JSON.parse(localStorage.getItem(key));
    topicContent.innerHTML = `<h3>${topic.title}</h3><p>${topic.content}</p>`;
  }
});
