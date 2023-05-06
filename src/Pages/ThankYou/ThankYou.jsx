import Card from "../../components/Card/Card"
import styles from './ThankYou.module.css'
import ThnakYouIcon from '../../images/illustration-thank-you.svg'

const ThankYou = (props) => {
    return (
        <Card className={styles.thankYou}>
            <img src={ThnakYouIcon} alt="thank you" />
            <p className={styles.selected}>You selected {props.rate} out of 5</p>
            <p className={styles.thankYou}>THANK YOU!</p>
            <footer>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</footer>
        </Card>
    )
}

export default ThankYou