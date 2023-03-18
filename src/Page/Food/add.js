import React, {useState} from 'react';
import Header from "../../Component/header";
import Footer from "../../Component/footer";
import {t} from "i18next";
import { Formik, Form } from 'formik';
import Input from "../../Component/Form/input";
import * as Yup from 'yup';
function AddFood() {
    const [isLoading, setIsLoading] = useState(false);

    const submit = (values) => {
        setIsLoading(true);
        alert(values);
    }

    const SignupSchema = Yup.object().shape({
        city: Yup.string().required('RequiredField'),
        restaurant: Yup.string().required('RequiredField'),
    });

    return (
        <>
            <Header/>
            <div className="min-h-screen">
                <div className="max-w-sm mx-auto pt-4">
                    <Formik
                        initialValues={{
                            city: '',
                            restaurant: '',
                        }}
                        onSubmit={async (values) => {
                            submit(JSON.stringify(values, null, 2));
                        }}
                        validationSchema={SignupSchema}
                    >
                    {({ errors, touched }) => (
                        <Form>
                            <Input name="city"/>
                            {errors.city && touched.city ? (
                                <div>{t(errors.city)}</div>
                            ) : null}
                            <Input name="restaurant"/>
                            {errors.restaurant && touched.restaurant ? (
                                <div>{t(errors.restaurant)}</div>
                            ) : null}
                            <button className="btn btn-primary mt-4 cursor-pointer" type="submit" disabled={isLoading}>{t('Submit')}</button>
                        </Form>
                        )}
                    </Formik>
                    <div className="pt-4">
                        {t('FoodCommandBot')}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default AddFood;