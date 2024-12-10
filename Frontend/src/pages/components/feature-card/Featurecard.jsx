function Featurecard() {
  const features = [
    {
      title: 'Lab Schedule',
      description: 'View the current lab schedule and plan your activities accordingly.',
      link: '/Labschedule',
    },
    {
      title: 'File a Complaint',
      description: 'Report any issues or problems directly to the lab assistant.',
      link: '/complain',
    },
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-orange-100 via-gray-200 to-orange-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg p-6 text-center border border-orange-400 hover:shadow-2xl transition-all duration-300 m-4 transform hover:-translate-y-2 hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-4 text-orange-700">{feature.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">{feature.description}</p>
            <a
              href={feature.link}
              className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-md hover:from-orange-600 hover:to-orange-700 transition duration-300"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Featurecard;
