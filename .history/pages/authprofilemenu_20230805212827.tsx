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
      <ul>
          <li>
              <Link href="" ></Link>
          </li>
          <li></li>
    </ul>
  )
}

export default AuthProfileMenu;