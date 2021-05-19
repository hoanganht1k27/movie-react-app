const useGenre = (selectedGenres) => {
    if(selectedGenres.length < 1) {
        return "";
    }
    const GenresIds = selectedGenres.map((genre) => genre.id)
    return GenresIds.reduce((acc, curr) => {
        return acc + ',' + curr
    })
}

export default useGenre