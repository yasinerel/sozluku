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

      

