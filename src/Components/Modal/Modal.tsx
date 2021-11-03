import { FC, ReactNode } from 'react'
import './Modal.scss'

export const ModalComponent: FC<{ children: ReactNode; className?: string; close: () => void }> = ({
    children,
    className = '',
}) => {
    const cls = className + ' modal'
    return (
        <div className={cls} data-testid="ModalComponent">
            <div className="modal__overlay" />
            <div className="modal__content">{children}</div>
        </div>
    )
}
