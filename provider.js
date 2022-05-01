import { useState } from 'react';
import Context from "./context"

const Provider = (props) => {
    const [gState, setGState] = useState({});
        return (
        <Context.Provider value={[gState, setGState]}>
            {props.children}
        </Context.Provider>
    );
};

export default  Provider;