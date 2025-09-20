export const CloudDecoration = () => {
  return (
    <>
      {/* Top left cloud */}
      <div className="absolute top-32 left-4 w-16 h-10 bg-cloud-light rounded-full opacity-60" />
      <div className="absolute top-36 left-8 w-12 h-8 bg-cloud-medium rounded-full opacity-50" />
      
      {/* Top right cloud */}
      <div className="absolute top-28 right-6 w-20 h-12 bg-cloud-medium rounded-full opacity-50" />
      <div className="absolute top-32 right-10 w-14 h-9 bg-cloud-light rounded-full opacity-40" />
      
      {/* Middle left clouds */}
      <div className="absolute top-96 left-2 w-12 h-8 bg-cloud-dark rounded-full opacity-30" />
      <div className="absolute top-[420px] left-6 w-18 h-10 bg-cloud-light rounded-full opacity-40" />
      
      {/* Middle right clouds */}
      <div className="absolute top-80 right-4 w-16 h-10 bg-cloud-medium rounded-full opacity-45" />
      
      {/* Bottom clouds */}
      <div className="absolute bottom-32 left-8 w-24 h-14 bg-cloud-dark rounded-full opacity-35" />
      <div className="absolute bottom-28 left-16 w-16 h-10 bg-cloud-light rounded-full opacity-25" />
      
      <div className="absolute bottom-40 right-2 w-20 h-12 bg-cloud-medium rounded-full opacity-40" />
      <div className="absolute bottom-36 right-8 w-14 h-9 bg-cloud-light rounded-full opacity-30" />
      
      {/* Additional decorative clouds */}
      <div className="absolute top-64 left-12 w-10 h-6 bg-cloud-light rounded-full opacity-20" />
      <div className="absolute top-[480px] right-12 w-12 h-8 bg-cloud-dark rounded-full opacity-25" />
    </>
  );
};