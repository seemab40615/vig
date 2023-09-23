export const Layout = ({ children }) => {
  return (
    <div className="w-full h-full bg-gray-900">
      <div className="bg-theme-black max-w-maxSize w-full mx-auto">
        {children}
      </div>
      ;
    </div>
  );
};
