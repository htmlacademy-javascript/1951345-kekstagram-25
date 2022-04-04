import { renderKekstaPosts } from './render.js';
import './editor.js';
import './forms.js';
import './photo_filter.js';
import './uploader.js';
import { getData } from './api.js';
getData((kekstaposts) => {
  renderKekstaPosts(kekstaposts);
});

