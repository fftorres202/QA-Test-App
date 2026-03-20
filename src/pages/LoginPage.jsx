import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email.includes('@')) {
            setError('Por favor ingresa un email válido');
            return;
        }

        if (password.length > 0) {
            localStorage.setItem('auth', email);
            navigate('/users');
        } else {
            setError('La contraseña es obligatoria');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center px-4" data-testid="login-page">
            <div className="w-full max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h1 className="mb-5 text-xl font-semibold text-zinc-900">Iniciar Sesion</h1>
                <form onSubmit={handleSubmit} className="space-y-4" data-testid="login-form">
                    <div className="space-y-1.5">
                        <label htmlFor="email" className="text-sm text-zinc-600">Email</label>
                        <input
                            id="email"
                            type="text"
                            placeholder="correo@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
                            data-testid="input-email"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label htmlFor="password" className="text-sm text-zinc-600">Contrasena</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Contrasena"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
                            data-testid="input-password"
                        />
                    </div>
                    {error && (
                        <p className="text-sm text-red-600" data-testid="login-error">
                            {error}
                        </p>
                    )}
                    <button type="submit" className="w-full rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700" data-testid="btn-login">
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
