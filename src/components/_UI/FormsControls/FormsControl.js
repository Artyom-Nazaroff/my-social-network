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

export const Textarea = ({input, meta, children, ...props}) => {
    return (
        <FormControl {...props}>
            <textarea {...input} {...props} />
        </FormControl>
    )
}

export const Input = ({input, meta, children, ...props}) => {
    return (
        <FormControl {...props}>
            <input {...input} {...props} />
        </FormControl>
    )
}