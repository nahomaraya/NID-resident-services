

export async function createPost(data) {
    const response = await fetch(`http://localhost:3002/posts`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({post: data})
      })
    
}

// export async function createPost(data) {
//     const response = await axios.post(`/api/user`, {user: data});
//     return response.data;
// }

