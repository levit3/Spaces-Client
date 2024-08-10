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
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
        location: Yup.string().required('Location is required'),
        price_per_hour: Yup.number().required('Price per hour is required').positive('Price must be positive'),
        status: Yup.string().required('Status is required')
    });
    const postSpace = async (values) => {
        try {
          const response = await fetch('http://localhost:5555/api/spaces', { // Ensure correct URL
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            const postSpace = async (values) => {
                try {
                  const response = await fetch('http://localhost:5555/api/spaces', { // Ensure correct URL
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },