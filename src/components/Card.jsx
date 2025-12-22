import QrCodeImage from '../assets/image-qr-code.png'
import styles from './Card.module.css'

function Card() {
    return (
        <div className={styles.card}>
            <img className={styles.qrCodeimage} src={QrCodeImage} alt="A image of a QR code"/>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Improve my front-end skills by building projects</h1>
                    <p className={styles.paragraph}>Scan the QR code to visit FrontEnd Mentor and take your coding skills to the next level.</p>
                </div>
        </div>   
    )
}
export default Card;