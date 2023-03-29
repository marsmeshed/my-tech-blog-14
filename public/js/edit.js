const newPostForm = document.querySelector("#form");
const deleteBtn = document.querySelector('#delete')

newPostForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleInput = document.querySelector("#text");
  const contentInput = document.querySelector("#content");
  const id = document.querySelector('#id');

  fetch("/api/posts/" + id.value, {
    method: "PUT",
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
// delete button
deleteBtn.addEventListener("click", (event) => {
    event.preventDefault();
  
    const id = document.querySelector('#id');
  
    fetch("/api/posts/" + id.value, {
      method: "DELETE",
      
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