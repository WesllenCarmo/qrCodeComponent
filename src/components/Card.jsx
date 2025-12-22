import styles from './Card.module.css'
function Card({ title, paragraph, img }) {
    return (
        <div className={styles.card}>
            <img className={styles.qrCodeimage} src={img} alt="A image of a QR code"/>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.paragraph}>{paragraph}</p>
                </div>
        </div>   
    )
}
export default Card;