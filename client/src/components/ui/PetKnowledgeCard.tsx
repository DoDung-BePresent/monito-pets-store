interface PetKnowledgeCardProps {
  image: string;
  title: string;
  description: string;
}

export const PetKnowledgeCard = ({
  image,
  title,
  description,
}: PetKnowledgeCardProps) => {
  return (
    <div className="rounded-xl bg-white p-3 shadow-sm hover:shadow-md transition-all">
      <div className="aspect-video overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-3 space-y-1">
        <span className="inline-block rounded-md bg-[#00A7E7] px-3 py-1 text-xs font-semibold text-white">
          Pet knowledge
        </span>
        <h4 className="text-base font-bold text-[#003459]">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};
