import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectList: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-[url('/assets/jumbotron-bg.png')] bg-no-repeat bg-center bg-cover flex items-center justify-center flex-col p-8">
      <div className="font-bold text-2xl mb-4 text-white">
        Find Your Project Now
      </div>
      <div className="w-full h-2/3 flex p-4 justify-center items-center flex-col gap-4 overflow-y-scroll md:w-2/3">
        <Project name="Simple E-Commerce" description="Create a simple E-Commerce" price={5}/>
        <Project name="Online TryOut System" description="Create online test system using django" price={9}/>
        <Project name="Create online finance tracker" description="Online finance tracker for company" price={7}/>
        <Project name="Test machine learning model" description="Evaluating machine learning performance" price={3}/>
      </div>
    </div>
  );
};

interface ProjectProps {
  name: string;
  description: string;
  price: number;
}
const Project: React.FC<ProjectProps> = ({name, description, price}) => {
  return (
    <Card className="bg-secondary w-full h-1/3">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{`Rp ${price}Jt`}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectList;
