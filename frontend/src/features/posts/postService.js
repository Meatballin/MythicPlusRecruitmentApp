import axios from 'axios'
const API_URL = '/api/posts/'

const getPosts = async(token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  } 

  const response = await axios.get(API_URL + 'getPosts', config)
  return response.data
}


const createPost = async(postData,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  } 

  const response = await axios.post(API_URL, postData, config)
  return response.data
}

const deletePost = async(postID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  } 

  const response = await axios.delete(API_URL + postID, config)
  return response.data
}
const postService = {
  getPosts,
  createPost,
  deletePost
}

export default postService