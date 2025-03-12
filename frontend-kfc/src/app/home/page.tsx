// src/app/home/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Check if user is authenticated
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
            return;
        }

        try {
            // Simple decode of the JWT payload (this is not secure, just for display purposes)
            const payload = JSON.parse(atob(token.split('.')[1]));
            setUsername(`User #${payload.id}`);
        } catch (e) {
            console.error("Failed to decode token", e);
        }

        setLoading(false);
    }, [router]);

    const handleLogout = () => {
        // Clear the token from localStorage
        localStorage.removeItem('token');

        // Also clear the cookie
        document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

        // Redirect to login page
        router.push('/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-xl">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">Home</h1>
                    <div className="flex items-center">
                        <span className="mr-4 text-gray-600">Welcome, {username}</span>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="text-center">
                                <h2 className="text-2xl font-semibold mb-4 text-black">Welcome to the KFC Test Application</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}