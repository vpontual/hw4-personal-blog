const postForm = document.getElementById("post-form");

postForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("username").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  // Save the post data to localStorage
  localStorage.setItem(
    "posts",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("posts") || "[]"),
      {
        username,
        title,
        content,
      },
    ])
  );

  // Redirect to blog.html
  window.location.href = "../blog.html";
});
