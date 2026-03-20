import { useState } from 'react';

function PostForm({ onSubmit, initialData }) {
    const [title, setTitle] = useState(initialData?.title || '');
    const [body, setBody] = useState(initialData?.body || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, body });
    };

    return (
        <form className="post-form" onSubmit={handleSubmit} data-testid="post-form">
            <div className="form-group">
                <label>Título</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Título del post"
                    data-testid="input-post-title"
                />
            </div>
            <div className="form-group">
                <label>Contenido</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Contenido del post"
                    rows={4}
                    data-testid="input-post-body"
                />
            </div>
            <button type="submit" className="btn-primary" data-testid="btn-submit-post">
                Guardar
            </button>
        </form>
    );
}

export default PostForm;
