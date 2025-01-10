import '../index.css';
import { Outlet } from 'react-router-dom';

export default function PageLayout () {
    return (
        <>
        
        <div className=" w-full max-w-screen-sm max-h-screen h-full flex flex-col justify-start items-center bg-black">
            <header className='bg-red-500 flex justify-center w-full'>HEADER</header>
            <main className='w-full h-screen flex flex-col items-center justify-center'>
                <Outlet />
            </main>
            <footer className='bg-red-500 flex justify-center w-full'>FOOTER</footer>
        </div>
        
        </>
    )
}