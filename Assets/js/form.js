const postform = document.getElementById("post-form");

postform.addEventListener("submit", function (event) {
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
  postform.reset();

  // Redirect to the blogs page
  window.location.href = "./blog.html";
});
