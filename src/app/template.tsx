'use client'

import { Children } from '@/types/children'
import { motion } from "framer-motion"

function Template(props: Children) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.75 }}>
            {props.children}
        </motion.div>
    )
}

export default Template