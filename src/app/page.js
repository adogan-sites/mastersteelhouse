import {AboutHero, CarouselHero, PostsHero, ProjectsHero, ServicesHero} from "@/components/sections";

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
