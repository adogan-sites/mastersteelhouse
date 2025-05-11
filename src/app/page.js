import {AboutHero, CarouselHero, PostsHero, ProjectsHero, ServicesHero, VideosHero} from "@/components/sections";
import {getMetaByPage} from "@/utils";

export const metadata = getMetaByPage({ href: '/' });

// TODO: ans sayfadaki projeleri güncelle, sayfa içindeki başlıkları aynı formata sok. Proje sayfasındaki tab UI değiştir.

export default function Home() {
    return (
        <main>
            <CarouselHero/>
            <AboutHero/>
            <VideosHero isDark={true} />
            <ServicesHero />
            <PostsHero isDark={true} />
            <ProjectsHero />
        </main>
    );
}
