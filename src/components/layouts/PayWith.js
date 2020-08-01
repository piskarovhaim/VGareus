import React from 'react'

const PayWith = props => {
    return (
    <div className="col-md-4">
        <div className="card text-center text-secondary mb-resp">
            <div className="card-body">
                <h3>{props.title}</h3>
                <h1 className="h1"><i className={props.icon}></i></h1>
            </div>
        </div>
    </div>
                    )
}
export default PayWith;