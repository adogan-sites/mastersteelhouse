import React from "react";

import { getMetaByPage } from "@/utils";
import { Section } from "@/components/ui";
import Image from "next/image";
import DATA from "@/data/data.json";
import AlciKoseProfili from "./_contentComponents/alci-kose-profili";
import Kabasiva from "./_contentComponents/kabasiva";
import Tavanuc from "./_contentComponents/tavanuc";

export const metadata = getMetaByPage({ href: "/urunler" });
const { products } = DATA;

const PRODUCT_COMPONENTS = {
  Alcikose: AlciKoseProfili,
  Kabasiva,
  Tavanuc,
};

const ProductsPage = () => {
  return (
    <>
      <Section title="Ürün Kataloğu" isDark={false}>
        <div className="row">
          <div className="col-12">
            <object
              data="/MasterProfilKatalog2.pdf"
              type="application/pdf"
              width="100%"
              height="800px"
            >
              <p>
                PDF'yi görüntüleyemiyorsanız dosyayı indirmek için{" "}
                <a
                  href="/MasterProfilKatalog2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  buraya tıklayın.
                </a>
              </p>
            </object>
          </div>
        </div>
      </Section>
      <Section title="Ürünler" isDark={false}>
        <div className="row gy-5">
          {products.map(
            ({
              title,
              heroDescription,
              href,
              images = [],
              contentComponent,
            }) => {
              const ProductContent = PRODUCT_COMPONENTS[contentComponent];

              if (!ProductContent) {
                return null;
              }

              const anchorId = href?.split("/").pop() ?? title;

              return (
                <div className="col-12" key={title} id={anchorId}>
                  <div className="heading-sm">
                    <h3>{title}</h3>
                  </div>
                  {heroDescription && <p>{heroDescription}</p>}
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    {images.map((image, index) => (
                      <div key={`${title}-${index}`} style={{ width: "410px" }}>
                        <Image
                          src={image}
                          alt={`${title} ${index + 1}`}
                          width={410}
                          height={273}
                          className="rounded-border w-100"
                        />
                      </div>
                    ))}
                  </div>
                  <ProductContent />
                </div>
              );
            }
          )}
        </div>
      </Section>
      <Section title='Ürün Kataloğu' isDark={false}>
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="product-catalog catalog-viewer">
              <h3 className="catalog-viewer__title">Master Profil Kataloğu</h3>
              <p className="catalog-viewer__text">
                Kataloğu yeni sekmede açmak ve sayfalar arasında rahatça gezinmek
                için aşağıdaki bağlantıyı kullanabilirsiniz.
              </p>
              <a
                className="catalog-viewer__link primary-button"
                href="/MasterProfilKatalog2.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                PDF&apos;yi Aç
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ProductsPage;
