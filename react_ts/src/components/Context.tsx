import React, { useContext } from 'react';
import { AppContext } from '../App';


function Context() {

 const details= useContext(AppContext)

  return (
    <>
        { details && (
            <div>
                <h4>Linguagem: { details.language}</h4>
                <h4>FrameWorks: { details.frameworks}</h4>
                <h4>Projects: { details.projects}</h4>
            </div>
        )}
    </>
  )
}

export default Context