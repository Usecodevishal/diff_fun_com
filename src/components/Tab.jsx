import React, { useState } from 'react'

function ChangeTab() {
    const [value, setValue] = useState([1,2,3]);
    const [print, setPrint] = useState(1);

    return (
        <div>
            <ul>
            {value.map((item,ind) => <li key={ind}>tab <button onClick={() => setPrint(item)}>{item}</button></li> )}
            </ul>

            <h3>Here click the tabs above and print it here: tab{print} </h3>
            
        </div>
    )
}

export default ChangeTab
