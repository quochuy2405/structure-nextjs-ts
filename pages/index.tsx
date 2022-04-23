import * as React from 'react'
import { Metadata } from '@/components'
import type { NextPage } from '@/types/next'
import Styles from '@/styles/pages/index.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Metadata title="Trang chủ - Learning Code" description="Trang chủ - Learning Code" />
      <div>
        <h1 className={Styles.heading}>Hihi 🐧</h1>
      </div>
    </>
  )
}

export default Home
