const Clients = () => {
  const clients = [
    { name: "Amazon", logo: "/images/amazon.png" },
    { name: "Dribbble", logo: "/images/dribbble.png" },
    { name: "HubSpot", logo: "/images/hubspot.png" },
    { name: "Notion", logo: "/images/notion.png" },
    { name: "Netflix", logo: "/images/netflix.png" },
    { name: "Zoom", logo: "/images/zoom.png" }
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
          {clients.map((client) => (
            <div 
              key={client.name}
              className="flex items-center justify-center h-12 w-full"
            > 
              <img
                src={client.logo} 
                alt={client.name} 
                className="h-full w-auto object-contain max-w-full filter grayscale brightness-0"
                // This combination will make logos appear black:
                // grayscale - converts to grayscale
                // brightness-0 - makes them fully black (0% brightness)
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;