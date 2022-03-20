import { MAX_NUMBER_OF_HASHTAGS, REG_EXP_FOR_HASHTAGS } from './data.js';

function validateHashtagsText (hashtags) {
  for (let i = 0; i < hashtags.length; i++) {
    if (!REG_EXP_FOR_HASHTAGS.test(hashtags[i])) {
      return true;
    }
  }
}
function validateSimilarHashtags (hashtagsArray) {
  const setOfHashtags = new Set(hashtagsArray);
  return setOfHashtags.size === hashtagsArray.length;
}

function validateNumberOfHashtags (hashtagsArray) {
  return hashtagsArray.length > MAX_NUMBER_OF_HASHTAGS;
}

export {
  validateHashtagsText,
  validateSimilarHashtags,
  validateNumberOfHashtags
};
