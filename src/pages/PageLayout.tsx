import '../index.css';
import { Outlet } from 'react-router-dom';

export default function PageLayout () {
    return (
        <>
        
        <div className=" w-full max-w-screen-sm min-h-screen h-full flex flex-col justify-start items-center">
            <header className='bg-red-500 flex justify-center w-full'>HEADER</header>
            <main className='w-full'>
                <Outlet />
            </main>
            <footer>FOOTER</footer>
        </div>
        
        </>
    )
}