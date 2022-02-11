export const GET_LOCATIONS = 'GET_LOCATIONS'
export const GET_STORES = 'GET_STORE'
export const GET_STORE_BY_ID = 'GET_STORE_BY_ID'
export const IS_LOADING = 'IS_LOADING'
export const IS_LOGGEDIN = 'IS_LOGGEDIN'
export const GET_USER = 'GET_USER'
export const NEW_USER = 'NEW_USER'
export const DELETE_USER = 'DELETE_USER'
export const UPDATE_USER = 'UPDATE_USER'


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