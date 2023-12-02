let blogArticles = document.querySelectorAll('.blog-article.short');

for (let blogArticle of blogArticles) {
  let moreButton = document.querySelector('.more');
  moreButton.onclick = function () {
  blogArticle.classList.remove('short');
  };
}

// let blogArticleOne = document.querySelector('.blog-article-1.short');
// let blogArticleTwo = document.querySelector('.blog-article-2.short');
// let moreButton = document.querySelector('.more');

// moreButton.onclick = function () {
//   blogArticleOne.classList.remove('short');
//   };

// moreButton.onclick = function () {
//   blogArticleTwo.classList.remove('short');
// };
  
