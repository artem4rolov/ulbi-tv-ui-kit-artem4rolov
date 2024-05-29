import React, {FC} from 'react'

import './MyButton.css'

interface MyButtonProps {
    children: React.ReactElement | string
    color: string,
    big?: boolean
}

export const MyButton: FC<MyButtonProps> = ({children, color, big, ...props}) => {

    const rootClasses = ['my-button']

    if (big) {
        rootClasses.push('big-btn')
    }

  return (
    <button {...props} className={rootClasses.join(' ')} style={{color}}>{children}</button>
  )
}

