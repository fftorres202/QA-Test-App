import { useState } from 'react';
import PostForm from './PostForm';

function PostItem({ post, onUpdate, onDelete }) {
    const [editing, setEditing] = useState(false);

    const handleUpdate = (data) => {
        onUpdate(post.id, data);
        setEditing(false);
    };

    return (
        <li className="post-card" data-testid={`post-item-${post.id}`}>
            {editing ? (
                <PostForm initialData={post} onSubmit={handleUpdate} />
            ) : (
                <>
                    <h3 data-testid={`post-title-${post.id}`}>{post.title}</h3>
                    <p data-testid={`post-body-${post.id}`}>{post.body}</p>
                    <div className="post-actions">
                        <button
                            className="btn-secondary"
                            onClick={() => setEditing(true)}
                            data-testid={`btn-edit-${post.id}`}
                        >
                            Editar
                        </button>
                        <button
                            className="btn-danger"
                            onClick={() => onDelete(post.id)}
                            data-testid={`btn-delete-${post.id}`}
                        >
                            Eliminar
                        </button>
                    </div>
                </>
            )}
        </li>
    );
}

export default PostItem;
