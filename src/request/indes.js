// 使用fetch请求jsonplaceholder.typicode.com/posts/1
export async function fetchPost(postId = 1) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP错误! 状态码: ${response.status}`);
    }
    
    const postData = await response.json();
    return postData;
  } catch (error) {
    console.error('请求失败:', error);
    return null;
  }
}

