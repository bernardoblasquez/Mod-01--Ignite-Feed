import { useState } from 'react'
import {Post} from './Post'

import styles from './app.module.css'
import './global.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

export function App() {
 
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
      
    </div>
    
  )
}
