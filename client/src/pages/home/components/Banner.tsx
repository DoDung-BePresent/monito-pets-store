import { PlayCircle } from 'lucide-react';
import HeroImage from '@/assets/girldog.png';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <section className="relative mx-auto mb-[20px] h-[378px] max-w-7xl overflow-hidden rounded-[20px] bg-[#003459]">
      {/* Shape background on the right */}
      <div className="absolute top-[-160px] left-[700px] z-0 h-[635px] w-[782.29px] origin-center -rotate-[40deg] rounded-[99px] bg-[#FCEED5]" />
      <div className="absolute top-[200px] left-[-220px] z-0 h-[787.54px] w-[787.54px] origin-center rotate-[28.25deg] rounded-[99px] bg-[#002A48]" />
      {/* Image absolutely positioned */}
      <div className="absolute bottom-0 left-16 z-0 flex h-full w-[50%] items-end">
        <img
          src={HeroImage}
          alt="Hero Banner"
          className="h-full object-contain"
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 flex h-full items-center justify-end px-4">
        <div className="w-full max-w-md space-y-4 text-right md:pr-10">
          <h1 className="text-[52px] leading-[68px] font-extrabold text-[#003459]">
            One More Friend
          </h1>
          <h2 className="line text-[36px] leading-[54px] font-semibold text-[#003459]">
            Thousands More Fun!
          </h2>
          <p className="text-[12px] leading-[18px] font-medium text-[#242B33]">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="flex flex-col items-end gap-4 sm:flex-row sm:justify-end">
            <Button
              variant="outline"
              className="border-[#003459] text-[#003459] hover:bg-[#003459] hover:text-white"
            >
              View Intro
              <PlayCircle className="ml-2 size-5" />
            </Button>
            <Button className="bg-[#003459] hover:bg-[#003459]/90">
              Explore Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
