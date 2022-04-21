import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/ExperiencesCard.module.scss'

export default function ExperiencesCard({
    title,
    linkText,
    imageUrl,
    imageAlt,
}) {
    return (
        <div className={styles['card']}>
            <h3 className={styles['card--title']}>{title}</h3>
            <Link href="#">
                <a className={styles['card--link']}>{linkText}</a>
            </Link>
            <div className={styles['card--image_container']}>
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    layout="responsive"
                    width={330}
                    height={495}
                />
            </div>
        </div>
    )
}
