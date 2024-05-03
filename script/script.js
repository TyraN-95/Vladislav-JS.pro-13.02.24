function fetchPostById(postId) {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Не удалось получить пост с ID: ${postId}`);
        }
        return response.json();
      });
  }
  
  function fetchCommentsByPostId(postId) {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Не удалось получить комментарии для поста с ID: ${postId}`);
        }
        return response.json();
      });
  }
  
  function displayPost(post) {
    const postDetails = document.getElementById("postDetails");
    postDetails.innerHTML = `
      <h3>Название поста: ${post.title}</h3>
      <p>${post.body}</p>
      <button id="fetchComments">Получить комментарии</button>
    `;
  }
  
  function displayComments(comments) {
    const commentsSection = document.getElementById("commentsSection");
    commentsSection.innerHTML = `
      <h4>Комментарии:</h4>
      <ul>
        ${comments.map(
          (comment) => `<li><strong>${comment.name}</strong>: ${comment.body}</li>`
        ).join("")}
      </ul>
    `;
  }
  
  document.getElementById("searchPost").addEventListener("click", () => {
    const postId = document.getElementById("postId").value;
    if (postId < 1 || postId > 100) {
      alert("Введите корректный ID поста в диапазоне от 1 до 100.");
      return;
    }
  
    fetchPostById(postId)
      .then((post) => {
        displayPost(post);
  
        document.getElementById("fetchComments").addEventListener("click", () => {
          fetchCommentsByPostId(postId)
            .then((comments) => displayComments(comments))
            .catch((error) => alert(error.message));
        });
      })
      .catch((error) => alert(error.message));
  });
  