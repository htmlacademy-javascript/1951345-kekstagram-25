import { isEscapeKey } from './util.js';
import { COMMENTS_TO_SHOW, FIRSTABLE_SHOWN_COMMENTS } from './data.js';
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureNumberOfLikes = bigPicture.querySelector('.likes-count');
const bigPictureNumberOfComments = bigPicture.querySelector('.comments-count');
const bigPictureComments = bigPicture.querySelector('.social__comments');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const kekstaPostTemplate = document.querySelector('#picture').content;
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const commentsLoader = bigPicture.querySelector('.social__comments-loader');
const shownCommentsCount = bigPicture.querySelector('.comments-shown');

const onCloseBtnClick = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onEscapeKeydown);
};

const showCommentLoader = () => {
  commentsLoader.classList.remove('hidden');
};

const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  bigPictureCancel.addEventListener('click', onCloseBtnClick);
  document.addEventListener('keydown', onEscapeKeydown);
  showCommentLoader();
};

function onEscapeKeydown (evt) {
  if (isEscapeKey(evt)) {
    onCloseBtnClick();
  }
}

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
const clearComments = () => {
  const commentsToClear = bigPictureComments.querySelectorAll('li');
  for (let i = 0; i < commentsToClear.length; i++) {
    commentsToClear[i].remove();
  }
};
const renderbigPicture = (kekstaPost) => {
  const allCommentsOfPost = document.createDocumentFragment();
  bigPictureImage.src = kekstaPost.url;
  bigPictureNumberOfLikes.textContent = kekstaPost.likes;
  bigPictureNumberOfComments.textContent = kekstaPost.comments.length;
  bigPictureDescription.textContent = kekstaPost.description;
  for (let i = 0; i < kekstaPost.comments.length; i++) {
    const comment = renderComment(kekstaPost.comments[i]);
    if (i > FIRSTABLE_SHOWN_COMMENTS - 1) {
      comment.classList.add('hidden');
    }
    allCommentsOfPost.append(comment);
  }
  clearComments();
  if (kekstaPost.comments.length > FIRSTABLE_SHOWN_COMMENTS - 1) {
    shownCommentsCount.textContent = FIRSTABLE_SHOWN_COMMENTS;
  } else {
    shownCommentsCount.textContent = kekstaPost.comments.length;
    commentsLoader.classList.add('hidden');
  }

  bigPictureComments.append(allCommentsOfPost);
};

const hideCommentLoader = () => {
  commentsLoader.classList.add('hidden');
};

const onLoadMoreClick = () => {
  let shownComments = Number(bigPicture.querySelector('.comments-shown').textContent);
  const allComments = Number(bigPicture.querySelector('.comments-count').textContent);
  const comments = bigPictureComments.querySelectorAll('.social__comment');
  if (allComments - shownComments > COMMENTS_TO_SHOW) {
    shownComments += COMMENTS_TO_SHOW;
    for (let i = 0; i < shownComments; i++) {
      comments[i].classList.remove('hidden');
    }
  } else {
    for (let i = 0; i < allComments; i++) {
      comments[i].classList.remove('hidden');
      shownComments = allComments;
      hideCommentLoader();
    }
  }
  shownCommentsCount.textContent = shownComments;
};
commentsLoader.addEventListener('click', onLoadMoreClick);

const createKekstaPost = (kekstaPost) => {
  const kekstaPostToRender = kekstaPostTemplate.cloneNode(true);
  const kekstaPostImage = kekstaPostToRender.querySelector('.picture__img');
  const kekstaPostLikes = kekstaPostToRender.querySelector('.picture__likes');
  const kekstaPostComments = kekstaPostToRender.querySelector('.picture__comments');
  const kekstaPostToRenderLink = kekstaPostToRender.querySelector('a');
  kekstaPostImage.src = kekstaPost.url;
  kekstaPostLikes.textContent = kekstaPost.likes;
  kekstaPostComments.textContent = kekstaPost.comments.length;
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
  for (let i = 0; i < kekstaPosts.length ; i++){
    allKekstaPosts.append(createKekstaPost(kekstaPosts[i]));
  }
  postsContainer.append(allKekstaPosts);
};

export {renderKekstaPosts, renderbigPicture};
