import React from 'react'

const Button = ({ label, onClick, variant }: any) => {
    return (
        <React.Fragment>
            {
                variant === 'contained' && (
                    <button onClick={onClick} className='bg-dimYellow h-[68px] w-[232px] text-xl font-joseRegular text-primary'>{label}</button>
                )
            }
            {
                variant === 'outlined' && (
                    <button onClick={onClick} className='bg-none border-2 border-dimYellow h-[68px] w-[232px] text-xl font-joseRegular text-white'>{label}</button>
                )
            }
        </React.Fragment>
    )
}



export default Button