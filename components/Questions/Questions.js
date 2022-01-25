import { useState } from 'react'
import Image from 'next/image'

const Questions = () => {
    const [ count, setCount ] = useState(0)

    const questionArr = [
        {
            question: 'Are you suffering from a migraine-inducing creative block?',
            img: '/images/questions/brain.png',
            alt: 'BeeCat Creative | Question 1'

        },
        {
            question: 'Do you want a partner to help create an epic digital strategy?',
            img: '/images/questions/clock.png',
            alt: 'BeeCat Creative | Question 2'

        },
        {
            question: 'Are you in desperate need of consistent brand guidlines to reach your full potential?',
            img: '/images/questions/headphones.png',
            alt: 'BeeCat Creative | Question 3'

        },
    ]

    function forward() {
        if (count < questionArr.length - 1) {
            setCount(count + 1)
        } else {
            setCount(0)
        }
    }

    function back() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <section className='questions'>
            <div className='questions__header'>
                <p>Questions?</p>
                <h1>We have the answers.</h1>
            </div>
            <div className="questions__carousel">
                <div className='carousel-inner'>
                    {
                        <>
                        <div key={questionArr[count].alt} className='carousel-card'>
                            <h2>{questionArr[count].question}</h2>
                        </div>
                        <div className='carousel-img'>
                            <Image width={300} height={280} layout="responsive" priority={true} src={questionArr[count].img} alt={questionArr[count].alt} />
                        </div>
                        </>
                    }
                </div>
                <div className='carousel-controls'>
                    {
                        count === 0 ? 
                            <div className='control' onClick={back}>
                                <Image width={300} height={170} layout="responsive" priority={true} src='/images/questions/no-back-arrow.png' alt="BeeCat Creative | Arrow Left" />
                            </div>
                            :
                            <div className='control' onClick={back}>
                                <Image width={400} height={170} layout="responsive" priority={true} src='/images/questions/arrow-left.png' alt="BeeCat Creative | Arrow Left" />
                            </div>
                    }
                    <div className='control' onClick={forward}>
                        <Image width={400} height={170} layout="responsive" priority={true} src='/images/questions/arrow-right.png' alt="BeeCat Creative | Arrow Right" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Questions