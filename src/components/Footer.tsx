const Footer = () => {
  return (
    <footer className="mx-20  rounded-t-xl bg-gray-900 text-white">
      {/* Header section with logo, navigation, and social icons */}
      <div className="px-6 py-8 border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo and Navigation */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                         <img src="/images/logo.png" alt="Positivus Logo" className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Positivus</span>
            </div>
            
            <nav className="flex flex-wrap gap-6 md:gap-8">
              <a href="#" className="text-white hover:text-lime-400 transition-colors">About us</a>
              <a href="#" className="text-white hover:text-lime-400 transition-colors">Services</a>
              <a href="#" className="text-white hover:text-lime-400 transition-colors">Use Cases</a>
              <a href="#" className="text-white hover:text-lime-400 transition-colors">Pricing</a>
              <a href="#" className="text-white hover:text-lime-400 transition-colors">Blog</a>
            </nav>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-lime-400 transition-colors cursor-pointer">
              <span className="text-black text-sm font-bold">in</span>
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-lime-400 transition-colors cursor-pointer">
              <span className="text-black text-sm font-bold">f</span>
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-lime-400 transition-colors cursor-pointer">
              <span className="text-black text-sm font-bold">t</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content section */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold mb-6">Contact us:</h2>
            
            <div className="space-y-4 text-white">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St<br />Moonstone City, Stardust State 12345</p>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Email</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
                <button className="bg-lime-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-lime-300 transition-colors duration-300 whitespace-nowrap">
                  Subscribe to news
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="px-6 py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="hover:text-lime-400 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;