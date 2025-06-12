import { Button } from '@/components/ui/button';
import bannerImage from '@/assets/dog-banner.png';

const Banner = () => {
  return (
    <section className="relative mb-8 overflow-hidden rounded-[20px] bg-gradient-to-r from-[#FCEED5] to-[#FFE7BA] px-8 py-12">
      <div className="relative flex flex-col items-end justify-between md:flex-row">
        {/* Left image */}
        <div className="z-10 hidden md:block">
          <img
            src={bannerImage}
            alt="Banner"
            className="absolute top-0 right-[210px] max-h-[350px] w-full object-contain"
          />
        </div>

        {/* Background shape */}
        <div className="absolute -top-[160px] left-[500px] z-0 h-[799.52px] w-[816.4px] -rotate-[30deg] rounded-[99px] bg-[#002A48]" />

        {/* Right content */}
        <div className="z-10 flex flex-col items-end space-y-4 text-right md:pr-10">
          <h1 className="text-[52px] leading-[68px] font-extrabold text-[#FDFDFD]">
            One More Friend
          </h1>
          <p className="text-[36px] leading-[54px] font-semibold text-[#FDFDFD]">
            Thousands More Fun!
          </p>
          <p className="max-w-md text-[12px] font-medium text-[#CCD1D2]">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="mt-6 flex flex-wrap justify-end gap-4">
            <Button
              variant="outline"
              className="rounded-[57px] border-white bg-[#002A48] px-[28px] py-[14px] text-sm text-white hover:bg-white hover:text-[#003459]"
            >
              View Intro
            </Button>
            <Button className="rounded-[57px] bg-white px-[28px] py-[14px] text-sm text-[#003459] hover:bg-white/90">
              Explore Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
