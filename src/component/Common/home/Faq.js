import React from 'react';
import { FagData } from './../../data';
import Template from '../../Shared/Template';

const Fags = () => {
  return (
     <Template title='FAQs' className='text-primary'>
      <div className="accordion accordion-flush py-3" id="accordionFlushExample" >
        {FagData.map((question, index) => (
          <div className="accordion-item " key={index}>
            <h2 className="accordion-header "  >
              <button
                className="accordion-button collapsed fs-16 d-flex justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapseOne-${index}`} 
                aria-expanded="false"
                aria-controls={`flush-collapseOne-${index}`} 
                 
              >
                {question.ques}
              </button>
            </h2>
            <div
              id={`flush-collapseOne-${index}`} 
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fs-16">{question.ans}</div>
            </div>
          </div>
        ))}
     </div>
     </Template>
  );
};

export default Fags;