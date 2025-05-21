import React from "react";
export default function Achievement() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Achievements 🏆
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          <div className="space-y-3">
            <h3 className="text-2xl text-indigo-600 font-semibold">
              🏅 Smart India Hackathon (SIH)
            </h3>
            <p className="text-lg text-gray-600">
              Selected in the internal round of this prestigious national-level
              innovation challenge, demonstrating problem-solving skills and
              technical aptitude.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl text-purple-600 font-semibold">
              🚀 Top 100 in HackHazards’25
            </h3>
            <p className="text-lg text-gray-600">
              Secured a spot among the top 100 participants in this competitive
              hackathon, showcasing coding prowess and creativity under
              pressure.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl text-indigo-600 font-semibold">
              💡 Hackathon & Ideathon Participation
            </h3>
            <p className="text-lg text-gray-600">
              Earned multiple certificates in collaborative coding events,
              reflecting dedication to hands-on learning and innovative
              thinking.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl text-indigo-600 font-semibold">
              💡 Collaborative Innovator
            </h3>
            <p className="text-lg text-gray-600">
              Thrive in team-driven environments to build impactful solutions
              under tight deadlines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
