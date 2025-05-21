import React from "react";

function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
            Hi, I'm Kanishka Sharma
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a Front-End Developer with a passion for building responsive and
            intuitive web interfaces using modern tools like HTML, CSS,
            JavaScript, and React. I'm also an AI/ML enthusiast, exploring
            intelligent solutions to real-world problems. With a strong interest
            in Data Structures and Algorithms in Java, I strive to write clean,
            efficient, and scalable code. I'm always eager to learn, grow, and
            take on challenges that push my limits.
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center mb-16">
          <img
            src="/kspic1.jpg"
            alt="Profile"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white md:h-64  w-48 h-50 object-cover"
          />
        </div>

        {/* Professional Background */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Journey into Tech
          </h2>
          <div className="space-y-6 text-left max-w-4xl mx-auto">
            <p className="text-lg text-gray-600">
              As a 2nd-year Computer Science student, I’ve been actively
              exploring web development, AI/ML, and core programming concepts.
              I've built several front-end projects using HTML, CSS, JavaScript,
              and React, and I’m gradually expanding into backend development
              and cloud tools.
            </p>
            <p className="text-lg text-gray-600">
              Alongside web dev, I’m building a strong foundation in Data
              Structures and Algorithms using Java, and diving into the world of
              Machine Learning with Python.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-indigo-600 font-semibold mb-4">
              Frontend Development
            </h3>
            <p className="text-lg text-gray-600">
              Creating beautiful and responsive user interfaces with React,
              Javacript, and modern CSS frameworks
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-purple-600 font-semibold mb-4">
              AI-ML Enthusiast
            </h3>
            <p className="text-lg text-gray-600">
              Exploring the exciting world of Artificial Intelligence and
              Machine Learning with a focus on Python and real-world problem
              solving.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-indigo-600 font-semibold mb-4">
              UI/UX Design
            </h3>
            <p className="text-lg text-gray-600">
              Designing intuitive and engaging user experiences with a focus on
              accessibility and performance
            </p>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            💡 Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                🌱 Open Source Explorer
              </h3>
              <p className="text-lg text-gray-600">
                Actively learning about and contributing to beginner-friendly
                open-source projects to enhance collaboration and coding skills.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-purple-600 font-semibold">
                🤝 Tech Community
              </h3>
              <p className="text-lg text-gray-600">
                Engaged in online tech communities, attending webinars, and
                participating in hackathons and developer events to stay
                inspired and updated.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-600 font-semibold">
                📚 Peer Learning
              </h3>
              <p className="text-lg text-gray-600">
                Enjoy sharing resources, discussing ideas, and collaborating on
                projects with fellow students to grow together as developers.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                🔄 Continuous Learning
              </h3>
              <p className="text-lg text-gray-600">
                Always curious and eager to explore new technologies in web
                development, AI/ML, and programming best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 p-12 rounded-xl text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
