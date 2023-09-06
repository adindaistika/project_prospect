import '@/styles/globals.css'
import '@/styles/globals.scss'
import { useRouter } from 'next/dist/client/router';

export default function App({ Component, pageProps }) {
    const router = useRouter()

    return (
        <div className='min-h-screen'>
            {router.pathname === '/login' ?
                <div className=''>
                    <div className='p-[20px] pt-[100px]'><Component {...pageProps} /></div>
                </div>
                :
                <div className='ml-[200px]'>
                    <div className='p-[20px] pt-[100px]'><Component {...pageProps} /></div>
                </div>
            }
        </div>
    )

}
