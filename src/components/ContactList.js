import React from 'react';

const ContactList = (props) =>{
console.log(props);

    const rendercontactList= props.contacts.map((contact)=>{
        return (
            <div className='item'>
                <div className='content'>
                    <div className="header">{contact.name}</div>
                    <div>{contact.phone}</div>
                    {/*<div>{contact.email}</div>*/}
                </div>
                <i className='trash alternate outline icon'></i>
            </div>
        )
    })
    return(
        <div className='ui celled list'>
            {rendercontactList}
        </div>

    );
};

export default ContactList;