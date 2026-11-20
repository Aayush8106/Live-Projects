import React from 'react';
import { IconName } from '../../assets/icons';
import Window from '../os/Window';

interface EmptyAppProps extends WindowAppProps {
    windowTitle: string;
    windowBarIcon: IconName;
}

const EmptyApp: React.FC<EmptyAppProps> = ({
    onClose,
    onInteract,
    onMinimize,
    windowTitle,
    windowBarIcon,
}) => (
    <Window
        top={40}
        left={60}
        width={640}
        height={420}
        windowTitle={windowTitle}
        windowBarIcon={windowBarIcon}
        closeWindow={onClose}
        minimizeWindow={onMinimize}
        onInteract={onInteract}
    />
);

export default EmptyApp;