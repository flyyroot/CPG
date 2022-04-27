import React from 'react'
import {useNavigate, useParams} from "react-router-dom"
function Partner(){
    let navigate = useNavigate()
    let {username} = useParams()
    return (
        <main>
            THIS IS PROFILE PAGE FOR {username} 
                <h2>Ini class Partner  <button onClick={()=>{navigate("/")}}>
                    Pergi ke home
                </button></h2>
               
        </main>
    )
}
export default Partner