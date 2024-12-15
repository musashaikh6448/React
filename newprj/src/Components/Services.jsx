import "../assets/css/Services.css";

import img1 from "../assets/images/n1.webp";
import img2 from "../assets/images/n2.png";
import img3 from "../assets/images/n3.jpg";
import img4 from "../assets/images/n4.avif";
import img5 from "../assets/images/n5.jpg";
import img6 from "../assets/images/n6.avif";
import img7 from "../assets/images/n7.webp";
import img8 from "../assets/images/n8.webp";
import img9 from "../assets/images/n9.png";
import img10 from "../assets/images/n10.jpg";

const Services = () => {
  const servicesData = [
    {
      title: "Web Development",
      description:
        "Our web development services are tailored to your specific requirements, ensuring that your online presence reflects your brand identity and values.",
      image: img1,
    },
    {
      title: "IT Consultancy",
      description:
        "Our IT consultancy services help you navigate the complex world of technology, providing expert guidance to ensure your IT infrastructure supports your business goals.",
      image: img2,
    },
    {
      title: "IT Services",
      description:
        "We offer a wide range of IT services to support your business operations, including IT support, cloud management, and cybersecurity solutions.",
      image: img3,
    },
    {
      title: "Mobile App Development",
      description:
        "From native apps to cross-platform solutions, our mobile app development services cover all your needs.",
      image: img4,
    },
    {
      title: "Software Development",
      description:
        "Our software development services streamline your business operations and drive efficiency.",
      image: img5,
    },
    {
      title: "UI/UX Design",
      description:
        "Our UI/UX design services focus on creating intuitive and visually appealing interfaces.",
      image: img6,
    },
    {
      title: "Data Science",
      description:
        "Unlock the power of your data with our data science services.",
      image: img7,
    },
    {
      title: "Startup Tech Partnerships",
      description:
        "We assist startups in building scalable and innovative tech solutions.",
      image: img8,
    },
    {
      title: "Corporate Training",
      description:
        "Enhance your team’s skills with our corporate training programs.",
      image: img9,
    },
    {
      title: "Corporate Trainers:",
      description:
        "“Our experienced corporate trainers are experts in their respective fields. They provide engaging and impactful training sessions that equip your team with the knowledge and skills they need to excel in their roles.",
      image: img10,
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>
        At Tekisky Pvt Ltd, we offer a comprehensive range of services to meet
        your digital needs.
      </p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
