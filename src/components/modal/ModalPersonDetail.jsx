import React from 'react';

export const ModalPersonDetail = (props) => {
   const person = props.info;
   return(
      <div className="modal">
         <button className="close-modal" onClick={props.close}>X</button>
         <section className="modal__header">
            <div className="modal__body-content">
               <h1>{`${person.first_name} ${person.last_name}`}</h1>
               <p className="modal__job--title">({person.job_title})</p>
               <h3>{person.company}</h3>
               <span className="modal__email">{person.email}</span>
            </div>
            <div className="modal__image">
               {/* <img src={person.profile_image} alt={`Image of ${person.name}`}/> */}
            </div>
         </section>
         <div className="modal__residency-wrapper">
            <p>{person.residency.address}</p>
            <p>{person.residency.state}</p>
            <p>{person.residency.zipcode}</p>
         </div>
         <section className="modal__cost-wrapper">
            <h2>Invoice</h2>
            <p className="modal__cost-date">Date: {person.pay.date}</p>
            <p>Hours: <span>{person.pay.hours}</span></p>
            <p>Rate: <span>{person.pay.rate}</span></p>
            <div className="modal__cost-total">Total: <span>{`$${(person.pay.rate * person.pay.hours).toFixed(2)}`}</span></div>
         </section>
         <footer className="modal__footer">
            <button className="modal__footer--close" style={{backgroundColor: person.profile_background}} onClick={props.close}>Close</button>
         </footer>
      </div>
   )
}