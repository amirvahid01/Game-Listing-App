import React, { useEffect } from 'react'

function TrendingGames({ GameList }) {

    useEffect(() => {
        // console.log(GameList)
    }, [])

    return (
        <div className='mt-5 hidden md:block'>
            <h2 className='text-[30px] dark:text-white font-bold'>
                Trending Games
            </h2>
            <div className='md:grid lg:grid-cols-4 md:grid-cols-3 gap-4 mt-5'>
                {GameList.map((item, index) => index < 4 && (
                    <div className='bg-slate-700 rounded-lg p-2 group 
                    hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>
                        <img src={item.background_image}
                            className='h-[270px] object-cover rounded-t-lg' />
                        <h2 className='text-[18px] dark:text-white font-bold text-white p-3'>
                            {item.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingGames