import '../../index.css'
import './dashboard.css'

export default function Dashboard() {

    return (
        <>
        <div className='h-full w-full flex flex-col items-center justify-start gap-4'>
            <h1 className='text-white text-2xl font-bold w-[90%] flex justify-start my-4'>
                username
            </h1>
            <div className='bg-zinc-900 w-[90%] rounded-xl p-4 flex  items-center justify-between text-white h-1/4'>
                <div className='w-2/5 h-full rounded-xl flex flex-col items-center gap-2 justify-center'>
                    <div className='text-2xl streakIcon w-16 h-16 flex items-center justify-center drop-shadow-lg font-bold'>
                        7
                    </div>
                    <p className='font-bold'>
                        STREAK
                    </p>
                </div>
                <div className='w-3/5 h-full rounded-xl flex flex-col items-center justify-center font-bold gap-4'>
                    Wed 17, August
                    <button className='p-2 bg-[#2DDD6A] rounded-lg text-sm'>
                        Check-In
                    </button>
                </div>
            </div>

            <div className='w-[90%] h-full bg-zinc-900 flex flex-col items-center justify-center rounded-xl'>
                test
            </div>
        
        </div>
        </>
    )
}