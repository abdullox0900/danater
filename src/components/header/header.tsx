'use client'

import SiteLogo from '@/assets/svg/logo.svg'
import Image from 'next/image'
import { ButtonA, ButtonX } from '../buttons/buttons'
import Container from '../container/container'
import styles from './header.module.scss'
import Link from 'next/link'

function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header_inner}>
                    <Image className={styles.header_logo} src={'https://donate.stream/images/logo-full.svg'} alt='logo' width={25} height={40} />

                    <div className='flex items-center gap-[10px]'>
                        <ButtonX>Danat</ButtonX>
                        <Link href="/auth">
                            <ButtonA>Kirish</ButtonA>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header