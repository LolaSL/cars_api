"use client"

import React from 'react';
import Link from 'next/link'

const AuthProfileMenu = () => {
    const isAuth = false;
    if (isAuth) {
        return (
            <p>
                <button>Logout</button>
            </p>
        );
    }
  return (
      <ul className="flex items-center space-x-6">
          <li>
              <Link href="/auth/signin"className="bg-blue-500 text-white rounded p-3 inline-block shadow-sm" ></Link>
          </li>
          <li>
              <Link href="/auth/signup" className="bg-blue-500 text-white rounded p-3 inline-block shadow-sm"></Link>
          </li>
    </ul>
  )
}

export default AuthProfileMenu;