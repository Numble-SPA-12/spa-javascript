import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
});

export const getPostList = async () => {
  return instance({
    url: "posts",
    method: "GET",
  });
};

export const getPostDetail = async (id) => {
  return instance({
    url: `post/${id}`,
    method: "GET",
  });
};
