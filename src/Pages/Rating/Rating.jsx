import { useState, useEffect } from 'react'

import starIcon from '../../images/icon-star.svg'
import styles from './Rating.module.css'
import RatingButtons from '../../component/RatingButton/RatingButton'
import Card from '../../component/Card/Card'
import { useNavigate } from 'react-router'

const Rating = (props) => {
    const ratings = ['1', '2', '3', '4', '5']
    const [active, setActive] = useState()
    const [rateNum, setRateNum] = useState('')
    const [ErrMessage, setErrMessage] = useState()
    const navigate = useNavigate()
    // useEffect(
    //     () => {
    //         if (rateNum === '') {
    //             setErrMessage(<p style={{ color: 'orange', fontSize: '1.4rem' }}>Please Rate us</p>)
    //         }
    //         else {
    //             setErrMessage('')
    //         }
    //     }, [])
    const handleClick = (e, rate) => {
        const value = e.target.value
        setActive(value)
        setRateNum(value)
        console.log(value)
        console.log(rate)
    }
    console.log(rateNum, 'RATE')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.savedRate(rateNum)
        rateNum ? navigate('thank-you') : setErrMessage(<p style={{ color: 'orange', fontSize: '1.4rem' }}>Please Rate us</p>)
    }

    return (
        <Card className={styles.rating}>
            <div><img src={starIcon} alt="star icon" /></div>
            <h2>How did we do?</h2>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            {rateNum ? null : ErrMessage}
            <form onSubmit={handleSubmit}>
                <div>
                    {ratings.map((rate, index) => {
                        return (
                            <RatingButtons
                                onClick={handleClick}
                                className={`${styles.rate} ${active == rate && styles.active}`}
                                key={rate + index}
                                type='button'
                                value={rate}
                                val={rate} />
                        )
                    })}
                </div>
                <button type='submit' className={styles.submit}>submit</button>
            </form>
        </Card>
    )
}

export default Rating