import { getMetaByPage } from "@/utils";
import {CertificatesDisplay} from '@/components/sections'; // Yeni Client Component'i import et

// Metadata export'u burada kalıyor
export const metadata = getMetaByPage({ href: '/sertifikalar' });

// Sertifika verileri (Sunucu tarafında tanımlanabilir veya fetch edilebilir)
const certificatesData = [
    {
        id: 1,
        title: 'ISO 9001 Kalite Yönetim Sistemi',
        image: '/images/certificates/sqr_certification_iso_9001.jpeg',
        alt: 'ISO 9001 Sertifikası'
    },
    {
        id: 2,
        title: 'ISO 14001 Çevre Yönetim Sistemi',
        image: '/images/certificates/sqr_certification_iso_14001.jpeg',
        alt: 'ISO 14001 Sertifikası'
    },
    {
        id: 3,
        title: 'ISO 45001 İş Sağlığı ve Güvenliği',
        image: '/images/certificates/sqr_certification_iso_45001.jpeg',
        alt: 'ISO 45001 Sertifikası'
    },
    {
        id: 4,
        title: 'TOBB Kapasite Raporu',
        image: '/images/certificates/tobb_kapasite_raporu.jpeg',
        alt: 'TOBB Kapasite Raporu'
    },
    {
        id: 5,
        title: 'UDEM Uygunluk Belgesi',
        image: '/images/certificates/udem_uygunluk_belgesi.jpeg',
        alt: 'UDEM Uygunluk Belgesi'
    },
    {
        id: 6,
        title: 'CE Uygunluk Belgesi',
        image: '/images/certificates/udem_confortimity_certificate.jpeg',
        alt: 'CE Uygunluk Belgesi'
    },
    {
        id: 7,
        title: 'Marka Tescil Belgesi',
        image: '/images/certificates/turk_patent_marka_tescil_belgesi.jpeg',
        alt: 'Türk Patent Marka Tescil Belgesi'
    }
];

// Sayfanın ana Sunucu Bileşeni
const Certificates = () => {
    return (
        <div className="section-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading">
                            <h4>Kalite ve Standart Belgelerimiz</h4>
                            <div className="section-heading-line"></div>
                        </div>
                    </div>
                </div>
                {/* Client Component'i burada render et ve veriyi prop olarak geçir */}
                <CertificatesDisplay certificates={certificatesData} />
            </div>
            {/* Lightbox artık CertificatesDisplay içinde render ediliyor */}
        </div>
    );
};

export default Certificates;