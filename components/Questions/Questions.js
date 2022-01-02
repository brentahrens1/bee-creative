import { useState } from 'react'
import Image from 'next/image'

const Questions = () => {
    const [ count, setCount ] = useState(0)

    const questionArr = [
        {
            question: 'Having a creative block?',
            img: '/images/questions/paper-ball.png',
            alt: 'BeeCat Creative | Question 1'

        },
        {
            question: 'Don’t know who or what an algorithm is?',
            img: '/images/questions/shrug.png',
            alt: 'BeeCat Creative | Question 2'

        },
        {
            question: 'need a second set of eyes on your TIK TOK choreography?',
            img: '/images/questions/granny.png',
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
                <h1>We have the answers!</h1>
            </div>
            <div className="questions__carousel">
                <div className='carousel-inner'>
                    {
                        <>
                        <div key={questionArr[count].alt} className='carousel-card'>
                            <h2>{questionArr[count].question}</h2>
                        </div>
                        <div className='carousel-img'>
                            <Image width={400} height={280} layout="responsive" priority={true} src={questionArr[count].img} alt={questionArr[count].alt} />
                        </div>
                        </>
                    }
                </div>
                <div className='carousel-controls'>
                    <div className='control' onClick={back}>
                        <Image width={400} height={170} layout="responsive" priority={true} src='/images/questions/arrow-left.png' alt="BeeCat Creative | Arrow Left" />
                    </div>
                    <div className='control' onClick={forward}>
                        <Image width={400} height={170} layout="responsive" priority={true} src='/images/questions/arrow-right.png' alt="BeeCat Creative | Arrow Right" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Questions