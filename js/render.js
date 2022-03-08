const renderKekstaPost = (kekstaPosts) => {
  const pictureDiv = document.querySelector('.pictures');
  for (let i = 0; i < kekstaPosts.length - 1; i++){
    const kekstaPostTemplate = document.querySelector('#picture').content;
    const kekstaPostRender = kekstaPostTemplate.cloneNode(true);
    const kekstaPostImage = kekstaPostRender.querySelector('.picture__img');
    kekstaPostImage.src = kekstaPosts[i].url;
    const kekstaPostLikes = kekstaPostRender.querySelector('.picture__likes');
    kekstaPostLikes.textContent = kekstaPosts[i].likes;
    const kekstaPostComments = kekstaPostRender.querySelector('.picture__comments');
    kekstaPostComments.textContent = kekstaPosts[i].comment.length;
    pictureDiv.append(kekstaPostRender);
  }
};
export {renderKekstaPost};
