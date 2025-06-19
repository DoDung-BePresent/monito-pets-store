import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PetKnowledgeCard } from '@/components/ui/PetKnowledgeCard';

const sampleArticles = [
  {
    image: '/src/assets/Frame 7.png',
    title: 'What is a Pomeranian? How to Identify Pomeranian Dogs',
    description:
      'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets...',
  },
  {
    image: '/src/assets/Frame 7 (1).png',
    title: 'Dog Diet You Need To Know',
    description:
      'Dividing a dog’s diet may seem simple at first, but there are some rules you should know...',
  },
  {
    image: '/src/assets/Frame 7 (2).png',
    title:
      'Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively',
    description:
      'Dog bites are common during development. No one wants to see their furniture being bitten...',
  },
];

export const PetKnowledgeSection = () => {
  return (
    <section className="bg-white px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">You already know?</p>
            <h2 className="text-xl font-bold text-[#003459]">
              Useful Pet Knowledge
            </h2>
          </div>
          <Button
            variant="outline"
            className="text-sm text-[#003459] hover:bg-[#003459] hover:text-white"
          >
            View more
            <ArrowRightIcon className="ml-1 size-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleArticles.map((article, index) => (
            <PetKnowledgeCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};
