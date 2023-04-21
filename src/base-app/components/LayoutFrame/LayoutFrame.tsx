import classNames from 'classnames';
import React, { useState } from 'react';
import './layout-frame.scss';

type Props = {
    sideNav?: React.ReactElement;
    topBar?: React.ReactNode;
    children?: React.ReactNode;
};

const LayoutFrame = ({ sideNav, topBar, children }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => setIsExpanded(!isExpanded);
    return (
        <div className="layout-frame">
            {sideNav && (
                <div
                    className={classNames('layout-frame__side-bar', {
                        'layout-frame__side-bar--expanded': isExpanded
                    })}
                >
                    {React.cloneElement(sideNav, {
                        isExpanded,
                        toggleExpand,
                        ...sideNav.props
                    })}
                </div>
            )}

            <div
                className={classNames('layout-frame__middle-area', {
                    'layout-frame__middle-area--full-size': !sideNav
                })}
            >
                <div className="layout-frame__top-bar">{topBar}</div>
                <div className="layout-frame__content">{children}</div>
            </div>
        </div>
    );
};

export default LayoutFrame;
