const newPostForm = document.querySelector("#new-post-form");

newPostForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleInput = document.querySelector("#title");
  const contentInput = document.querySelector("#content");

  fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title: titleInput.value,
      content: contentInput.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.location.replace('/dashboard');
    });
});
