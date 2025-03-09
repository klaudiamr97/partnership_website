'use client';

import Hero from '@/components/Hero';
import Image from 'next/image';
import ListArticle from '@/components/ListArticle';
import CaseStudies from '@/components/CaseStudies';
import CallToAction from '@/components/CTA';
import ListBlock from '@/components/ListBlock';
import Restaurant from '@/assets/restaurant_inside.jpg';
import DigivateLogo from '@/assets/white-logo.svg';
import RestaurantLogo from '@/assets/logo_restaurant.svg';
import ImagePack from '@/assets/Intro_image.png';
import ImageText from '@/components/ImageText';
import ImageGroup from '@/assets/ImageGroup.png';

export default function Home() {
  return (
    <div className="min-h-screen font-sans flex flex-col space-y-8">
      <Hero
        title="Hello Artichoke!"
        description="We’ve been inspired by your incredible work and wanted to share something special with you."
        heroImg={Restaurant}
        companyLogo={RestaurantLogo}
        digivateLogo={DigivateLogo}
        className="w-full"
      />
      <div className="max-w-[100rem] md:mx-auto">
        <ImageText imgSrc={ImagePack}>
          <h2 className="text-accent-gold mb-6">What We Love About Artichoke</h2>
          <p className="mt-4 max-w-prose">
            Your commitment to sustainability, plant-based living, and serving delicious, organic food truly caught our
            eye. The impact you’re making in the culinary world is not only inspiring but essential to a better, greener
            future. We believe in your mission, and we’d love to help amplify your reach and success even further.
            Together, we can share your story with a broader audience and drive even more food lovers to your doors.
          </p>
        </ImageText>
        <ListArticle
          articles={[
            {
              title: 'Commitment to Sustainability',
              snippet:
                'Your focus on organic, locally sourced ingredients is something we deeply admire, setting a new standard in the plant-based dining industry.',
            },
            {
              title: 'Innovative Menu',
              snippet:
                'From your mouthwatering vegan tacos to decadent desserts, every dish is a celebration of flavor and ethical dining.',
            },
            {
              title: 'Connection to Community',
              snippet:
                'Your dedication to supporting local farmers and reducing your environmental footprint shows how much you care about both people and the planet.',
            },
          ]}
        />
        <ListBlock
          title="Opportunities to Build on Your Success"
          imgSrc={ImageGroup}
          imgAltText="Pictures of food"
          listElements={[
            {
              label: 'Elevate Your Visibility:',
              description:
                'Implement a customized SEO strategy to attract eco-conscious diners and plant-based food enthusiasts, bringing more visibility to your mission and menu.',
            },
            {
              label: 'Expand Your Reach:',
              description:
                'Launch targeted PPC campaigns to connect with local customers who value sustainable dining and crave innovative vegan cuisine.',
            },
            {
              label: 'Enhance Guest Experience:',
              description:
                'Optimize your website to create a seamless journey from discovery to booking, ensuring visitors are excited to dine with you or order online.',
            },
          ]}
        />
        <CaseStudies title="Our Work That Aligns with Your Vision" />
        <CallToAction
          heading="We’d Love to Collaborate"
          description="If you’re ready to take your impact to the next level, let’s connect! We’d be thrilled to discuss how we can help Artichoke shine even brighter and reach more guests who share your passion for sustainable, plant-based dining."
          buttonText="Book a call"
          buttonLink="#"
        />
      </div>
    </div>
  );
}
