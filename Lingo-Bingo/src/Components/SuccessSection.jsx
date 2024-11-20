import CountUp from 'react-countup';

export const SuccessSection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">
              <CountUp end={50000} duration={2.5} />+
            </div>
            <p className="text-lg">Active Users</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">
              <CountUp end={1000} duration={2.5} />+
            </div>
            <p className="text-lg">Lessons</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">
              <CountUp end={25000} duration={2.5} />+
            </div>
            <p className="text-lg">Vocabulary Words</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">
              <CountUp end={500} duration={2.5} />+
            </div>
            <p className="text-lg">Tutorials</p>
          </div>
        </div>
      </div>
    </section>
  );
};