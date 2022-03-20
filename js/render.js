import { showBigPicture } from './util.js';

const renderComment = (comment) => {
  const commentItem = document.createElement('li');
  commentItem.classList.add('social__comment');
  const commentAvatar = document.createElement('img');
  commentAvatar.classList.add('social__picture');
  commentAvatar.setAttribute('src', comment.avatar);
  commentAvatar.setAttribute('alt', comment.name);
  commentAvatar.style.width = '35px';
  commentAvatar.style.height = '35px';
  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;
  commentItem.append(commentAvatar);
  commentItem.append(commentText);
  return commentItem;
};

const renderbigPicture = (kekstaPost) => {
  const bigPicture = document.querySelector('.big-picture');
  const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
  const bigPictureNumberOfLikes = bigPicture.querySelector('.likes-count');
  const bigPictureNumberOfComments = bigPicture.querySelector('.comments-count');
  const bigPictureComments = bigPicture.querySelector('.social__comments');
  const allCommentsOfPost = document.createDocumentFragment();
  const bigPictureDescription = bigPicture.querySelector('.social__caption');
  bigPictureImage.src = kekstaPost.url;
  bigPictureNumberOfLikes.textContent = kekstaPost.likes;
  bigPictureNumberOfComments.textContent = kekstaPost.comment.length;
  bigPictureDescription.textContent = kekstaPost.description;
  for (let i = 0; i < kekstaPost.comment.length; i++) {
    allCommentsOfPost.append(renderComment(kekstaPost.comment[i]));
  }
  bigPictureComments.append(allCommentsOfPost);
};

const createKekstaPost = (kekstaPost) => {
  const kekstaPostTemplate = document.querySelector('#picture').content;
  const kekstaPostToRender = kekstaPostTemplate.cloneNode(true);
  const kekstaPostImage = kekstaPostToRender.querySelector('.picture__img');
  kekstaPostImage.src = kekstaPost.url;
  const kekstaPostLikes = kekstaPostToRender.querySelector('.picture__likes');
  kekstaPostLikes.textContent = kekstaPost.likes;
  const kekstaPostComments = kekstaPostToRender.querySelector('.picture__comments');
  kekstaPostComments.textContent = kekstaPost.comment.length;
  const kekstaPostToRenderLink = kekstaPostToRender.querySelector('a');
  kekstaPostToRenderLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    showBigPicture();
    renderbigPicture(kekstaPost);
  });
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

export {renderKekstaPosts, renderbigPicture};
