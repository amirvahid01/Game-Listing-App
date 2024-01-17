import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenreList({ genreId, selectedGenreName }) {

    const [genreList, setGenreList] = useState([])
    const [activeIndex, setActiveIndex] = useState()

    useEffect(() => {
        getGenreList()
    }, [])

    const getGenreList = () => {
        GlobalApi.getGenreList.then((res) => {
            setGenreList(res.data.results)
        })
    }

    return (
        <div>
            <h2 className='text-[30px] font-bold dark:text-white'>
                Genre
            </h2>
            {genreList.map((item, index) => (
                <div
                    onClick={() => {
                        setActiveIndex(index); genreId(item.id)
                        selectedGenreName(item.name)
                    }}
                    className={`flex p-2 gap-2 items-center mb-2 mr-6 cursor-pointer
              hover:bg-gray-300 rounded-lg dark:hover:bg-gray-600 group
              ${activeIndex == index ? 'bg-gray-300 dark:bg-gray-600' : null}`}>
                    <img src={item.image_background}
                        className={`w-[40px] h-[40px] object-cover rounded-lg
                        group-hover:scale-110 transition-all ease-in-out duration-300
                        ${activeIndex == index ? 'scale-110' : null}`}
                    />
                    <h3 className={`text-[18px] dark:text-white
                    group-hover:font-bold transition-all ease-in-out duration-300
                    ${activeIndex == index ? 'font-bold' : null}`}>
                        {item.name}
                    </h3>
                </div>
            ))
            }
        </div >
    )
}

export default GenreList