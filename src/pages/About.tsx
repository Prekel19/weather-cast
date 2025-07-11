export const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        This is a weather application I developed to combine practical functionality with
        modern web technologies.
      </p>
      <br />
      <p>
        The app is built with React and Vite, providing a performant and efficient
        development setup. Styling is handled with SCSS, routing with React Router, and
        data fetching is managed using TanStack's useQuery for optimized performance and
        caching.
      </p>
      <br />
      <p>
        Weather data is retrieved from WeatherAPI, delivering accurate and real-time
        information. Additionally, I integrated an interactive map using Leaflet, powered
        by OpenWeatherMap, which allows users to explore weather data in a more visual and
        engaging way.
      </p>
      <br />
      <p>
        This project has been a valuable opportunity for me to apply modern frontend
        practices, work with third-party APIs, and build a complete, real-world
        application from the ground up.
      </p>
    </div>
  );
};
