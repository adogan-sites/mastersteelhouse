"use client"; // Bu bileşenin client-side çalışacağını belirtir

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

// Bu bileşen sertifika verilerini props olarak alır
const CertificatesDisplay = ({ certificates }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    // Lightbox için slide'ları sertifika verilerinden oluştur
    const slides = certificates.map(cert => ({
        src: cert.image,
        alt: cert.alt,
        title: cert.title
    }));

    // Bir sertifika görseline tıklandığında lightbox'ı açan fonksiyon
    const handleImageClick = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    return (
        <> {/* React Fragment kullanarak ana div'i page.js'de bırakabiliriz */}
            <div className="row mt-30">
                {certificates.map((certificate, index) => (
                    <div key={certificate.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-30">
                        <div className="certificate-box">
                            <div
                                className="certificate-img"
                                onClick={() => handleImageClick(index)} // Tıklama olayını burada yönet
                                role="button"
                                style={{ cursor: 'pointer' }}
                            >
                                <Image
                                    src={certificate.image}
                                    alt={certificate.alt}
                                    width={400}
                                    height={566}
                                    className="img-fluid"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'contain'
                                    }}
                                    // Öncelikli yükleme için lazy loading yerine eager düşünebilirsiniz
                                    // loading="eager" 
                                />
                            </div>
                            <div className="certificate-title text-center mt-20">
                                <h5>{certificate.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox bileşeni state'e göre render edilir */}
            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                index={photoIndex}
                slides={slides}
                render={{
                    buttonPrev: photoIndex === 0 ? () => null : undefined,
                    buttonNext: photoIndex === slides.length - 1 ? () => null : undefined
                }}
            />
        </>
    );
};

export default CertificatesDisplay;