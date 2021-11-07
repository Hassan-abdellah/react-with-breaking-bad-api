import { getSuggestedQuery } from '@testing-library/dom';
import React, {useState} from 'react'

const Search = ({getQuery}) => {

    const [text, setText ] = useState('');

    const onChange = (q) => {
        setText(q);
        getQuery(q);
    }

    return (
        <section className="search">
            <form action="">
                <input type="text" name="" 
                className='form-control' 
                placeholder='Search Character...'
                 value={text}
                 onChange={e => onChange(e.target.value)}   
                 />
            </form>
        </section>
    )
}

export default Search;
