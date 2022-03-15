import { MAX_NUMBER_OF_HASHTAGS } from './data.js';
function validateHashtagText (hashtag) {
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  return re.test(hashtag);
}
function validateSimilarHashtags (hashtagsArray) {
  for (let i = 0; i < hashtagsArray.length; i++){
    for (let j = 0; j < hashtagsArray.length; j++){
      if(hashtagsArray[i].toUpperCase() === hashtagsArray[j].toUpperCase() && i !== j){
        return 0;
      }
    }
  }
  return 1;
}

function validateNumberOfHashtags (hashtagsArray) {
  return hashtagsArray.length > MAX_NUMBER_OF_HASHTAGS;
}

export {
  validateHashtagText,
  validateSimilarHashtags,
  validateNumberOfHashtags
};
