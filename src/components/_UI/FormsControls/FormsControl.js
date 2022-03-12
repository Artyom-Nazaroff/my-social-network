import React from "react";
import stl from './FormsControl.module.css';

const FormControl = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={hasError ? stl.formControl + ' ' + stl.error : stl.formControl}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}