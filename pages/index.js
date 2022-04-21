import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import { useState, useEffect } from 'react'

import styles from '../styles/Home.module.scss'
import ExperiencesCard from '../components/experiencesCard'
import Footer from '../components/footer/footer'

export default function Home() {
    const [showWarning, setShowWarning] = useState(false)
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 744) {
                setShowWarning(true)
                return
            }
            setShowWarning(false)
        })

        if (window.innerWidth >= 744) {
            setShowWarning(true)
            return
        }
        setShowWarning(false)

        return () => {
            window.removeEventListener('resize', () => {
                if (window.innerWidth >= 744) {
                    setShowWarning(true)
                    return
                }
                setShowWarning(false)
            })
        }
    }, [])
    return (
        // <div className={styles.container}>
        <>
            <Head>
                <title>Airbnb Clone - Maveryck Maya</title>
                <meta
                    name="description"
                    content="Airbnb Clone developed for learning purposes only"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <>
                {showWarning && (
                    <div
                        style={{
                            width: '100%',
                            display: 'grid',
                            justifyItems: 'center',
                        }}
                    >
                        <h1 style={{ color: '#DC143C', marginBottom: 0 }}>
                            Please read
                        </h1>
                        <h2
                            style={{
                                padding: '2em',
                                textAlign: 'center',
                                marginTop: '0',
                            }}
                        >
                            This website provides a better UI / UX if your
                            browser
                            {`'`}s window has a width of 743px or less (you can
                            achieve this by enabling responsive mode on
                            DevTools). <br />
                            <br /> Currently working on the desktop view, sorry
                            for the inconvinience!
                        </h2>
                        <button
                            style={{
                                width: 'fit-content',
                                fontSize: '1.4rem',
                                background: 'black',
                                color: 'white',
                                border: 'none',
                                borderRadius: '7px',
                                padding: '1em 1.25em',
                                cursor: 'pointer',
                                marginInline: 'auto',
                                marginBottom: '1em',
                            }}
                            onClick={e => setShowWarning(false)}
                        >
                            Got it
                        </button>
                    </div>
                )}
                <div className={styles['search--container']}>
                    <button className={styles['search--button']}>
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            className={styles['search--button-logo']}
                        >
                            <g fill="none">
                                <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                            </g>
                        </svg>
                        <p className={styles['search--button-caption']}>
                            Where are you going?
                        </p>
                    </button>
                </div>
                <div className={styles['ukraine--container']}>
                    <div className={styles['ukraine--text']}>
                        <h1 className={styles['ukraine--text-title']}>
                            Help house <br />
                            100,000 refugees <br />
                            fleeing Ukraine
                        </h1>
                        <Link href="#">
                            <a className={styles['ukraine--text-link']}>
                                Learn more
                            </a>
                        </Link>
                    </div>
                </div>

                <div className={styles['cabin--container']}>
                    <div className={styles['cabin--card']}>
                        <h2 className={styles['cabin--card-title']}>
                            Let your curiosity do <br /> the booking
                        </h2>
                        <Link href="#">
                            <a className={styles['cabin--card-link']}>
                                <span
                                    className={styles['cabin--card-link_text']}
                                >
                                    I{`'`}m flexible
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
                {/* </div> */}

                <h2 className={styles['discover--title']}>
                    Discover Airbnb <br />
                    Experiences
                </h2>

                <div className={styles['experiences-cards--container']}>
                    <ExperiencesCard
                        title={'Things to do on your trip'}
                        linkText={'Experiences'}
                        imageUrl={'/images/cave-exploring-cropped.svg'}
                        imageAlt={'person exploring cave'}
                    />

                    <ExperiencesCard
                        title={'Things to do from home'}
                        linkText={'Online Experiences'}
                        imageUrl={'/images/woman-cooking-cropped.svg'}
                        imageAlt={'woman cooking'}
                    />
                </div>

                <div className={styles['gift-cards--container']}>
                    <h2 className={styles['gift-cards--title']}>
                        Shop Airbnb gift cards
                    </h2>
                    <Link href="#">
                        <a className={styles['gift-cards--link']}>Learn more</a>
                    </Link>
                    <div className={styles['gift-cards-image_container']}>
                        <Image
                            src="/images/gift-cards.svg"
                            alt="airbnb gift cards"
                            layout="responsive"
                            width={330}
                            height={243.38}
                        />
                    </div>
                </div>

                <div className={styles['hosting--container']}>
                    <h2 className={styles['hosting--title']}>
                        Questions <br /> about <br /> hosting?
                    </h2>
                    <Link href="#">
                        <a className={styles['hosting--link']}>
                            Ask a Superhost
                        </a>
                    </Link>
                </div>

                <Footer />
            </>
        </>
        // </div>
    )
}
