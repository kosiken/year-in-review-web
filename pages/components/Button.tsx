import * as React from 'react';
import styled from 'styled-components';
import { AppTheme } from '../../types';

const StyledButton = styled.button<{theme: AppTheme}>`
    border-radius: 10px;
    outline: none;
    color: black;
    border: 1.5px solid black;
    background-color: ${({theme}) => `${theme.primary}`};


`