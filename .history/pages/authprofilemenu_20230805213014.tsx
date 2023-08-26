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
      <ul className="flex">
          <li>
              <Link href="/auth/signin" ></Link>
          </li>
          <li>
              <Link href="/auth/signup"></Link>
          </li>
    </ul>
  )
}

export default AuthProfileMenu;