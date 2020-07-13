import Vue from 'vue'
import mutations from './mutations'
import * as types from './mutations_type.js'
import * as shortUrl from '../utils/ShortUrlAPI.js'

export const actionGetCreatedUrl = ({ commit }) => {
  shortUrl.getCreatedUrl()
    .then((response) => {
      commit(types.GET_CREATED_URL_SUCCESS, response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

export const actionCeateShortUrl = ({ commit }, data) => {
  console.log(data)
  shortUrl.createNewShortUrl(data)
    .then((response) => {
      commit(types.CREATE_SHORT_URL_SUCCESS, response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

export const actionGetTop3VisitedUrl = ({ commit }) => {
  shortUrl.getTop3VisitedUrl()
    .then((response) => {
      commit(types.GET_TOP_3_VISITED_URL, response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

export const actionGetHitCountGroupByDate = ({ commit }) => {
  shortUrl.getHitCountGroupByDate()
    .then((response) => {
      console.log(response.data)
      commit(types.GET_HIT_COUNT_GROUP_BY_DATE, response.data);
    })
    .catch(error => {
      console.log(error);
    });
}
