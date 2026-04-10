function AboutUs() {
  return (
    <div className="p-8 m-20 max-w-3xl mx-auto shadow-xl bg-green-200 rounded-lg dark:bg-gray-300">
      <h2 className="text-3xl text-green-600 font-bold mb-6 text-center">About Us</h2>

      <div className=" dark:bg-gray-200 shadow rounded-lg p-6 bg-green-100">
        <p className=" mb-4 leading-relaxed">
          Welcome to our demo dashboard project. This application is built to
          showcase a modern, responsive interface with features like profile
          management, settings customization, and notice management.
        </p>

        <p className="mb-4 leading-relaxed">
          Our goal is to provide a clean and professional user experience while
          demonstrating how local storage, authentication, and role-based
          dashboards can be integrated into a React application.
        </p>

        <p className="leading-relaxed">
          Designed and developed by <span className="font-semibold">Shiwani and Aayushma</span>,
          this project highlights UI/UX best practices and scalable frontend
          patterns.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
