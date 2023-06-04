import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setKpis: (state, action) => {
      state.kpis = action.payload.kpis;
    },
    setKpi: (state, action) => {
      const updatedKpis = state.kpis.map((kpi) => {
          if (kpi._id === action.payload.kpi_id) return action.payload.kpi;
          return kpi;
      });
      state.kpis = updatedKpis;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost, setKpi, setKpis } =
  authSlice.actions;
export default authSlice.reducer;
