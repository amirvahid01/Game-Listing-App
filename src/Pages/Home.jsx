import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/Banner'
import TrendingGames from '../Components/TrendingGames'
import GamesByGenresId from '../Components/GamesByGenresId'

function Home() {

    const [gameList, setGameList] = useState()
    const [gameListByGenres, setGameListByGenres] = useState([])
    const [selectedGenreName, setSelectedGenreName] = useState('Action')

    useEffect(() => {
        getGamesList()
        getGameListByGenresId(4)
    }, [])


    const getGamesList = () => {
        GlobalApi.getGamesList.then((res) => {
            setGameList(res.data.results)
        })
    }

    const getGameListByGenresId = (id) => {
        GlobalApi.getGameListByGenreId(id).then((res) => {
            console.log(res.data.results)
            setGameListByGenres(res.data.results)
        })
    }

    return (
        <div className='grid grid-cols-4 px-6'>
            <div className='hidden md:block'>
                <GenreList genreId={(genreId) => getGameListByGenresId(genreId)}
                    selectedGenreName={(name) => setSelectedGenreName(name)}
                />
            </div>
            <div className='col-span-4 md:col-span-3'>
                {gameList?.length > 0 && gameListByGenres.length > 0 ?
                    < div >
                        <Banner gameBanner={gameList[0]} />
                        <TrendingGames GameList={gameList} />
                        <GamesByGenresId gameList={gameListByGenres}
                            selectedGenreName={selectedGenreName} />
                    </div>
                    : null}
            </div>
        </div >
    )
}

export default Home