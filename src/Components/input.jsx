import { forwardRef } from 'react';

const Input = forwardRef(({children, ...props}, ref) => {
  return (
    <>
        <label htmlFor={props.id}>{children}</label>
        <input ref={ref} className='form-control w-50' type='text' {...props} /> <br/>
    </>
  )
})

export default Input