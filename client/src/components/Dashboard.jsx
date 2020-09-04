import React, { useState } from 'react';
import CharityList from './CharityList';
import axios from 'axios';

const SearchForm = () => {
    const [orgs, setOrgs] = useState([]);
    const [search, setSearch] = useState('');

    const handleInput = e => {
        setSearch(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        axios.get(`https://api.data.charitynavigator.org/v2/Organizations?app_id=f7141bd7&app_key=7aa7fbc4c09ef4c5dd4ed0207eb9f40b&zip=${search}`)
        .then(res => {
            setOrgs(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter a Zip Code'
                    value={search}
                    onChange={handleInput}
                />

                <button type='submit'>Search</button>
            </form>

            <CharityList charities={orgs} />
        </div>
    )
}

export default SearchForm;