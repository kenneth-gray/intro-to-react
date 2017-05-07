import React from 'react'

// import Version from './versions/Version1'
// <Version />

// import Colours from './styling/Colours'
// <Colours />

// import Counter from './counters/Counter1'
// <Counter />

// import UserInfo from './user-info/UserInfo'
// <UserInfo name='Kenny' email='kgray@example.com' />

import Colours from './state-management/Colours'

import styles from './App.scss'

const App = () => (
  <div className={styles.app}>
    {/* <h1>Introduction to React</h1> */}
    <Colours />
  </div>
)

export default App
