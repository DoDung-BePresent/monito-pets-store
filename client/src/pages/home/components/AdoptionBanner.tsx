import { PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BannerImage from '@/assets/adoption.png';
import FontistoPaw from '@/assets/fontisto_paw.png';

const AdoptionBanner = () => {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden rounded-[20px] bg-[#FFB775] px-8">
      {/* Right Shape background */}
      <div className="absolute top-[170px] right-[-220px] z-0 h-[787.54px] w-[787.54px] rotate-[151.75deg] rounded-[99px] bg-gradient-to-tl from-[#FFE7BA] via-[#FCEED5] to-[#FCEED5] opacity-40" />
      <div className="absolute top-[-330px] left-[-270px] z-0 h-[635px] w-[782.29px] rotate-[60deg] rounded-[99px] bg-[#FCEED5]" />
      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        {/* Left: Text */}
        <div className="space-y-4 text-left">
          <h1 className="flex items-center gap-2 text-[52px] leading-[68px] font-extrabold text-[#003459]">
            Adoption
            <img
              src={FontistoPaw}
              alt="Paw Icon"
              className="h-[28px] w-[28px]"
            />
          </h1>
          <h2 className="text-[36px] leading-[54px] font-bold text-[#003459]">
            We Need Help. So Do They.
          </h2>
          <p className="text-sm leading-[18px] text-[#242B33]">
            Adopt a pet and give it a home, <br />
            it will love you back unconditionally.
          </p>

          <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button className="rounded-full bg-[#003459] px-6 py-2 text-white hover:bg-[#003459]/90">
              Explore Now
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-[#003459] px-6 py-2 text-[#003459] hover:bg-[#003459] hover:text-white"
            >
              View Intro <PlayCircle className="ml-2 size-5" />
            </Button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex h-full items-end justify-center md:justify-end">
          <img
            src={BannerImage}
            alt="Adoption Banner"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AdoptionBanner;
