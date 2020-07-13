import * as types from './mutations_type.js'
import Vue from 'vue'

// state
export const state = {
  count: 0,
  createdUrl: [],
  top3VisitedUrl: [],
  hitCountGroupByDate: [],
}

// mutations
export const mutations = {
  // action 發出 commit 會對應到 mutation 使用的是 Object key 方式
  [types.INCREASE] (state) {
    // 在 mutation 改變 state（只有 mutation 可以改變！）
    state.count += 1;
  },
  [types.DECREASE] (state) {
    state.count -= 1;
  },
  [types.GET_CREATED_URL_SUCCESS] (state, data) {
    state.createdUrl = data;
  },
  [types.GET_TOP_3_VISITED_URL] (state, data) {
    state.top3VisitedUrl = data;
  },
  [types.GET_HIT_COUNT_GROUP_BY_DATE] (state, data) {
    state.hitCountGroupByDate = data;
  },
  [types.CREATE_SHORT_URL_SUCCESS] (state, data) {
    state.createdUrl.push(data);
  },
}