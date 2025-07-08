import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import CountersSection from "@components/sections/Counters";
import FeaturesSection from "@components/sections/Features";
import LatestPostsSection from "@components/sections/LatestPosts";

const HeroSlider = dynamic(() => import("@components/sliders/Hero"), { ssr: true });

const ProjectsSlider = dynamic(() => import("@components/sliders/Projects"), { ssr: true });


const Home1 = (props) => {
  return (
    <Layouts transparent>
      <>
        <HeroSlider />
        <ServicesSection />
        <AboutSection />
        <CountersSection />
        <ProjectsSlider  />
        <FeaturesSection />
        <LatestPostsSection posts={props.posts}  />
      </>
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps({locale}) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${apiUrl}/api/posts?populate=*&locale=${locale}`)
  const data = await response.json();
  
  const allPosts = data.data;
// have to import everything
  return {
    props: {
      posts: allPosts,
        ...(await serverSideTranslations(locale, ['projects','latest-posts','projectsBanner','about-section','counter','features','services'])), // Add your namespaces here
    }
  }
}