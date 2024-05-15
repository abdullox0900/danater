import Image from 'next/image'
import HeroImg from '@/assets/img/history.png'
import Container from '../container/container'
import { ButtonA } from '../buttons/buttons'

function Hero() {
    return (
        <Container>
            <section className='flex justify-between items-center h-screen'>
                <div>
                    <h1 className='text-[44px] font-semibold w-[500px] leading-[55px] mb-[10px] text-white'>Butun dunyodan donatlar bir zumda!</h1>
                    <p className='text-[22px] mb-[20px] text-white'>
                        {`Tirikchilik ijodkorlarni qo'llab-quvvatlashga yordam beradi`}
                    </p>
                    <ButtonA>Muallif bolish</ButtonA>
                </div>
                <Image className='w-[500px] h-[570px] object-cover' src='https://donate.stream/images/start/kv2.png' alt='img' width={300} height={300} />
            </section>
        </Container>
    )
}

export default Hero