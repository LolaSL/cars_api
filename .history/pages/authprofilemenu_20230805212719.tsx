"use client"

import React from 'react';
import Link from 'next/link'

const AuthProfileMenu = () => {
    const isAuth = false;
    if (isAuth) {
        return (
            <p>
                <button>logout</button>
            </p>
        )
    }
  return (
    <div>authprofilemenu</div>
  )
}

export default AuthProfileMenu;