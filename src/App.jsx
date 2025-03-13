/* eslint-disable no-unused-vars */
// import React from 'react'
import { useContext, useEffect } from 'react'
import { DataContext } from './components/DataProvider/DataProvider'
import Routing from './Routing'
import { Type } from './Utility/action.type'
import { auth } from './Utility/firebase'


const App = () => {
  const [{ user }, dispatch] = useContext(DataContext)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser
        })
      }
      else {
        dispatch({
          type: Type.SET_USER,
          user: null
        })
      }
    })
  }, [])

  return (
    <div>
      <Routing />
    </div>
  )
}

export default App