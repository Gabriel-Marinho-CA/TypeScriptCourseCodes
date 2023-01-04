import React from 'react'

interface Props {
    children: React.ReactNode,
    modal: any,
    fade: any
}

const Modal = ({ modal, fade, children }: Props) => {

    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector("#modal");
        modal!.classList.add("hide");
    }


    return (
        <div id="modal" className="hide">
            <div className={fade} onClick={closeModal}></div>
            <div className={modal}>
                <h2>
                    Texto Modal
                </h2>
                {children}
            </div>
        </div>
    )
}

export default Modal