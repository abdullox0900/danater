import { Children } from '@/types/children'

const Container = (props: Children) => {
    return (
        <div className='w-[1200px] mx-auto px-[20px]'>{props.children}</div>
    )
}

export default Container