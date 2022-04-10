import { showImgUploadOverlay } from './forms.js';

const loadImageToUploadOverlay = (previewImage, fileReader, effectsImagesList) => {
  previewImage.src = fileReader.result;
  for (let i = 0; i < effectsImagesList.length; i++) {
    effectsImagesList[i].style.backgroundImage = `url("${fileReader.result }")`;
  }
  showImgUploadOverlay();
};

export {loadImageToUploadOverlay};
