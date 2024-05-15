'use client'

import ZapIcon from '@/assets/svg/zapIcon.gif'
import { Children } from '@/types/children'
import Image from 'next/image'
import styles from './buttons.module.scss'


export function ButtonA(props: Children) {
    return (
        <button className={styles.btn}>
            <Image src={ZapIcon} alt="icon" width={20} height={20} />
            {props.children}
        </button>
    )
}

export function ButtonX(props: Children) {
    return (
        <button className='flex items-center gap-[4px] py-[10px] px-[24px] text-black rounded-[12px] transition ease-in duration-300 bg-white hover:bg-gray-300'>
            <Image src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4b8/512.gif" alt="💸" width={20} height={20} />
            {props.children}
        </button>
    )
}
