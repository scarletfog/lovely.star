import React from 'react';
import { Input as InputComponent, IInputProps as IIInputPropsType } from './Input.component';

export type IInputProps = IIInputPropsType;

export const Input = React.forwardRef(InputComponent);