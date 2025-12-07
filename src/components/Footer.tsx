const Footer = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500">
          © {new Date().getFullYear()} Fasanya Oluwatobiloba Israel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;