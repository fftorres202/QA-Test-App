import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserPosts, createPost, updatePost, deletePost } from '../services/api';
import PostForm from '../components/PostForm';
import PostItem from '../components/PostItem';

function UserDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUserPosts(id)
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    const handleCreate = async (data) => {
        const newPost = await createPost({ ...data, userId: Number(id) });
        setPosts([newPost, ...posts]);
        setShowForm(false);
    };

    const handleUpdate = async (postId, data) => {
        await updatePost(postId, data);
        setPosts(
            posts.map((p) =>
                p.id === postId ? { ...p, title: data.title, body: data.title } : p
            )
        );
    };

    const handleDelete = async (postId) => {
        await deletePost(postId);
        setPosts(posts.filter((p) => p.id !== String(postId)));
    };

    return (
        <div data-testid="user-detail-page">
            <header className="app-header">
                <button
                    className="btn-secondary"
                    onClick={() => navigate('/users')}
                    data-testid="btn-back"
                >
                    &larr; Volver
                </button>
                <h2>Posts del usuario #{id}</h2>
                <button
                    className="btn-primary"
                    onClick={() => setShowForm(!showForm)}
                    data-testid="btn-new-post"
                >
                    {showForm ? 'Cancelar' : '+ Nuevo Post'}
                </button>
            </header>

            {showForm && <PostForm onSubmit={handleCreate} />}

            {loading ? (
                <p className="loading" data-testid="posts-loading">Cargando posts...</p>
            ) : (
                <ul className="post-list" data-testid="post-list">
                    {posts.map((post) => (
                        <PostItem
                            key={post.id}
                            post={post}
                            onUpdate={handleUpdate}
                            onDelete={handleDelete}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserDetailPage;
