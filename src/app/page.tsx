import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="p-5 border border-red-500 rounded-xl">
      <h1 className="text-red-500">Hello World</h1>
      <Button>Test</Button>
      <Input placeholder="Let's go run this project" />
    </div>
  );
};

export default HomePage;
