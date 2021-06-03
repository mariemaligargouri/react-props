import React from 'react'

const Footer = ({children,total}) => {
    return (
        <div>
            {children}
            Total : {total}
        </div>
    )
}
Footer.defaultProps = {
    total:"1000£"
}

export default Footer
