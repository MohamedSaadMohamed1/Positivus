import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Search engine optimization",
      bgColor: "bg-white border-2 border-blue-200",
      textColor: "text-gray-900",
      illustration: '/images/search.png',
      href: "/seo"
    },
    {
      title: "Pay-per-click advertising",
      bgColor: "bg-lime-400",
      textColor: "text-gray-900",
      illustration: '/images/pay.png',
      href: "/ppc"
    },
    {
      title: "Social Media Marketing",
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      textColor: "text-white",
      illustration: '/images/social.png',
      href: "/social-media"
    },
    {
      title: "Email Marketing",
      bgColor: "bg-white border-2 border-gray-200",
      textColor: "text-gray-900",
      illustration: '/images/sms.png',
      href: "/email-marketing"
    },
    {
      title: "Content Creation",
      bgColor: "bg-lime-400",
      textColor: "text-gray-900",
      illustration: '/images/content.png',
      href: "/content-creation"
    },
    {
      title: "Analytics and Tracking",
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      textColor: "text-white",
      illustration: '/images/analytics.png',
      href: "/analytics"
    }
  ];

  return (
      <section id="services" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold bg-lime-400 px-2 py-1 rounded">Services</h2>
          <p className="text-lg text-gray-600 max-w-xl ml-8 hidden md:block">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>
        
        <p className="text-lg text-gray-600 mb-12 md:hidden text-center">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              bgColor={service.bgColor}
              textColor={service.textColor}
              illustration={service.illustration}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;