const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-10 border-t border-gray-300 dark:border-gray-700">
      <div className="footer-container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section - Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hadis. All Rights Reserved.
        </p>

       
      </div>
    </footer>
  );
};

export default Footer;
