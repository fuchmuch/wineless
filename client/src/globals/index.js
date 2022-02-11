import Client from '../services/index'

process.env.NODE_ENV === 'production'
  ? `${window.location.origin}/api`
  : `${Client}`




const SearchResults= (props) => {

    return (
        <div className='searchdiv'>
          <input
            type="text"
            name="Search"
            value={props.value}
            placeholder="Search Restaurants"
            onChange={props.onChange}
          ></input>
          <button className='searchbtn' type="submit">Search</button>
        </div>
      )
    
}
