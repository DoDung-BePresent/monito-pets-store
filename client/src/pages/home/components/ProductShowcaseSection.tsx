import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ui/ProductCard';

const sampleProducts = [
  {
    image: 'https://...',
    title: 'Reflex Plus Adult Cat Food Salmon',
    category: 'Cat Food',
    size: '1.5kg',
    price: '165.000 VND',
    badge: 'Free Toy & Free Shaker',
  },
  {
    image: 'https://...',
    title: 'Cat scratching ball toy kitten sisal rope ball',
    category: 'Toy',
    price: '1.100.000 VND',
    badge: 'Free Cat Food',
  },
    {
    image: 'https://...',
    title: 'Cat scratching ball toy kitten sisal rope ball',
    category: 'Toy',
    price: '1.100.000 VND',
    badge: 'Free Cat Food',
  },
    {
    image: 'https://...',
    title: 'Cat scratching ball toy kitten sisal rope ball',
    category: 'Toy',
    price: '1.100.000 VND',
    badge: 'Free Cat Food',
  },
    {
    image: 'https://...',
    title: 'Cat scratching ball toy kitten sisal rope ball',
    category: 'Toy',
    price: '1.100.000 VND',
    badge: 'Free Cat Food',
  },
    {
    image: 'https://...',
    title: 'Cat scratching ball toy kitten sisal rope ball',
    category: 'Toy',
    price: '1.100.000 VND',
    badge: 'Free Cat Food',
  },
      {
    image: 'https://...',
    title: 'Cat scratching ball toy kitten sisal rope ball',
    category: 'Toy',
    price: '1.100.000 VND',
    badge: 'Free Cat Food',
  },
      {
    image: 'https://...',
    title: 'Cat scratching ball toy kitten sisal rope ball',
    category: 'Toy',
    price: '1.100.000 VND',
    badge: 'Free Cat Food',
  },
];

export const ProductShowcaseSection = () => {
  return (
    <section className="bg-white px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Hard to choose right products for your pets?
            </p>
            <h2 className="text-xl font-bold text-[#003459]">Our Products</h2>
          </div>
          <Button
            variant="outline"
            className="text-sm text-[#003459] hover:bg-[#003459] hover:text-white"
          >
            View more
            <ArrowRightIcon className="ml-1 size-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sampleProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
