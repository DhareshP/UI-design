import { Code2, BookOpen, Video, Users, Target, Trophy } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Code2 className="h-8 w-8 text-indigo-600" />,
      title: 'Real Interview Questions',
      description: 'Practice with actual questions asked at top tech companies like Google, Facebook, and Amazon'
    },
    {
      icon: <Video className="h-8 w-8 text-indigo-600" />,
      title: 'Video Solutions',
      description: 'Watch detailed video explanations for every problem with step-by-step breakdowns'
    },
    {
      icon: <Target className="h-8 w-8 text-indigo-600" />,
      title: 'Company Tracks',
      description: 'Follow company-specific preparation paths tailored to your target employers'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: 'System Design',
      description: 'Master system design with comprehensive guides and real-world examples'
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: 'Mock Interviews',
      description: 'Practice with peers in real-time and get structured feedback'
    },
    {
      icon: <Trophy className="h-8 w-8 text-indigo-600" />,
      title: 'Progress Tracking',
      description: 'Track your progress and identify areas for improvement'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Comprehensive interview preparation platform built by FAANG engineers
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="mt-4 text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}