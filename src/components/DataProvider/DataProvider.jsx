import React, { createContext, useReducer } from "react"

// Create a context for the data layer
export const DataContext = createContext()

// Create a provider for the data layer
// This provider will wrap the app and provide the state and dispatch to all components
export const DataProvider = ({ children, reducer, initialState }) => {
    // Use the useReducer hook to create a reducer and an initial state
    // The reducer is a function that takes the current state and an action as arguments
    // The action is an object that contains information about what has happened in the app
    // The reducer returns a new state based on the current state and the action
    const [state, dispatch] = useReducer(reducer, initialState)

    // Return a provider that wraps the app and provides the state and dispatch to all components
    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}