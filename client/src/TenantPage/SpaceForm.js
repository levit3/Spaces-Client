import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const SpaceForm = ({ space, onClose, onSuccess }) => {
    const initialValues = space || {
        title: '',
        description: '',
        location: '',
        price_per_hour: '',
        status: 'available'