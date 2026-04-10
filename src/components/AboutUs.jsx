function AboutUs() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          Welcome to our demo dashboard project. This application is built to
          showcase a modern, responsive interface with features like profile
          management, settings customization, and notice management.
        </p>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          Our goal is to provide a clean and professional user experience while
          demonstrating how local storage, authentication, and role-based
          dashboards can be integrated into a React application.
        </p>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Designed and developed by <span className="font-semibold">Shiwani and Aayushma</span>,
          this project highlights UI/UX best practices and scalable frontend
          patterns.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
