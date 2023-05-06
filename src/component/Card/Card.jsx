import styles from './Card.module.css'
const Card = (props) => {
    return (
        <main className={`${styles.card} ${props.className}`}>{props.children}</main>)
}

export default Card