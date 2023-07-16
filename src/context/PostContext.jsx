import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../utils/consts";

const postContext = createContext();

export function usePostsContext() {
  return useContext(postContext);
}

const PostContext = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [onePost, setOnePost] = useState({});

  async function getPosts() {
    const { data } = await axios.get(API);
    setPosts(data);
  }

  async function getOnePost(id) {
    const { data } = await axios(`${API}/${id}`);
    setOnePost(data);
  }

  const value = {
    posts,
    onePost,
    getPosts,
    getOnePost,
  };

  return <postContext.Provider value={value}>{children}</postContext.Provider>;
};

export default PostContext;
