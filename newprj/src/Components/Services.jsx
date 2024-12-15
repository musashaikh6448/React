import '../assets/css/Services.css'
const Services = () => {
  const servicesData = [
      {
          title: 'Web Development',
          description: 'Our web development services are tailored to your specific requirements, ensuring that your online presence reflects your brand identity and values.',
          image: '/web-development.jpg',
      },
      {
          title: 'IT Consultancy',
          description: 'Our IT consultancy services help you navigate the complex world of technology, providing expert guidance to ensure your IT infrastructure supports your business goals.',
          image: '/it-consultancy.jpg',
      },
      {
          title: 'IT Services',
          description: 'We offer a wide range of IT services to support your business operations, including IT support, cloud management, and cybersecurity solutions.',
          image: '/it-services.jpg',
      },
      {
          title: 'Mobile App Development',
          description: 'From native apps to cross-platform solutions, our mobile app development services cover all your needs.',
          image: '/mobile-app.jpg',
      },
      {
          title: 'Software Development',
          description: 'Our software development services streamline your business operations and drive efficiency.',
          image: '/software-development.jpg',
      },
      {
          title: 'UI/UX Design',
          description: 'Our UI/UX design services focus on creating intuitive and visually appealing interfaces.',
          image: '/ui-ux.jpg',
      },
      {
          title: 'Data Science',
          description: 'Unlock the power of your data with our data science services.',
          image: '/data-science.jpg',
      },
      {
          title: 'Startup Tech Partnerships',
          description: 'We assist startups in building scalable and innovative tech solutions.',
          image: '/startup-tech.jpg',
      },
      {
          title: 'Corporate Training',
          description: 'Enhance your team’s skills with our corporate training programs.',
          image: '/corporate-training.jpg',
      },
  ];

  return (
      <div className="services-container">
          <h1>Our Services</h1>
          <p>At Tekisky Pvt Ltd, we offer a comprehensive range of services to meet your digital needs.</p>
          <div className="services-grid">
              {servicesData.map((service, index) => (
                  <div className="service-card" key={index}>
                      <img src={service.image} alt={service.title} className="service-image" />
                      <h2>{service.title}</h2>
                      <p>{service.description}</p>
                  </div>
              ))}
          </div>
      </div>
  );
};


export default Services;
