import React, { useState } from 'react'
import { createContext } from 'react'


export const datas = createContext();
const Details = (props) => {

    const [Data, setData] = useState([
        {
            id: 0,
            name : "meghana",
            age : "23",
            course : "EA" ,
            batch : "August"
        },
        {
            id: 1,
            name : "Pinky",
            age : "22",
            course : "EA" ,
            batch : "May"
        },
        {
            id: 2,
            name : "Harshi",
            age : "21",
            course : "EA" ,
            batch : "August"
        },
        {
            id: 3,
            name : "Bhoomika",
            age : "24",
            course : "EA" ,
            batch : "May"
        },
        {
            id: 4,
            name : "Chandini",
            age : "23",
            course : "EA" ,
            batch : "May"
        }
    ])

  return (
    <div>
        <datas.Provider value={[Data,setData]}>
            {
                props.children
            }
        </datas.Provider>
        
    </div>
  )
}

export default Details;
