import React, { useEffect, useState } from 'react'
import SimpleMovieList from '../SimpleMovieList/SimpleMovieList'

/* 
    This componet has the hability to change the movie Lits, so it can be edited.
*/

function EditMovieList({listData, setListData, ...props}) {
    const [toggleEdit, setToggleEdit] = useState(false);

    const onEditHandler = () => {
        setToggleEdit(prev => !prev)
    }
    const onExcludeMovie = (id) => {
        
        setListData(prev => {
            let index = NaN;
            for(let i = 0; i < prev.list.length && isNaN(index); i++){
                if(prev.list[i].id == id){
                    index = i;
                }
            }
            
            if(!isNaN(index))
                prev.list.splice(index, 1);

            return {...prev}
        });

    }

    return (
        <SimpleMovieList listData={listData} {...props} edit={{
            onEdit: onEditHandler,
            onExclude: onExcludeMovie,
            value: toggleEdit
        }}/>
    )
}

export default EditMovieList