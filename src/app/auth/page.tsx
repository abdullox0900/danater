import Container from '@/components/container/container'
import Footer from '@/components/footer/footer'

function Auth() {
    return (
        <>
            <Container>
                <section className='py-[100px]'>
                    <h1 className='text-white text-[45px] font-bold text-center mb-[20px]'>Xush kelibsiz!</h1>
                    <p className='text-center mb-[70px] text-white'>Akkauntga kirish uchun ma‘lumotlaringizni kiriting</p>


                    <form className="flex flex-col gap-[10px] max-w-[500px] mx-auto">
                        <div>
                            <label htmlFor="phone-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number:</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-5 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                    </svg>
                                </div>
                                <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-[22px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2 pl-[40px] outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                            </div>
                        </div>
                        <div className="flex items-center mt-4 mb-4">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            <label htmlFor="terms" className="text-gray-500 dark:text-gray-300 ms-2 text-sm">I accept the <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="#">Terms and Conditions</a></label>
                        </div>
                        <button type="submit" className="text-white w-full bg-[linear-gradient(to_right_top,#0ea5e9,#1cabed,#26b1f1,#2fb7f4,#38bdf8)] font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-white">Davom etish</button>

                    </form>
                </section>
            </Container>
        </>
    )
}

export default Auth