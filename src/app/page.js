import {AboutHero, CarouselHero, PostsHero, ProjectsHero, ServicesHero, VideosHero} from "@/components/sections";
import {Section} from "@/components/ui";
import {getMetaByPage} from "@/utils";

export const metadata = getMetaByPage({ href: '/' });

// TODO: ans sayfadaki projeleri güncelle, sayfa içindeki başlıkları aynı formata sok. Proje sayfasındaki tab UI değiştir.

export default function Home() {
    return (
        <main>
            <CarouselHero/>
            <AboutHero/>
            <VideosHero isDark={true} />
            <Section title="Ürün Kataloğu" isDark={false}>
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-10">
                        <div className="catalog-viewer">
                            <h3 className="catalog-viewer__title">Master Profil Kataloğu</h3>
                            <p className="catalog-viewer__text">
                                Kataloğu yeni sekmede açarak doğrudan PDF üzerinde gezinebilirsiniz.
                            </p>
                            <a
                                className="catalog-viewer__link primary-button"
                                href="/MasterProfilKatalog2.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                PDF'yi Aç
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
            <ServicesHero />
            <PostsHero isDark={true} />
            <ProjectsHero />
        </main>
    );
}
