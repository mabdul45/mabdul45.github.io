// import styles from './RatingButton.module.css'
const RatingButtons = (props) => {
    return (
        <button className={props.className} value={props.val} type={props.type} onClick={props.onClick}> {props.val}</ button>
    )
}

export default RatingButtons