import { useState } from 'react'
import { createContext } from 'react'

export const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
    const [expanded, setExpanded] = useState(true)

    return (
        <SidebarContext.Provider value={{ expanded, setExpanded }}>
            {children}
        </SidebarContext.Provider>
    )
}
