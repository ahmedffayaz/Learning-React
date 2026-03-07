import React, {useState, useContext} from 'react'
import UserContext from '../../context/usserContext'

export default function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { user, setUser } = useContext(UserContext)
    const handleSubmit = (e) => {        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <div className="max-w-md mx-auto p-6 bg-gray-800 shadow-lg rounded-lg mt-10">
            <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleSubmit}
                    className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    )
} 