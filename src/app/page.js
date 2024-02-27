import {AboutHero, CarouselHero, PostsHero, ProjectsHero, ServicesHero} from "@/components/sections";
import {getMetaByPage} from "@/utils";

export const metadata = getMetaByPage({ href: '/' });

export default function Home() {
    return (
        <main>
            <CarouselHero/>
            <AboutHero/>
            <ServicesHero />
            <PostsHero />
            <ProjectsHero />
        </main>
    );
}
