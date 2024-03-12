const postContainer = document.getElementById("posts");

function displayPosts() {
  // Get data from localStorage
  const blogData = JSON.parse(localStorage.getItem("posts"));

  // Clear previous entries
  postContainer.innerHTML = "";

  if (blogData) {
    // Loop through each blog entry
    blogData.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      // Create elements for username, title, and content
      const usernameElement = document.createElement("h3");
      usernameElement.textContent = `Username: ${post.username}`;

      const titleElement = document.createElement("h2");
      titleElement.textContent = post.title;

      const contentElement = document.createElement("p");
      contentElement.textContent = post.content;

      // Append elements to the post
      postElement.appendChild(usernameElement);
      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);

      // Append the post to the container
      postContainer.appendChild(postElement);
    });
  } else {
    postContainer.textContent = "No blog posts yet.";
  }
}

// Call the display function on page load and after form submission
displayPosts();
