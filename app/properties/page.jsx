import Propertiess from "@/components/Propertiess";
import PropertySearchForm from "@/components/PropertySearchForm";

const Properties = async () => {
  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <Propertiess />
    </>
  );
};

export default Properties;
