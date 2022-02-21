/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/BuyFormStyles.scss'
import { observer } from 'mobx-react-lite'
import modals from '../store/modals'

const BuyForm = observer((): JSX.Element => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            secondName: '',
            email: '',
            phoneNumber: '',
            passportNumber: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(10, 'Максимум 10 символов')
                .required('Обязательно'),
            secondName: Yup.string()
                .max(10, 'Максимум 10 символов')
                .required('Обязательно'),
            email: Yup.string()
                .email('Неверный адресс')
                .required('Обязательно'),
            phoneNumber: Yup.string()
                .max(12, 'Максимум 12 символов')
                .required('Обязательно'),
            passportNumber: Yup.string()
                .max(12, 'Максимум 12 символов')
                .required('Обязательно'),
        }),
        onSubmit: (values) => {
            sessionStorage.firstName = values.firstName
        },
    })

    return (
        <div
            className={modals.modals[0] ? 'modal active' : 'modal'}
            onClick={() => modals.changeModals([false, false])}
        >
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                            First Name
                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                id="firstName"
                                placeholder="First Name"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                            />
                        </label>
                    </div>
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <p className="error">{formik.errors.firstName}</p>
                    ) : null}
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                            Second Name
                            <input
                                type="text"
                                className="form-control"
                                name="secondName"
                                id="secondName"
                                placeholder="Second Name"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.secondName}
                            />
                        </label>
                    </div>
                    {formik.touched.secondName && formik.errors.secondName ? (
                        <p className="error">{formik.errors.secondName}</p>
                    ) : null}
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                            Phone Number
                            <input
                                type="text"
                                className="form-control"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="Phone Number"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.phoneNumber}
                            />
                        </label>
                    </div>
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                        <p className="error">{formik.errors.phoneNumber}</p>
                    ) : null}
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                            Email Address
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Email Address"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </label>
                        <small id="emailHelp" className="form-text text-muted">
                            We will never share your email with anyone else.
                        </small>
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                        <p className="error">{formik.errors.email}</p>
                    ) : null}
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                            Passport Number
                            <input
                                type="text"
                                className="form-control"
                                name="passportNumber"
                                id="passportNumber"
                                placeholder="Passport Number"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.passportNumber}
                            />
                        </label>
                    </div>
                    {formik.touched.passportNumber &&
                    formik.errors.passportNumber ? (
                        <p className="error">{formik.errors.passportNumber}</p>
                    ) : null}
                    <div className="form-check">
                        <button
                            onClick={() => modals.changeModals([false, true])}
                            type="submit"
                            className="btn btn-primary"
                            disabled={!(formik.dirty && formik.isValid)}
                        >
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
})

export default BuyForm
