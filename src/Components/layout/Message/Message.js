import  '../Message/indexMessage.css'
import { useState, useEffect } from 'react'

function Message({msg, type}){
    const [ visible, setVisible] = useState(false)
    useEffect(() =>{
        if(!msg && !type){
            setVisible(false)
            return
        }
        setVisible(true)
        const timer = setTimeout(()=>{
            setVisible(false)
        },3000)

        return () => clearTimeout(timer)
    },[msg])
    return(
     <>
        {visible && (
               <div className='mensagem-container'>
               <div className={type}>{msg}</div>
               </div>
        )}
     </>
    )
}
export default Message