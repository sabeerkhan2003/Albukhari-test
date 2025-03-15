import React, { useEffect } from 'react';
import Faculty from '../Components/Faculties/Faculty';

function Faculties() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
        
            <Faculty/>
        </>
    );
}

export default Faculties;
