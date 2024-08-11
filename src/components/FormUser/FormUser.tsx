import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './FormUser.css';
import { useUser } from '../../hooks';

const FormUser = () => {
    const {login} = useUser();
    const [loader, setLoader] = useState(false);
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formValue) => {
            try {
                setLoader(true);
                login(formValue.name)
            } catch (error) {
                console.error(error);
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="cont_form_forme">
                <div className="formRow">
                    {formik.values?.name?.length > 0 && (
                        <label className="formLabel">Nombre de usuario</label>
                    )}
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre de usuario"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="cont_form_input"
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="error_message">{formik.errors.name}</div>
                    ) : ""}
                </div>
                <button type="submit" className="btn_continuar">
                    {loader ? "Cargando..." : "CONTINUAR"}
                </button>
            </div>
        </form>
    );
}

export default FormUser;

function initialValues() {
    return {
        name: "",
    };
}

function validationSchema() {
    return {
        name: Yup.string().required("El nombre de usuario es requerido."),
    };
}
