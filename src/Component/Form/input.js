import React from 'react';
import {t} from "i18next";
import { Field } from 'formik';

function Input(props) {

    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">{t(props.name)}</span>
            </label>
            <Field id={props.name} name={props.name} className="input input-bordered input-primary w-full max-w-full" placeholder={t(props.name)} />
        </div>
    );
}

export default Input;