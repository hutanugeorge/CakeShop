import { useState } from 'react'


export default () => {

   const [ active, setActive ] = useState(false)

   return <>
      <div className="box" onClick={() => setActive(prev => !prev)}>
         <div className={`btn ${active ? 'active' : 'not-active'}`}>
            <span>

            </span>
            <span>

            </span>
            <span>

            </span>
         </div>
      </div>
   </>
}