const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
    const res = await fetch(`${BASE_URL}/users`);
    return res.json();
};

export const getUserPosts = async (userId) => {
    const res = await fetch(`${BASE_URL}/posts?userId=${userId}`);
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
};

export const createPost = async (data) => {
    const res = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const updatePost = async (id, data) => {
    const res = await fetch(`${BASE_URL}/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const deletePost = async (id) => {
    const res = await fetch(`${BASE_URL}/posts/${id}`, {
        method: 'DELETE',
    });
    return res.json();
};
