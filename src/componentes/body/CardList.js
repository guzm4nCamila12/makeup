import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import data from './data'
import './card.css'
import Paginacion from '../Paginacion/Paginacion'

function CardList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerpage = 10;

    useEffect(() => {
        
    })

    const indexOfLastPost = currentPage * postsPerpage;
    const indexOfFirstPost = indexOfLastPost - postsPerpage;
    const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // const cards = currentPost.map(items => {
    //     return(
    //         <Cards key = {items.id} items = {items}/>
    //     )
    // })
    return (
        <div>
            <div className='divCards'>
                {currentPost.map(item => (
                    <Cards key={item.id} items={item}/>
                ))}
            </div>
            <Paginacion 
            postsPerpage={postsPerpage}
            totalPosts={posts.length}
            paginate={paginate}
            />
        </div>
    )
}

export default CardList
