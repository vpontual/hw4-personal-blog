const posts = JSON.parse(localStorage.getItem("posts") || "[]");

const postList = document.getElementById("post-list");

posts.forEach((post) => {
  const newPost = document.createElement("div");
  newPost.classList.add("post"); // Add a CSS class for styling (optional)
  newPost.innerHTML = `
    <h3>${post.title} by ${post.username}</h3>
    <p>${post.content}</p>
  `;
  postList.appendChild(newPost);
});
