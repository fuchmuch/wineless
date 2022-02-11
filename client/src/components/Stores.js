import React, { useEffect } from "react";
import { connect } from "react-redux";
import { LoadStoreById } from "../store/actions/StoreAction";
import { useParams } from "react-router-dom";


const mapDispatchToProps = (dispath) => {
    return {
        fetchDetails: (store) => dispath(LoadStoreById(store))
    }
}
const mapStateToProps = ( store ) => {
    return { storeState: state.storeState }
}

const Details = (props) => {

    const { id } = useParams()
    const congress = id.substring(0, id.indexOf('-'))

    useEffect(() => {
        props.fetchDetails(store)
    }, [store])

    return (
        <div>
            { props.storeState.isLoading ? <p> loading </p> : <div> {props.storeState.store.map( (e) => (
                <div key={e.store_id}>
                    {e.title}
                    <a href={`${e.store_url}`} target={`_blank`} rel="noreferred"> <span className="span-details">more details</span> </a>
                </div>
            ))} </div>}
        </div>
    )
}





export default connect(mapStateToProps, mapDispatchToProps)(Details)