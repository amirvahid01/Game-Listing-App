import React from 'react'

function GamesByGenresId({ gameList, selectedGenreName }) {
    return (
        <div className='mt-10'>
            <h2 className='text-[30px] dark:text-white font-bold'>
                {selectedGenreName}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
                {gameList.map((item) => (
                    <div className='bg-slate-700 rounded-lg p-3 pb-12 
                    hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>
                        <img src={item.background_image}
                            className='h-[80%] w-full rounded-xl object-cover'
                        />
                        <h3 className='text-[18px] text-white font-bold'>
                            {item.name} <span className='text-green-700 bg-green-100
                        text-[10px] ml-2 p-1 rounded-sm font-medium'>
                                {item.metacritic}</span>
                        </h3>
                        <h3 className='text-gray-500 dark:text-gray-300'>
                            ⭐{item.rating}   💭{item.reviews_count}   🔥{item.suggestions_count}
                        </h3>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default GamesByGenresId