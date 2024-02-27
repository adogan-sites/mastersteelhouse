import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="section-block">
            <div className="container">
                <div className="row">
                    <div className="error">
                        <h1>404</h1>
                        <h2>Sayfa bulunamadı</h2>
                        <h4>Üzgünüz, ancak aradığınız sayfa mevcut değil.</h4>

                        <Link href="/" className="button-xs dark-button mt-20 mb-15">Ana Sayfaya Dön</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;