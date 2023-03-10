import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: {
    "Content-Security-Policy": "upgrade-insecure-requests",
  },
});

const instanceUnsplash = axios.create({
  baseURL: import.meta.env.VITE_UPSPLASH_API_URL,
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

export const addPost = async (data) => {
  return instance({
    url: "post",
    method: "POST",
    data,
  });
};

export const getRandomImage = async () => {
  return instanceUnsplash({
    url: `photos/random?client_id=${
      import.meta.env.VITE_UPSPLASH_API_ACCESS_TOKEN
    }`,
    method: "GET",
  });
};

export const editPost = async (id, data) => {
  return instance({
    url: `post/${id}`,
    method: "Patch",
    data,
  });
};

export const deletePost = async (id) => {
  return instance({
    url: `post/${id}`,
    method: "DELETE",
  });
};

export const addComment = async (id, data) => {
  return instance({
    url: `comment/${id}`,
    method: "POST",
    data,
  });
};

export const deleteComment = async (id) => {
  return instance({
    url: `comment/${id}`,
    method: "DELETE",
  });
};
