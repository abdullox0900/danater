import { ReactElement } from 'react'
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa"

interface FooterNavType {
    name?: string
    path?: string
}[]

interface FooterSocialMedia {
    icon: ReactElement
    path: string
}[]

export const footerNav = [
    {
        name: 'About',
        path: ''
    },
]

export const footerSocialNav = [
    {
        icon: <FaInstagram />,
        path: ''
    },
    {
        icon: <FaTelegram />,
        path: ''
    },
    {
        icon: <FaLinkedin />,
        path: ''
    },
]