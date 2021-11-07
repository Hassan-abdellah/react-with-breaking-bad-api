import React from 'react'

const Pagination = ({ itemsPerPage , totalItems , paginate}) => {

    const pageNumbers = [];
    
    for(let i=1 ; i<=Math.ceil(totalItems/ itemsPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav className='pagination-navigation'>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item" onClick={() => paginate(number) }>
                        <a  href="!#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;
