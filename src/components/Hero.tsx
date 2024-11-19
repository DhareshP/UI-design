import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const benefits = [
    "Interview Questions",
    "Data Structures & Algorithms",
    "Mock Interviews with Peers",
    "Company-Specific Practice"
  ];

  return (
    <div className="pt-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Master Your</span>
              <span className="block text-indigo-600">Tech Interviews</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl max-w-3xl">
              Practice with real interview questions from FAANG companies. Get detailed video explanations and optimal solutions.
            </p>
            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="ml-2 text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <button className="btn-primary flex items-center justify-center">
                Start Practicing Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-secondary">
                View Sample Questions
              </button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Developer working"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">Latest System Design Question</h3>
                    <p className="text-sm text-gray-600">Design Instagram's Feed Service</p>
                  </div>
                  <button className="btn-primary">
                    View Solution
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}