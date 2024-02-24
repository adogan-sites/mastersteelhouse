import React from 'react';
import Image from 'next/image'

const Villa = ({service}) => {
    return (
        <div className="row">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <Image
                        src="/images/services/konut.png"
                        alt="konut hizmeti 1"
                        width={410}
                        height={273}
                        className="full-width rounded-border"
                    />
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <Image
                        src="/images/services/konut.png"
                        alt="konut hizmeti 1"
                        width={410}
                        height={273}
                        className="full-width rounded-border"
                    />
                </div>
            </div>
            <div className="heading-sm">
                <h4>Hafif Çelik ile Konut Yapımı</h4>
            </div>
            <div className="text-content">
                <p>Hafif çelik yapılar, modern mimarinin dinamik ihtiyaçlarına yanıt veren ve inşaat sektöründe önemli
                    bir yer edinen yenilikçi bir çözümdür. Özellikle son yıllarda artan talep, hafif çelik ev ve villa
                    üretimini popüler hale getirmiştir. Master Steel House olarak, hafif çelik yapıların avantajlarını
                    maksimum düzeyde kullanarak, müşterilerimize kaliteli ve dayanıklı evler sunuyoruz.</p>

                <p>Hafif çelik evler, geleneksel yapıların sağladığı dayanıklılığı ve güvenliği, ancak daha hızlı
                    montaj süreleri ve esnek tasarım seçenekleri ile birleştirir. Bu evler, çelik profillerin
                    kullanılmasıyla yüksek mukavemet ve uzun ömür sunar. Ayrıca, hafif çelik profil fiyatları da diğer
                    yapı malzemelerine göre genellikle daha ekonomiktir, bu da maliyet açısından avantajlı bir seçenek
                    sunar.</p>

                <p>Hafif çelik yapıların esnek tasarım özellikleri, her türlü arazi ve coğrafi yapıya uyum
                    sağlamalarını sağlar. Bu da hafif çelik villaların çeşitli konumlarda rahatlıkla inşa edilebilmesini
                    mümkün kılar. Ayrıca, çevre dostu olmaları ve geri dönüştürülebilir malzemeler kullanılarak
                    üretilmeleri, sürdürülebilirlik açısından da önemli bir avantajdır.</p>

                <p>Master Steel House olarak, müşterilerimize en uygun hafif çelik ev çözümlerini sunmak için geniş bir
                    ürün yelpazesi ve uzman ekibimizle hizmet vermekteyiz. İhtiyaçlarınıza ve bütçenize uygun
                    çözümlerimizle, hayalinizdeki eve kavuşmanızı sağlıyoruz. Hafif çelik yapıların dayanıklılığı,
                    estetiği ve ekonomik avantajlarıyla tanışmak için bizi ziyaret etmeyi unutmayın.</p>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="heading-sm">
                        <h4>Hafif Çelik Profilden Villa Yapmanın Avantajları</h4>
                    </div>
                    <ul className="primary-list">
                        <li><i className="fa fa-check-square-o"></i><b>Dayanıklılık:</b> Hafif çelik, yüksek mukavemeti
                            sayesinde dayanıklı yapılar oluşturmak için ideal bir malzemedir. Bu da evin uzun ömürlü
                            olmasını sağlar.
                        </li>
                        <li><i className="fa fa-check-square-o"></i><b>Hızlı İnşaat:</b> Hafif çelik yapılar, geleneksel
                            yöntemlere göre daha hızlı bir şekilde inşa edilebilir. Bu da projenin zamanında
                            tamamlanmasını ve müşteri memnuniyetini artırır.
                        </li>
                        <li><i className="fa fa-check-square-o"></i><b>Esnek Tasarım:</b> Hafif çelik profiller, farklı
                            tasarım
                            gereksinimlerine uyum sağlayabilme esnekliği sunar. Müşterilerin isteklerine ve
                            ihtiyaçlarına göre özelleştirilebilir yaşam alanları oluşturulabilir.
                        </li>
                        <li><i className="fa fa-check-square-o"></i><b>Ekonomiklik:</b> Hafif çelik, genellikle daha
                            ekonomik
                            bir seçenektir. Hem inşaat malzemelerinin maliyeti hem de işçilik açısından tasarruf sağlar.
                            Ayrıca, uzun vadede bakım maliyetlerinde de ekonomik olabilir.
                        </li>
                        <li><i className="fa fa-check-square-o"></i><b>Güvenlik:</b> Hafif çelik yapılar, deprem gibi
                            doğal
                            afetlere karşı daha dayanıklıdır. Ayrıca, yangın gibi acil durumlarda da daha güvenli bir
                            ortam sağlar.
                        </li>
                        <li><i className="fa fa-check-square-o"></i><b>Çevre Dostu:</b> Hafif çelik malzeme geri
                            dönüştürülebilir özelliktedir, bu da çevre dostu bir yapı malzemesi olmasını sağlar.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Villa;
