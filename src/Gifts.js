import React from 'react'
import { Birthday } from './birthday/Birthday';
import { SanValentin } from './sanValentin/SanValentin';
import './styles/styles.scss';
export const Gifts = () => {
    return (
        <div className="gift__container">
            <div className="gift__back" ></div>

            <Birthday />
            <SanValentin />
        </div>
    )
}
