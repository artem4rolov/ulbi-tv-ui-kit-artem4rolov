import React, {FC} from 'react'

import './MyInput.css'

interface MyInputProps {
    placeholder: string,
    big?: boolean,
    label: string
}

export const MyInput: FC<MyInputProps> = ({label, big, placeholder, ...props}) => {

    const rootClasses = ['my-input-test']

    if (big) {
        rootClasses.push('big-input')
    }

  return (
    <label
    >
        {label}
        <input {...props} className={rootClasses.join(' ')} placeholder={placeholder}/>
    </label>
  )
}

