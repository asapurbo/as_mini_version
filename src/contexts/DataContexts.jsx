import { createContext, useState } from 'react';

export const IsContext = createContext();

// eslint-disable-next-line react/prop-types
const State = ({ children }) => {
    const [state, setState] = useState();
    return (
        <IsContext.Provider value={ { state, setState } }>
            {children}
        </IsContext.Provider>
    );
};

export default State;
