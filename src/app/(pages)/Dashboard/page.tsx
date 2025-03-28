'use client'
import { loggedData } from '@/app/utils/DataServices'
import React from 'react'

const page = () => {
  console.log(loggedData())
  return (
    <div>
        <h1>Dashboard Page</h1>
    </div>
  )
}

export default page