import Image from 'next/image'

const Questions = () => {
    return (
        <section className='questions'>
            <div className='questions__header'>
                <p>Questions?</p>
                <h1>We have the answers!</h1>
            </div>
            <div className="questions__carousel">
                <div className='carousel-inner'>
                    <div className='carousel-card'>
                        <h2>Having a creative block?</h2>
                    </div>
                    <div className='carousel-img'>
                        <Image width={400} height={280} layout="responsive" priority={true} src='/images/questions/paper-ball.png' alt="BeeCat Creative | Question 1" />
                    </div>
                </div>
                <div className='carousel-controls'>
                    <div className='control'>
                        <Image width={400} height={170} layout="responsive" priority={true} src='/images/questions/arrow-left.png' alt="BeeCat Creative | Question 1" />
                    </div>
                    <div className='control'>
                        <Image width={400} height={170} layout="responsive" priority={true} src='/images/questions/arrow-right.png' alt="BeeCat Creative | Question 1" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Questions