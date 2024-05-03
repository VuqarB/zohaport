'use client'

import { useRef } from "react"

const BurgerMenu = ({ handleMenu }) => {
    const burgerTop = useRef()
    const burgerBottom = useRef()

    const classes = 'w-[24px] h-[3px] my-[5px] pr-0 pb-0 bg-white transition-all duration-300 ease-linear'

    return (
        <div className="flex-center flex-col cLg:hidden bg-[#e54530] w-[36px] h-[36px] xs:w-[44px] xs:h-[44px] md:w-[53px] md:h-[53px]" onClick={handleMenu}>
            <div className={classes} ref={burgerTop}></div>
            <div className={classes} ref={burgerBottom}></div>
        </div>
    )
}

export default BurgerMenu