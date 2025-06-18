export default function Home() {
  return (
    <main className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <h1 className='text-2xl font-bold text-blue-600'>
            Student Build Pack
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='max-w-4xl mx-auto'>
          {/* Hero Section */}
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Welcome to Student Build Pack
            </h2>
          </div>

          {/* Simple Card Example */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
            <div className='card p-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Card Title
              </h3>
              <p className='text-gray-600 mb-4'>
                This is a simple card with clean styling and rounded corners.
              </p>
              <button className='btn btn-primary'>Get Started</button>
            </div>

            <div className='card p-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Another Card
              </h3>
              <p className='text-gray-600 mb-4'>
                Clean design with subtle shadows and proper spacing.
              </p>
              <button className='btn btn-secondary'>Learn More</button>
            </div>

            <div className='card p-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Third Card
              </h3>
              <p className='text-gray-600 mb-4'>
                Simple, effective, and ready for production use.
              </p>
              <button className='btn btn-primary'>Explore</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
