import Link from 'next/link'
import styles from '../../styles/Layout/Footer.module.scss'
import PersonalLink from './personalLink'
import Icon from './icon'
import {
    personalLinkData,
    techsContainerOneIcons,
    techsContainerTwoIcons,
} from './footerData'

export default function Footer() {
    const PersonalLinks = personalLinkData.map((item, idx) => {
        const { id, url, imageSrc, imageAlt, text } = item
        return (
            <PersonalLink
                key={id}
                url={url}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                text={text}
            />
        )
    })

    const IconsContainerOne = techsContainerOneIcons.map((item, idx) => {
        const { id, imageSrc, imageAlt, widthAndHeight } = item
        return (
            <Icon
                key={id}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                widthAndHeight={widthAndHeight}
            />
        )
    })

    const IconsContainerTwo = techsContainerTwoIcons.map((item, idx) => {
        const { id, imageSrc, imageAlt, widthAndHeight } = item
        return (
            <Icon
                key={id}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                widthAndHeight={widthAndHeight}
            />
        )
    })

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.col1} id="iJustWantToFormatThis">
                    {PersonalLinks}
                </div>
                <div className={styles.col2}>
                    <h4 className={styles.pageInfoIntro}>
                        Airbnb Clone developed with the technologies:
                    </h4>
                    <div className={styles.techsContainerOne}>
                        {IconsContainerOne}
                    </div>
                    <div className={styles.techsContainerTwo}>
                        {IconsContainerTwo}
                    </div>
                </div>
                <div className={styles.col3}>
                    <h4 className={styles.attributionsTitle}>Images from:</h4>
                    <Link href="https://unsplash.com/">
                        <a className={styles.attributionsLink} target="_blank">
                            Unsplash
                        </a>
                    </Link>
                    <h4 className={styles.attributionsTitle}>Icons from:</h4>
                    <Link href="https://icons8.com">
                        <a className={styles.attributionsLink} target="_blank">
                            Icons8
                        </a>
                    </Link>
                    <small>
                        This is an airbnb clone developed for learning purposes
                        only. I will never claim any ownership of the website
                        {`'`}s UI nor will I make any profit from it. <br />
                        <br /> Developed by Maveryck Maya, 2022.
                    </small>
                </div>
            </div>
        </footer>
    )
}
