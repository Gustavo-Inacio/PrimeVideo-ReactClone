import React, { useState } from 'react'

export const MuteContext = React.createContext({
    isMuted : true,
    setIsMuted: () => {}
});

export const MuteCtxProvider = ({children}) => {
    const [isMuted, setIsMuted] = useState(true);

    const onMuteChange = () => {
        setIsMuted(prev => !prev);
    }

    return (
        <MuteContext.Provider 
            value={{
                isMuted: isMuted,
                onMuteToggle: onMuteChange,
                setIsMuted: setIsMuted
            }}
        >
            {children}
        </MuteContext.Provider>
    )
}