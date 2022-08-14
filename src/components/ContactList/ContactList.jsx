import React from 'react'

const ContactList = ({ visible, deletes }) => {
    return (
        <div>
            {
                visible.map((el) => <div key={el.id}>
                    <li>{el.name}: {el.number}</li>
                    <button onClick={deletes} value={el.id}>Delete</button>
                </div>)
            }
        </div>
    )
}

export default ContactList