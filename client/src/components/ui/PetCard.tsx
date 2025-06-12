import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';

interface PetCardProps {
  id: string;
  image: string;
  name: string;
  gene: string;
  age: string;
  price: string;
}

const PetCard = ({ id, image, name, gene, age, price }: PetCardProps) => {
  return (
    <Card className="overflow-hidden rounded-xl border p-2 transition-shadow hover:shadow-md">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-100">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <CardContent className="space-y-1 px-3 pt-3 pb-4">
        <CardTitle className="text-sm font-semibold text-[#003459]">
          {id} - {name}
        </CardTitle>
        <CardDescription className="text-xs text-gray-600">
          Gender: <strong>{gene}</strong> &nbsp;&bull;&nbsp; Age:{' '}
          <strong>{age}</strong>
        </CardDescription>
        <div className="text-sm font-bold text-[#003459]">{price}</div>
      </CardContent>
    </Card>
  );
};

export default PetCard;
