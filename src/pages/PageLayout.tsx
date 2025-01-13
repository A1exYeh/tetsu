import '../index.css';
import { Outlet } from 'react-router-dom';

export default function PageLayout() {
  return (
    <>
      <div className='flex h-full max-h-screen w-full max-w-screen-sm flex-col items-center justify-start bg-black'>
        {/* <header className='flex w-full justify-center bg-red-500'>
          HEADER
        </header> */}
        <main className='flex h-screen w-full flex-col items-center justify-center'>
          <Outlet />
        </main>
        {/* <footer className='flex w-full justify-center bg-red-500'>
          FOOTER
        </footer> */}
      </div>
    </>
  );
}
