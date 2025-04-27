import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";



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
        <LatestPostsSection posts={props.posts} />
      </>
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {


  const response = await fetch("http://localhost:1337/api/posts?populate=*")
  const data = await response.json();
  


  const allPosts = data.data;
  

  return {
    props: {
      posts: allPosts,
    }
  }
}