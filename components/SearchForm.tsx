import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react' //for icons

const SearchForm = ({query}:{query?: string}) => {


  return (
    <Form action='/' scroll={false} className='search-form'>
        <input
        defaultValue=""
        name='query'
        placeholder='Search for Startups'
        className='search-input'
        />

        <div className='gap-2 flex'>
        {query && <SearchFormReset/>}

        <button type='submit' className='search-btn text-white'><Search className='size-5'/></button>
        </div>

      
    </Form>
  )
}

export default SearchForm