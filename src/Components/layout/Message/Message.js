import styles from '../Message/indexMessage.css'

function Message({type, msg}){
    return(
        <div className={`${styles} `}>{msg}</div>
    )
}
{/*https://www.youtube.com/watch?v=R3S8DEzEn6s&ab_channel=Rocketseat
    https://www.youtube.com/watch?v=aDKxJfJiM28&t=575s&ab_channel=MarioSouto-DevSoutinho
    https://www.youtube.com/watch?v=UihbmA0pTCE&t=210s&ab_channel=MatheusBattisti-HoradeCodar

*/}
export default Message