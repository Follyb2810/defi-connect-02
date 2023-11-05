import React from 'react'
import Template from './../../Shared/Template'
import { templatetHead } from '../../data'

const Borrow = () => {
  // const [{BorrowInputData:{title,para,img}}] = templatetHead
//   const [{ BorrowInputData }] = templatetHead;
// const { title, para,img } = BorrowInputData;
const BorrowData = templatetHead[0]
const {BorrowData:{ title, para,img} } = BorrowData;
console.log(BorrowData.title)

    return (
        <Template title={title} para={para} className='container'>
          <section>
            <img src={img} alt='' className='img-fluid'/>
          </section>  
        </Template>
    )
}

export default Borrow
