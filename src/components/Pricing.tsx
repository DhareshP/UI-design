import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    {
      name: 'Monthly',
      price: '4k',
      duration: 'month',
      features: [
        'All Practice Questions',
        'Video Solutions',
        'Company-Specific Tracks',
        'System Design Questions',
        'Mock Interview Platform',
        'Progress Analytics',
        'Community Access'
      ],
      cta: 'Start Monthly Plan',
      featured: false
    },
    {
      name: 'Annual',
      price: '28k',
      duration: 'year',
      savings: 'Save 10k',
      features: [
        'Everything in Monthly',
        '2 Mock Interviews with FAANG Engineers',
        'Resume Review',
        'Priority Support',
        'Interview Strategy Sessions',
        'Lifetime Access to Solutions'
      ],
      cta: 'Start Annual Plan',
      featured: true
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Investment in Your Future
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Choose the plan that best fits your preparation timeline
          </p>
        </div>

        <div className="mt-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`relative p-8 bg-white rounded-2xl ${
                  tier.featured
                    ? 'ring-4 ring-indigo-600 shadow-xl'
                    : 'ring-1 ring-gray-200 shadow-sm'
                }`}
              >
                {tier.featured && (
                  <span className="absolute top-0 right-6 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-5xl font-extrabold tracking-tight text-gray-900">
                      ${tier.price}
                    </span>
                    <span className="ml-2 text-xl text-gray-600">/{tier.duration}</span>
                  </div>
                  {tier.savings && (
                    <p className="mt-2 text-sm text-green-600 font-medium">{tier.savings}</p>
                  )}
                  <ul className="mt-8 space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`mt-8 w-full py-4 px-6 rounded-xl text-center font-medium ${
                    tier.featured
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100 ring-1 ring-inset ring-gray-200'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}