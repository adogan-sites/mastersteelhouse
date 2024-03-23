import {AboutHero, CarouselHero, PostsHero, ProjectsHero, ServicesHero, VideosHero} from "@/components/sections";
import {getMetaByPage} from "@/utils";

export const metadata = getMetaByPage({ href: '/' });

export default function Home() {
    return (
        <main>
            <CarouselHero/>
            <VideosHero />
            <AboutHero isDark={true}/>
            <ServicesHero />
            <PostsHero isDark={true} />
            <ProjectsHero />
        </main>
    );
}
