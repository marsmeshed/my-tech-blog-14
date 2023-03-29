const newPostForm = document.querySelector("#new-comment-form");
const id = document.querySelector('#id');

newPostForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const contentInput = document.querySelector("#content");

  fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({
      comment_content: contentInput.value,
      post_id: id.value
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
