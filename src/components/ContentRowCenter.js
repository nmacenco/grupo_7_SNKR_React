import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import SearchMovies from './SearchMovies';

function ContentRowCenter(){
    
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            {/*<!-- End content row last movie in Data Base -->*/}
            <SearchMovies/>
            {/*<!-- Genres in DB -->*/}

        </div>
    )
}

export default ContentRowCenter;