import { showImgUploadOverlay } from './forms.js';

const loadImageToUploadOverlay = (previewImage, fileReader, effectsImagesList) => {
  previewImage.src = fileReader.result;
  effectsImagesList.forEach((effect) => {
    effect.style.backgroundImage = `url("${fileReader.result }")`;
  });
  showImgUploadOverlay();
};

export {loadImageToUploadOverlay};
