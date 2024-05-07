import Image from 'next/image'
import HeroImg from '@/assets/img/history.png'
import Container from '../container/container'
import { ButtonA } from '../buttons/buttons'

function Hero() {
    return (
        <Container>
            <section className='flex items-center justify-between py-[50px]'>
                <div>
                    <h1 className='text-[44px] font-semibold text-green-800 w-[500px] leading-[55px] mb-[10px]'>Butun dunyodan donatlar bir zumda!</h1>
                    <p className='text-[22px] mb-[20px]'>
                        {`Tirikchilik ijodkorlarni qo'llab-quvvatlashga yordam beradi`}
                    </p>
                    <ButtonA>Muallif bolish</ButtonA>
                </div>
                <Image src={HeroImg} alt='img' width={600} height={600} />
            </section>
        </Container>
    )
}

export default Hero