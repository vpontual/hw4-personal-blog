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

// Function to create a post element (modify as needed for your HTML structure)
function createPostElement(post) {
  const postItem = document.createElement("li");
  postItem.classList.add("post-item"); // Add a class for styling

  const titleElement = document.createElement("h3");
  titleElement.textContent = post.title;
  postItem.appendChild(titleElement);

  const usernameElement = document.createElement("p");
  usernameElement.textContent = `Username: ${post.username}`;
  postItem.appendChild(usernameElement);

  const contentElement = document.createElement("p");
  contentElement.textContent = post.content; // You might want to truncate the content for display
  postItem.appendChild(contentElement);

  return postItem;
}
