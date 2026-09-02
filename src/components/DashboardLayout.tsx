import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowLeft, 
  ChevronDown, 
  Building2, 
  Rocket, 
  Scale, 
  Settings, 
  UserCircle
} from 'lucide-react';
import EmpowerLogo, { EmpowerLogoMark } from './EmpowerLogo';

interface SidebarItem {
  name: string;
  icon: React.ElementType;
  id: string;
}

interface DashboardLayoutProps {
  currentRole: 'government' | 'startup' | 'expert' | 'admin';
  title: string;
  subtitle: string;
  sidebarItems: SidebarItem[];
  activeTab: string;
  setActiveTab: (id: string) => void;
  children: React.ReactNode;
}

const roleConfigs = {
  government: {
    name: 'Government Department',
    shortName: 'Government',
    icon: Building2,
    path: '/government',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    userName: 'Gov. Official (Jal Shakti)',
  },
  startup: {
    name: 'Startup Portal',
    shortName: 'Startup',
    icon: Rocket,
    path: '/startup',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    userName: 'AquaSmart Systems Team',
  },
  expert: {
    name: 'Expert / Evaluator',
    shortName: 'Expert',
    icon: Scale,
    path: '/expert',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    userName: 'Dr. A. Verma (IIT Madras)',
  },
  admin: {
    name: 'Platform Admin',
    shortName: 'Admin',
    icon: Settings,
    path: '/admin',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    userName: 'System Administrator',
  },
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  currentRole,
  title,
  subtitle,
  sidebarItems,
  activeTab,
  setActiveTab,
  children,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentConfig = roleConfigs[currentRole];
  const CurrentRoleIcon = currentConfig.icon;

  const handleRoleChange = (roleKey: 'government' | 'startup' | 'expert' | 'admin') => {
    setRoleDropdownOpen(false);
    navigate(roleConfigs[roleKey].path);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Top Demo Utility Bar & Navigation */}
      <header className="bg-navy-900 text-white sticky top-0 z-40 border-b border-navy-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left: Brand Logo & Public Link */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-navy-800 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              <EmpowerLogo href="/" size="sm" textColor="text-white" />

              <div className="hidden sm:block h-5 w-px bg-navy-700"></div>

              <Link
                to="/"
                className="text-xs font-medium text-navy-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Public Site</span>
              </Link>
            </div>

            {/* Right: Role Switcher & User Profile Pill */}
            <div className="flex items-center gap-3">
              
              {/* Role Switcher Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 border border-navy-700 text-xs font-semibold text-white transition-colors"
                >
                  <CurrentRoleIcon className="w-4 h-4 text-blue-400" />
                  <span className="hidden md:inline">Demo Role:</span>
                  <span className="text-blue-300">{currentConfig.shortName}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                {roleDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-1.5 z-50 animate-fade-in-scale">
                    <div className="px-3 py-2 border-b border-gray-100">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        Switch Hackathon Demo Role
                      </p>
                    </div>

                    {(Object.keys(roleConfigs) as Array<keyof typeof roleConfigs>).map((key) => {
                      const cfg = roleConfigs[key];
                      const Icon = cfg.icon;
                      const isActive = currentRole === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => handleRoleChange(key)}
                          className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center gap-2.5 transition-colors ${
                            isActive
                              ? 'bg-blue-50 text-blue-700 font-bold'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                          <span>{cfg.name}</span>
                        </button>
                      );
                    })}

                    <div className="border-t border-gray-100 pt-1.5 mt-1">
                      <Link
                        to="/login"
                        className="block px-3 py-1.5 text-xs text-gray-500 hover:text-navy-900 hover:bg-gray-50"
                      >
                        Exit to Role Selection →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* User Profile Pill */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-800/80 border border-navy-700/60 text-xs text-navy-200">
                <UserCircle className="w-4 h-4 text-blue-400" />
                <span className="font-medium truncate max-w-[150px]">{currentConfig.userName}</span>
              </div>

            </div>

          </div>
        </div>
      </header>

      {/* Main Container: Sidebar + Content */}
      <div className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col md:flex-row gap-6 lg:gap-8">
        
        {/* Desktop Sidebar Navigation */}
        <aside className="hidden md:block w-60 shrink-0">
          <div className="bg-white rounded-xl border border-gray-200/80 p-3 shadow-xs sticky top-24">
            
            {/* Role Header in Sidebar */}
            <div className="p-3 mb-2 rounded-lg bg-gray-50 border border-gray-100 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <CurrentRoleIcon className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Portal Active</p>
                <p className="text-xs font-bold text-navy-900 truncate">{currentConfig.shortName}</p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-gray-600 hover:text-navy-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* Prototype Notice */}
            <div className="mt-6 pt-4 border-t border-gray-100 px-2">
              <p className="text-[11px] text-gray-400 leading-tight">
                Empower India SIH Prototype · Demonstration Mode
              </p>
            </div>

          </div>
        </aside>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-navy-900/60 backdrop-blur-xs flex">
            <div className="bg-white w-64 p-4 h-full shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                  <div className="flex items-center gap-2">
                    <EmpowerLogoMark sizeClass="w-6 h-6" />
                    <span className="font-bold text-sm text-navy-900">Portal Navigation</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-lg text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'text-gray-600 hover:text-navy-900 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/"
                  className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-gray-600 bg-gray-100 rounded-lg"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Exit to Public Website</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Dashboard Main Content */}
        <main className="flex-grow min-w-0">
          
          {/* Dashboard Header Banner */}
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                {title}
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {subtitle}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${currentConfig.badgeColor}`}>
                <CurrentRoleIcon className="w-3.5 h-3.5" />
                <span>{currentConfig.name}</span>
              </span>
            </div>
          </div>

          {children}

        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;
