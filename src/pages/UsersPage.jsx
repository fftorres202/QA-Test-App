import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../services/api';

function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        getUsers()
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch(() => {
                setError('Error al cargar los usuarios. Intenta de nuevo.');
            });
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('auth');
        navigate('/');
    };

    if (loading) {
        return <div className="flex min-h-screen items-center justify-center text-zinc-500" data-testid="loading">Cargando...</div>;
    }

    return (
        <div className="mx-auto min-h-screen w-full max-w-6xl px-4 py-6" data-testid="users-page">
            <header className="mb-6 flex items-center justify-between border-b border-zinc-200 pb-4">
                <h1 className="text-2xl font-semibold text-zinc-900">Usuarios</h1>
                <button className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50" onClick={handleLogout} data-testid="btn-logout">
                    Cerrar Sesión
                </button>
            </header>
            {error && (
                <p className="mb-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" data-testid="error-message">
                    {error}
                </p>
            )}
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" data-testid="user-list">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow"
                        onClick={() => navigate(`/users/${user.id}`)}
                        data-testid={`user-item-${user.id}`}
                    >
                        <h2 className="mb-2 text-base font-semibold text-zinc-900">{user.name}</h2>
                        <p className="text-sm text-zinc-600">Email: {user.email}</p>
                        <p className="text-sm text-zinc-600">Ciudad: {user.address.city}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsersPage;
