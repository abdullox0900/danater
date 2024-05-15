import { footerNav, footerSocialNav } from '@/lib/footer_content'
import Container from '../container/container'

function Footer() {

    return (
        <footer className=' bottom-0 z-10 left-[0px] pt-[200px] pb-[80px] text-white'>
            <Container>
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-center text-[32px]'>Donir</div>
                    <ul className='flex justify-center items-center gap-[25px]'>
                        {
                            footerNav.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.path}>{item.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className='flex justify-center items-center gap-[20px]'>
                        {
                            footerSocialNav.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.path}>
                                            {item.icon}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <span className='text-center'>© 2023 Donir - Donat yigish va ijodni qo’llab-quvvatlash xizmati.</span>
                </div>
            </Container>
        </footer>
    )
}

export default Footer