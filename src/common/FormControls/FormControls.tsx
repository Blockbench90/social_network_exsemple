import React from "react";
import style from "./FormControls.module.css"
import {WrappedFieldsProps} from "redux-form";
//React.FC<WrappedFieldsProps> - собственная типизация из redux-form
export const Textarea: React.FC<WrappedFieldsProps> = ({input, meta, ...props}): any => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : "")}>
            <div><textarea {...input} {...props} /></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Input: React.FC<WrappedFieldsProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : "")}>
            <div><input {...input} {...props} /></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}