import '@/styles/globals.css'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {

    return (
        <div className='min-h-screen'>
            <div className='ml-[200px]'>
                <div className='p-[20px] pt-[100px]'><Component {...pageProps} /></div>
            </div>
        </div>
    )

}
