
import PuppyCard from '@/components/ui/PuppyCard';
import { Link } from 'react-router-dom';

const puppies = [
  {
    sku: 'MO231',
    name: 'Pomeranian White',
    image: '/images/puppy1.jpg',
    gender: 'Male',
    age: '02 months',
    price: '6.900.000 VND',
  },
  {
    sku: 'MO502',
    name: 'Poodle Tiny Yellow',
    image: '/images/puppy2.jpg',
    gender: 'Female',
    age: '02 months',
    price: '3.900.000 VND',
  },
  {
    sku: 'MO102',
    name: 'Poodle Tiny Sepia',
    image: '/images/puppy3.jpg',
    gender: 'Male',
    age: '02 months',
    price: '4.000.000 VND',
  },
  {
    sku: 'MO512',
    name: 'Alaskan Malamute Grey',
    image: '/images/puppy4.jpg',
    gender: 'Male',
    age: '02 months',
    price: '8.900.000 VND',
  },
];

const SeeMorePuppies = () => {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-12">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">What’s new?</p>
          <h2 className="text-xl font-bold text-[#003459]">See More Puppies</h2>
        </div>
        <Link
          to="/puppies"
          className="text-sm font-medium text-[#003459] hover:underline"
        >
          View more →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {puppies.map((puppy, index) => (
          <PuppyCard key={index} {...puppy} />
        ))}
      </div>
    </section>
  );
};

export default SeeMorePuppies;
