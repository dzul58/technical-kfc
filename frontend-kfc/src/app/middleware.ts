// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Check for token in localStorage (client-side storage)
    // For server-side middleware, we need to check cookies instead
    const token = request.cookies.get('token')?.value;

    // If the user is trying to access a protected route without authentication
    if (request.nextUrl.pathname.startsWith('/home') && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // If the user is already authenticated and tries to access login/register,
    // redirect them to the home page
    if ((request.nextUrl.pathname === '/login' ||
        request.nextUrl.pathname === '/register' ||
        request.nextUrl.pathname === '/') && token) {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    return NextResponse.next();
}

// Define which routes this middleware should run on
export const config = {
    matcher: ['/home/:path*', '/login', '/register', '/'],
};