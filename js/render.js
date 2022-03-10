const createKekstaPost = (kekstaPost) => {
  const kekstaPostTemplate = document.querySelector('#picture').content;
  const kekstaPostToRender = kekstaPostTemplate.cloneNode(true);
  const kekstaPostImage = kekstaPostToRender.querySelector('.picture__img');
  kekstaPostImage.src = kekstaPost.url;
  const kekstaPostLikes = kekstaPostToRender.querySelector('.picture__likes');
  kekstaPostLikes.textContent = kekstaPost.likes;
  const kekstaPostComments = kekstaPostToRender.querySelector('.picture__comments');
  kekstaPostComments.textContent = kekstaPost.comment.length;
  return kekstaPostToRender;
};
const renderKekstaPosts = (kekstaPosts) => {
  const postsContainer = document.querySelector('.pictures');
  const allKekstaPosts = document.createDocumentFragment();
  for (let i = 0; i < kekstaPosts.length - 1; i++){
    allKekstaPosts.append(createKekstaPost(kekstaPosts[i]));
  }
  postsContainer.append(allKekstaPosts);
};
export {renderKekstaPosts};
