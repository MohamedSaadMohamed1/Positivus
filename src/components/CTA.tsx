const CTA = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-100 rounded-3xl p-8 md:p-16 relative" style={{ overflow: 'visible' }}>
          <div className="grid md:grid-cols-2 gap-8 items-center relative min-h-[180px]" style={{ height: '180px' }}>
            {/* Left side - Text content */}
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-black whitespace-nowrap">
                Let's make things happen
              </h2>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
              </p>
              
              <button className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                Get your free proposal
              </button>
            </div>
            
            {/* Right side - Illustration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex justify-center items-center pointer-events-none overflow-visible h-[220px] w-[320px]">
              <img 
                src="/images/cta.png" 
                alt="Digital marketing illustration" 
                className="w-full max-w-md object-contain drop-shadow-xl select-none"
                style={{ height: '350px', maxWidth: '320px' }}
              />
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-lime-400 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-black rounded-full opacity-10 animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;