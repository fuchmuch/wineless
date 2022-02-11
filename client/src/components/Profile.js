import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { UserToDelete, LogOut, UserToUpdate, UpdateCurrentUser } from '../store/actions/UserAction'


const mapStateToProps = ( state ) => {
    return {
        userState: state.userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => dispatch(UserToDelete(id)),
        loggedOut: () => dispatch(LogOut()),
        updateState: (formValue) => dispatch(UpdateCurrentUser(formValue)),
        updateUser: (id, form) => dispatch(UserToUpdate(id, form))
    }
}

const Profile = (props) => {

    const history = useHistory()
    const [render, updateRender] = useState(0)
    const [edit, updateEdit] = useState(0)

    useEffect(() =>{
        history.push(`/profile/${props.userState.user.id}`)
    }, [])

    const handleChange = (e) => {
        props.updateState({[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.updateUser(props.userState.user.id, props.userState.user)
        // history.push('/')
        updateEdit(0)
    }

    const handleDelete = () => {
        props.delete(props.userState.user.id)
        props.loggedOut()
        history.push('/')
        updateRender(0)
    }

    const handleLogout = () => {
        props.loggedOut()
        history.push('/')
    }


    return (
        <div>
            <div>
                {edit === 0 ? <div>
                    <div className='prof-e'>
                        <b>Welcome! {props.userState.user.name}</b>
                        <button onClick={() => updateEdit(1)}>Edit Profile</button>
                    </div>
                    <div className='prof-e'>
                        Email: {props.userState.user.email}
                    </div>
                    <div className='prof-e'>
                        Location: {props.userState.user.location}
                    </div>
                    <div>
                        <h4>Saved Bills:</h4>
                            {props.userState.user.Bills.map((e) => (
                                <li key={e.id} className="bills">
                                    {e.title}
                                    <a href={`${e.url}`} target='_blank' rel="noreferrer"> ...Details</a>
                                </li>
                            ))}
                    </div>
                </div> : <button onClick={() => updateEdit(0)}>Cancel Edit</button> }

                {edit === 1 ? <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <labe>Name</labe>
                            <br/><input
                                type='text'
                                value={props.userState.user.name}
                                name={`name`}
                                onChange={handleChange}
                                placeholder={`${props.userState.user.name}`}
                                className='name-edit'
                            />
                        </div>
                        <div>
                            <labe>Email</labe>
                            <br/>
                            <input
                                type='text'
                                value={props.userState.user.email}
                                name={`email`}
                                onChange={handleChange}
                                placeholder={`${props.userState.user.email}`}
                                className='email-edit'
                            />
                        </div>
                        <div>
                            <labe>State</labe>
                            <br/>
                            <input
                                type='text'
                                value={props.userState.user.location}
                                name={`location`}
                                onChange={handleChange}
                                placeholder={`${props.userState.user.location}`}
                                className='location-edit'
                            />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>: null}
            </div>
            {/* {console.log(props.userState.user)} */}
    
            <div>
                <div className='prof-e'>
                    {render === 0 ? 'Delete this account': 'Are you sure?'} 
                    {render === 0 ? <button onClick={() => updateRender(1)}>Delete</button> : <button onClick={() => updateRender(0)}>Cancel</button>}
                    {render === 1 ? <button onClick={handleDelete}> Confirm </button> : null}
                </div>
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)