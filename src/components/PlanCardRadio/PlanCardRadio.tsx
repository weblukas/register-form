import React from 'react';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';

interface IPlanCardRadio {
    name: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
}

const PlanCardRadio = ({
    checked,
    handleChange,
    value,
    name
}: IPlanCardRadio) => {
    const StyledRadio = styled(Radio)({
        position: 'absolute',
        top: '16px',
        left: '29px',
        color: '#6B59D3',
        width: '37px',
        height: '37px'
    });

    return (
        <StyledRadio
            name={name}
            value={value}
            onChange={handleChange}
            checked={checked}
        />
    );
};

export default PlanCardRadio;
