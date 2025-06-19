import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import SeeMorePuppies from './components/SeeMorePuppies';

const images = [
  '/src/assets/shiba.png',
  '/src/assets/shiba.png',
  '/src/assets/shiba.png',
  '/src/assets/shiba.png',
  '/src/assets/shiba.png',
];

const ProductDetail = () => {
  return (
    <>
      {' '}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Image gallery */}
          <div>
            <img
              src={images[0]}
              alt="Shiba Inu"
              className="aspect-square w-full rounded-xl object-cover"
            />
            <div className="mt-4 grid grid-cols-5 gap-2">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Thumbnail ${i}`}
                  className="aspect-square rounded-md border object-cover"
                />
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 bg-gradient-to-r from-[#FCEED5] to-[#FFE7BA] rounded-[10px]">
              <span className="inline-flex items-center gap-2 px-4 py-1 text-xs font-semibold text-pink-700">
                <img
                  src="/src/assets/Frame.png"
                  alt="Health icon"
                  className="h-4 w-4"
                />
                100% health guarantee for pets
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold text-yellow-700">
                <img
                  src="/src/assets/Frame 110.png"
                  alt="ID icon"
                  className="h-4 w-4"
                />
                100% guarantee of pet identification
              </span>
            </div>
            <div className="mt-6 flex items-center gap-3 text-gray-500">
              <span className="font-medium">Share:</span>
              <Facebook className="h-4 w-4" />
              <Instagram className="h-4 w-4" />
              <Twitter className="h-4 w-4" />
              <Youtube className="h-4 w-4" />
            </div>
          </div>

          {/* Right: Details */}
          <div className="space-y-3">
            <p className="text-sm text-gray-500">SKU #1000078</p>
            <h1 className="text-2xl font-bold text-[#003459]">
              Shiba Inu Sepia
            </h1>
            <p className="text-xl font-semibold text-[#003459]">
              34.000.000 VND
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Button className="bg-[#003459] text-white hover:bg-[#002a40]">
                Contact us
              </Button>
              <Button
                variant="outline"
                className="border-[#003459] text-[#003459]"
              >
                Chat with Monito
              </Button>
            </div>

            <div className="mt-6 border-t pt-4 text-sm text-[#242B33]">
              <div className="grid grid-cols-1 gap-y-2.5">
                {[
                  ['SKU', '#1000078'],
                  ['Gender', 'Female'],
                  ['Age', '2 Months'],
                  ['Size', 'Small'],
                  ['Color', 'Apricot & Tan'],
                  ['Vaccinated', 'Yes'],
                  ['Dewormed', 'Yes'],
                  ['Cert', 'Yes (MKA)'],
                  ['Microchip', 'Yes'],
                  ['Location', 'Vietnam'],
                  ['Published Date', '12-Oct-2022'],
                ].map(([label, value], index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 gap-x-2 rounded-md bg-white px-[10px] py-[8px]"
                  >
                    <div className="text-[#242B33]">{label}</div>
                    <div className="text-[#242B33]">: {value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold">Additional Information</h4>
                <p className="text-sm text-gray-600">
                  • Pure bred Shih Tzu.
                  <br />
                  • Good body structure.
                  <br />
                  • With MKA cert and Microchip.
                  <br />• Father from champion lineage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*See more puppy */}
      <SeeMorePuppies />
    </>
  );
};

export default ProductDetail;
