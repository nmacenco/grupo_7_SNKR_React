import React from 'react';
import LastProductInDb from './LastProductInDb';
import SearchProducts from './SearchProducts';

function ContentRowCenter(){
    
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last movie in Data Base -->*/}
            <SearchProducts/>
            {/*<!-- Genres in DB -->*/}

        </div>
    )
}

export default ContentRowCenter;