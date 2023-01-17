export const request = async (url) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}${url}`);

    if (!res.ok) {
      throw new Error("API Call Fail");
    }

    return await res.json();
  } catch (e) {
    throw Error(e.message);
  }
};

export const getPostList = async () => await request("posts");
export const getPostDetail = async (id) => await request(`post/${id}`);
