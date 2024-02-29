"use client"

import React, {useState} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

import {faCircleCheck, faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        files: null,
    });
    const [errors, setErrors] = useState({});
    const [showSuccessMessage, setShowSuccessMessage] = useState();
    const [showErrorMessage, setShowErrorMessage] = useState();
    const [isProgressing, setProgressing] = useState();

    const handleChange = (e) => {
        const {name, value} = e.target;

        setShowSuccessMessage();
        setShowErrorMessage();

        setErrors(prevState => ({
            ...prevState,
            [name]: ''
        }))

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            files: e.target.files,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProgressing(true);

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setProgressing();
            return;
        }

        const form = new FormData();
        form.append('name', formData.name);
        form.append('company', formData.company);
        form.append('email', formData.email);
        form.append('phone', formData.phone);
        form.append('message', formData.message);
        if (formData.files) {
            for (let i = 0; i < formData.files.length; i++) {
                form.append('files', formData.files[i]);
            }
        }

        try {
            const response = await fetch("https://getform.io/f/Qe1gx0bJ", {
                method: "POST",
                body: form,
                headers: {
                    "Accept": "application/json",
                },
            });

            if (!response.ok) {
                const { message } = await response.json();
                throw new Error(message);
            }

            setShowSuccessMessage(true);
            setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                message: '',
                files: null,
            });
            setErrors({});
        } catch (error) {
            console.error('Error submitting form:', error);
            setShowErrorMessage(true);
        }
        setProgressing();
    };

    const validateForm = (data) => {
        const errors = {};
        if (!data.name.trim()) {
            errors.name = 'Adınız Soyadınız alanı zorunludur.';
        }
        if (!data.email.trim()) {
            errors.email = 'E-Mail Adresiniz alanı zorunludur.';
        } else if (!isValidEmail(data.email)) {
            errors.email = 'Geçerli bir e-posta adresi giriniz.';
        }
        if (!data.phone.trim()) {
            errors.phone = 'Telefon Numaranız alanı zorunludur.';
        }
        if (!data.message.trim()) {
            errors.message = 'Mesajınız alanı zorunludur.';
        }
        return errors;
    };

    const isValidEmail = (email) => {
        // Basit bir e-posta doğrulama işlemi
        return /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm.test(email);

    };

    const isValidPhone = (phone) => {
        // Basit bir telefon numarası doğrulama işlemi
        return /^[0-9]{10}$/.test(phone);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row className="pb-3">
                    <Col md={12} className="mb-3 mb-md-0">
                        <Form.Group>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="Adınız Soyadınız"
                                onChange={handleChange}
                                isInvalid={errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                name="company"
                                value={formData.company}
                                placeholder="Fırmanızın Adı"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="pb-3">
                    <Col md={12} className="mb-3 mb-md-0">
                        <Form.Group>
                            <Form.Control
                                type="text"
                                name="email"
                                value={formData.email}
                                placeholder="E-Mail Adresiniz"
                                onChange={handleChange}
                                isInvalid={errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={formData.phone}
                                placeholder="Telefon Numaranız"
                                onChange={handleChange}
                                isInvalid={errors.phone}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.phone}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="pb-1">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        value={formData.message}
                        placeholder="Mesajınız"
                        onChange={handleChange}
                        isInvalid={errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="pb-3">
                    <Form.Label>Dosyalar:</Form.Label>
                    <Form.Control
                        type="file"
                        name="files"
                        onChange={handleFileChange}
                        multiple
                    />
                </Form.Group>
                <input type="hidden" name="_gotcha" style={{display: "none !important"}}/>
                {
                    showSuccessMessage && (
                        <div className="alert alert-success d-flex align-items-center gap-3" role="alert">
                            <FontAwesomeIcon icon={faCircleCheck}/>
                            <div>
                                Mesajınızı aldık. En kısa zamanda geri dönüş yapmış olacağız.
                            </div>
                        </div>
                    )
                }
                {
                    showErrorMessage && (
                        <div className="alert alert-danger d-flex align-items-center gap-3" role="alert">
                            <FontAwesomeIcon icon={faTriangleExclamation}/>
                            <div>
                                Mesajınız gönderilirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin ya da başka bir
                                iletişim yöntemi kullanın.
                            </div>
                        </div>
                    )
                }
                <Button variant="primary" type="submit" size="lg" disabled={isProgressing}>
                    {isProgressing ? 'Gönderiliyor...' : 'Gönder'}
                </Button>
            </Form>
        </Container>
    );
};

export default ContactForm;
