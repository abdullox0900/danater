import Container from '../container/container'
import { HiOutlineMail } from "react-icons/hi"
import { FaTelegram } from "react-icons/fa"
import { TiMessageTyping } from "react-icons/ti"


function Contact() {
    return (
        <Container>
            <ul className='grid grid-cols-3 gap-4 my-[50px]'>
                <li className='w-full h-[200px] pt-[35px] pb-[20px] pl-[35px] rounded-[20px] bg-[rgba(116,_109,_92,_.5)] hover:bg-[linear-gradient(to_right_top,#0ea5e9,#1cabed,#26b1f1,#2fb7f4,#38bdf8)]'>
                    <div className='flex items-center gap-[20px] mb-[40px]'>
                        <HiOutlineMail className='text-[55px] text-white' />
                        <span className='text-white text-[24px] font-semibold'>Напишите нам</span>
                    </div>
                    <p className='text-white '>a.abdullokh@gmail.com</p>
                </li>
                <li className='w-full h-[200px] pt-[35px] pb-[20px] pl-[35px] rounded-[20px] bg-[rgba(116,_109,_92,_.5)] hover:bg-[linear-gradient(to_right_top,#0ea5e9,#1cabed,#26b1f1,#2fb7f4,#38bdf8)]'>
                    <div className='flex items-center gap-[20px] mb-[40px]'>
                        <FaTelegram className='text-[55px] text-white' />
                        <span className='text-white text-[24px] font-semibold'>Вступайте в группу</span>
                    </div>
                    <p className='text-white '>Следите за новостями donir</p>
                </li>
                <li className='w-full h-[200px] pt-[35px] pb-[20px] pl-[35px] rounded-[20px] bg-[rgba(116,_109,_92,_.5)] hover:bg-[linear-gradient(to_right_top,#0ea5e9,#1cabed,#26b1f1,#2fb7f4,#38bdf8)]'>
                    <div className='flex items-center gap-[20px] mb-[40px]'>
                        <TiMessageTyping className='text-[55px] text-white' />
                        <span className='text-white text-[24px] font-semibold'>Предложение</span>
                    </div>
                    <p className='text-white '>Hi</p>
                </li>
            </ul>
        </Container>
    )
}

export default Contact