import React from 'react';

const NotFound = () => {
    return (
        <div className="section-block">
            <div className="container">
                <div className="row">
                    <div className="error">
                        <h1>404</h1>
                        <h2>Sayfa bulunamadı</h2>
                        <h4>Üzgünüz, ancak aradığınız sayfa mevcut değil.</h4>

                        <a href="index.html" className="button-xs dark-button mt-20 mb-15">Ana Sayfaya Dön</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;