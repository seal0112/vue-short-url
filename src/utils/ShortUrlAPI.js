import axios from 'axios'

const api = 'http://0.0.0.0:5001'
const headers = {
  'Accept': 'application/json',
};

const shortUrlRequest = axios.create({
  baseURL: api+'/',
  headers: headers,
  mode: 'no-cors',
});

export const getCreatedUrl = () =>
  shortUrlRequest.get('/').then((res) => res);

export const getTop3VisitedUrl = () =>
  shortUrlRequest.get('/top-three-visited').then((res) => res);

export const getHitCountGroupByDate = () =>
  shortUrlRequest.get('/hit-count-group-by-date').then((res) => res);

export const createNewShortUrl = (data) =>
  shortUrlRequest.post('/', data).then((res) => res);
