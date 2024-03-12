const form = document.getElementById("post-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("username").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  // Create a post object to store data
  const post = {
    username,
    title,
    content,
  };

  // Store the post object in localStorage
  localStorage.setItem("posts", JSON.stringify([post])); // Overwrite existing data (if any)

  // Clear the form
  form.reset();

  // Redirect to the list page
  window.location.href = "./blog.html";
});

const form = document.getElementById("post-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("username").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  // Create a post object to store data
  const post = {
    username,
    title,
    content,
  };

  // Retrieve existing posts from localStorage (if any)
  let storedPosts = JSON.parse(localStorage.getItem("posts")) || [];

  // Add the new post to the existing array
  storedPosts.push(post);

  // Store the updated array of posts in localStorage
  localStorage.setItem("posts", JSON.stringify(storedPosts));

  // Clear the form
  form.reset();

  // You can choose between redirecting or updating the current page:

  // Option 1: Redirect to the list page (blog.html)
  // window.location.href = "./blog.html";

  // Option 2: Update the current page (assuming you have an element to display posts)
  const blogList = document.getElementById("blog-list"); // Replace with the actual element ID
  const newPostElement = createPostElement(post); // Function to create the post element (explained below)
  blogList.appendChild(newPostElement);
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
