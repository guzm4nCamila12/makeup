import React from "react";

const Paginacion = ({postsPerpage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i=0; i<=Math.ceil (totalPosts / postsPerpage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav>
            <ul className="pagination justify-content-center">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            (number)
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Paginacion;