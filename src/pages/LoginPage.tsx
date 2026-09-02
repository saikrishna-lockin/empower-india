import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Rocket, 
  Scale, 
  Settings, 
  ArrowRight, 
  Shield, 
  ArrowLeft,
  Sparkles
} from 'lucide-react';

const roleCards = [
  {
    id: 'government',
    role: 'Government Department',
    icon: Building2,
    emoji: '🏛️',
    description: 'Publish challenges, evaluate solutions and manage pilots.',
    path: '/government',
    color: 'border-blue-200 hover:border-blue-500 hover:bg-blue-50/30',
    btnColor: 'bg-blue-600 hover:bg-blue-700',
    iconBg: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'startup',
    role: 'Startup',
    icon: Rocket,
    emoji: '🚀',
    description: 'Discover government challenges and submit solutions.',
    path: '/startup',
    color: 'border-emerald-200 hover:border-emerald-500 hover:bg-emerald-50/30',
    btnColor: 'bg-emerald-600 hover:bg-emerald-700',
    iconBg: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: 'expert',
    role: 'Expert / Evaluator',
    icon: Scale,
    emoji: '⚖️',
    description: 'Evaluate solutions and validate pilot outcomes.',
    path: '/expert',
    color: 'border-purple-200 hover:border-purple-500 hover:bg-purple-50/30',
    btnColor: 'bg-purple-600 hover:bg-purple-700',
    iconBg: 'bg-purple-50 text-purple-600',
  },
  {
    id: 'admin',
    role: 'Platform Admin',
    icon: Settings,
    emoji: '⚙️',
    description: 'Manage users, verification and platform activity.',
    path: '/admin',
    color: 'border-amber-200 hover:border-amber-500 hover:bg-amber-50/30',
    btnColor: 'bg-amber-600 hover:bg-amber-700',
    iconBg: 'bg-amber-50 text-amber-600',
  },
];

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
        <Link to="/" className="inline-flex items-center gap-2 mb-4">
          <Shield className="h-10 w-10 text-blue-600" />
          <span className="font-extrabold text-2xl text-navy-900 tracking-wide">Empower India</span>
        </Link>
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>SIH Hackathon Demonstration Gateway</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-2">
          Select Demo Portal Role
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
          Experience Empower India from each stakeholder's perspective. Select a role below to explore its operational dashboard.
        </p>
      </div>

      {/* 4 Role Selection Cards Grid */}
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10">
        {roleCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className={`bg-white rounded-2xl border-2 ${card.color} p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl" role="img" aria-label={card.role}>
                    {card.emoji}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {card.role}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div>
                <Link
                  to={card.path}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-semibold text-xs sm:text-sm transition-all shadow-xs ${card.btnColor}`}
                >
                  <span>Continue as {card.role}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Info & Back to Home */}
      <div className="max-w-md mx-auto text-center space-y-4">
        <div className="p-3 bg-white rounded-xl border border-gray-200/80 text-xs text-gray-500 leading-relaxed shadow-2xs">
          <strong>Demo Gateway Note:</strong> Authentication is bypassed for direct prototype evaluation and judges' inspection.
        </div>

        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-navy-700 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Public Website</span>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;
