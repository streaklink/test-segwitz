import { createStore } from "vuex";
import router from "./../router";
import { loginService } from "../api";

export default createStore({
  state: {
    isLogin: false,
    token: null,
    user: null,
    blogList: [
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        long_content:
          "Equity Mutual Funds are exposed to market volatility and in this ongoing global crisis , valuation has come down drastically. So for the existing investors almost all the equity MF folios are bleeding. The Stock Market Sale is being driven by Panic or human emotions not by the Fundamentals or Technical Data. This volatility may continue for some more time and you may witness further corrections.No one can point out where the bottom will be for the stock market indices, but you can easily see that many of Indian equity gems are available at attractive valuations.",
        meta_des: "Test",
        meta_key: "Test",
        meta_title:
          "Losing Money in Your Equity Mutual Funds This Article will Give You Some Clarity and Show You the Road Map Ahead",
        name: "Losing Money in Your Equity Mutual Funds This Article will Give You Some Clarity and Show You the Road Map Ahead",
        small_content:
          "Equity Mutual Funds are exposed to market volatility and in this ongoing global crisis , valuation has come down drastically. So for the existing investors almost all the equity MF folios are bleeding. The Stock Market Sale is being driven by Panic or human emotions not by the Fundamentals or Technical Data. This volatility may continue for some more time and you may witness further corrections.",
        url: "losing-money-in-your-equity-mutual-funds-this-article-will-give-you-some-clarity-and-show-you-the-road-map-ahead",
      },
    ],
  },
  getters: {},
  mutations: {
    resetState(state) {
      state.isLogin = false;
      state.token = null;
      state.user = null;
    },
    loginRequest(state, user) {
      state.isLogin = true;
      state.token = null;
      state.user = user;
    },
    loginSuccess(state) {
      state.isLogin = true;
      state.token = null;
      state.user = null;
    },
    loginFailure(state) {
      state.isLogin = false;
    },
    addBlogData(state, blog) {
      state.blogList.push(blog);
    },
    removeBlogData(state, index) {
      state.blogList.splice(index, 1);
    },
    // editBlogData(state, data) {
    //   state.blogList.find({});
    // },
  },
  actions: {
    login({ commit }, { username, password }) {
      commit("loginRequest", { username });
      let result = loginService.login(username, password);
      console.log(result);
      if (result) {
        commit("loginSuccess");
        sessionStorage.setItem("token", "58963478523ANFRY1385DWMOU");
        console.log("login success");
        router.push("/dashboard");
      } else {
        alert("login Not success");
      }
    },
    logout({ commit }) {
      commit("resetState");
      sessionStorage.removeItem("token");
      router.push("/");
    },
    clearState({ commit }) {
      commit("resetState");
    },
    addBlog({ commit }, blog) {
      commit("addBlogData", blog);
    },
    // editClick({ commit }, eblog) {
    //   commit("editBlogData", eblog);
    // },
    removeClick({ commit }, rblog) {
      console.log(rblog);
      commit("removeBlogData", rblog);
    },
  },
  modules: {},
});
