// get element
const container = document.querySelector("#posts-container");
const loading = document.querySelector(".loader");
const filter = document.querySelector("#filter");
// limit for posts
let limit = 5;
let page = 1;

// fetch posts from api
async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const data = await res.json();
  return data;
}
// show post in dom
async function showPosts() {
  const posts = await getPosts();
  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    `;
    container.appendChild(postEl);
  });
}
// show loader & fetch more posts
function showLoading() {
  // show the loading
  loading.style.opacity = 1;
  // remove the loading
  setTimeout(() => {
    loading.style.opacity = 0;

    setTimeout(() => {
      // 5 posts dg fetch api
      page++;
      showPosts();
    });
  }, 1000);
}

// show initial posts
showPosts();

// scroll

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

// filter event listeners
filter.addEventListener("input", filterPosts);

function filterPosts(e) {
  let term = e.target.value.toUpperCase();
  const posts = document.querySelectorAll(".post");
  // console.log(posts)
  posts.forEach((post) => {
    const title = post.querySelector(".post-title").innerText.toUpperCase();
    const body = post.querySelector(".post-body").innerText.toUpperCase();
    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = "flex";
    } else {
      post.style.display = "none";
    }
  });
}
