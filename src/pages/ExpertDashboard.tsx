import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ClipboardCheck, 
  FlaskConical, 
  CheckCircle2, 
  Scale, 
  Sparkles, 
  Building2, 
  UserCheck, 
  Clock, 
  ArrowRight, 
  X, 
  Save, 
  Sliders, 
  FileText
} from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

interface AssignedEvaluation {
  id: string;
  startupName: string;
  solutionTitle: string;
  challengeTitle: string;
  department: string;
  submittedDate: string;
  summary: string;
  status: 'Pending Review' | 'Evaluated';
  score?: number;
}

const initialEvaluations: AssignedEvaluation[] = [
  {
    id: 'eval-1',
    startupName: 'AquaSmart Systems Pvt Ltd',
    solutionTitle: 'IoT Acoustic Sensor Grid with Predictive Anomaly AI',
    challengeTitle: 'Smart Water Leakage Detection',
    department: 'Chennai Metropolitan Water Supply',
    submittedDate: 'Aug 28, 2026',
    summary: 'Proposes non-invasive acoustic sensors placed at 500m intervals along main feeder lines with edge AI processing to localize leaks within 0.8m accuracy.',
    status: 'Pending Review',
  },
  {
    id: 'eval-2',
    startupName: 'UrbanFlow Mobility Solutions',
    solutionTitle: 'Edge Computer Vision for Adaptive Signal Control',
    challengeTitle: 'AI Urban Traffic Flow Optimization',
    department: 'Directorate of Urban Land Transport',
    submittedDate: 'Aug 24, 2026',
    summary: 'Deploying low-latency camera analytics at 12 key intersections to dynamically adjust green light timers based on vehicle queues and ambulance priority.',
    status: 'Pending Review',
  },
  {
    id: 'eval-3',
    startupName: 'EcoSort Robotics',
    solutionTitle: 'High-Speed Spectroscopy Municipal Waste Segregator',
    challengeTitle: 'Intelligent Waste Segregation',
    department: 'Urban Local Body',
    submittedDate: 'Aug 20, 2026',
    summary: 'Robotic sorting arms using hyperspectral cameras to separate dry recyclable polymers from organic municipal solid waste with 95% throughput purity.',
    status: 'Pending Review',
  },
  {
    id: 'eval-4',
    startupName: 'CureConnect Healthtech',
    solutionTitle: 'Low-Bandwidth Tele-Diagnostics for PHCs',
    challengeTitle: 'Remote Public Health Monitoring',
    department: 'Public Health Department',
    submittedDate: 'Aug 14, 2026',
    summary: 'Offline-first digital diagnostic kit syncing over 2G GSM network to transmit vital ECG and blood glucose reports from rural primary health centres.',
    status: 'Evaluated',
    score: 88,
  },
];

const sidebarItems = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { id: 'evaluations', name: 'Assigned Evaluations', icon: ClipboardCheck },
  { id: 'pilots', name: 'Pilot Reviews', icon: FlaskConical },
  { id: 'completed', name: 'Completed Reviews', icon: CheckCircle2 },
];

const ExpertDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [evaluations, setEvaluations] = useState<AssignedEvaluation[]>(initialEvaluations);
  const [activeEval, setActiveEval] = useState<AssignedEvaluation | null>(null);

  // Scoring criteria state (0-100 scale per parameter)
  const [scores, setScores] = useState({
    innovation: 85,
    technicalFeasibility: 80,
    publicImpact: 90,
    scalability: 85,
    costEffectiveness: 75,
  });
  const [feedback, setFeedback] = useState('');

  // Calculate weighted total score out of 100
  // Innovation 20%, Technical Feasibility 20%, Public Impact 25%, Scalability 20%, Cost Effectiveness 15%
  const totalScore = Math.round(
    scores.innovation * 0.2 +
    scores.technicalFeasibility * 0.2 +
    scores.publicImpact * 0.25 +
    scores.scalability * 0.2 +
    scores.costEffectiveness * 0.15
  );

  const pendingCount = evaluations.filter(e => e.status === 'Pending Review').length;
  const completedCount = 23 + evaluations.filter(e => e.status === 'Evaluated').length;

  const handleOpenEvaluation = (item: AssignedEvaluation) => {
    setActiveEval(item);
    setScores({
      innovation: 85,
      technicalFeasibility: 80,
      publicImpact: 90,
      scalability: 85,
      costEffectiveness: 75,
    });
    setFeedback('Strong technical feasibility and clear field deployment plan. Recommended for pilot stage.');
  };

  const handleSaveEvaluation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeEval) return;

    setEvaluations(prev =>
      prev.map(item =>
        item.id === activeEval.id
          ? { ...item, status: 'Evaluated', score: totalScore }
          : item
      )
    );
    setActiveEval(null);
  };

  return (
    <DashboardLayout
      currentRole="expert"
      title="Expert Evaluation Portal"
      subtitle="Evaluate innovative solutions using transparent criteria."
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      
      {/* Top Banner Greeting */}
      <div className="bg-white rounded-xl border border-gray-200/80 p-5 sm:p-6 shadow-xs mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
              Technical Evaluation Panel · Smart Infrastructure
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">
            Welcome, Dr. A. Verma
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Senior Evaluator · IIT Madras / National Innovation Council Panel
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-50 text-purple-700 border border-purple-200 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{pendingCount} Pending Reviews</span>
          </span>
        </div>
      </div>

      {/* 4 Demo Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
        
        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Assigned</span>
            <ClipboardCheck className="w-4 h-4 text-purple-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">8</p>
          <span className="text-[10px] text-gray-400 font-medium">This cycle</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Pending Review</span>
            <Clock className="w-4 h-4 text-amber-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">{pendingCount}</p>
          <span className="text-[10px] text-amber-600 font-medium">Requires scoring</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Completed</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">{completedCount}</p>
          <span className="text-[10px] text-emerald-600 font-medium">Historical evaluations</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">Pilot Reviews</span>
            <FlaskConical className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-navy-900">3</p>
          <span className="text-[10px] text-blue-600 font-medium">Milestone audits</span>
        </div>

      </div>

      {/* PENDING EVALUATIONS TABLE */}
      <div className="bg-white rounded-xl border border-gray-200/80 shadow-xs overflow-hidden mb-8">
        
        <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-navy-900">
              Assigned Startup Proposals for Evaluation
            </h3>
            <p className="text-xs text-gray-500">
              Evaluate and score startup technical proposals based on the standardized scoring matrix.
            </p>
          </div>

          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gray-100 text-gray-700 self-start sm:self-auto">
            Evaluation Window: Active
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-gray-50/80 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              <tr>
                <th className="px-5 py-3">Startup & Solution</th>
                <th className="px-4 py-3">Challenge & Department</th>
                <th className="px-4 py-3">Submitted</th>
                <th className="px-4 py-3">Status / Score</th>
                <th className="px-5 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {evaluations.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                  <td className="px-5 py-3.5">
                    <p className="font-bold text-navy-900">{item.solutionTitle}</p>
                    <span className="text-xs text-blue-600 font-medium">{item.startupName}</span>
                  </td>
                  <td className="px-4 py-3.5 text-gray-600">
                    <span className="font-medium text-navy-900 block">{item.challengeTitle}</span>
                    <span className="text-xs text-gray-400">{item.department}</span>
                  </td>
                  <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">
                    {item.submittedDate}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    {item.status === 'Evaluated' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Score: {item.score}/100</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        <Clock className="w-3 h-3 text-amber-500" />
                        Pending Review
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <button
                      type="button"
                      onClick={() => handleOpenEvaluation(item)}
                      className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors shadow-2xs ${
                        item.status === 'Evaluated'
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                    >
                      <span>{item.status === 'Evaluated' ? 'Re-Evaluate' : 'Evaluate'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* EVALUATION MODAL / SCORING SCREEN (INTERACTIVE DEMO) */}
      {activeEval && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-xs animate-fade-in-scale">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative max-h-[92vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-3 border-b border-gray-100 mb-5">
              <div>
                <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200 uppercase tracking-wider mb-1 inline-block">
                  Expert Scoring Matrix
                </span>
                <h3 className="text-xl font-bold text-navy-900">{activeEval.solutionTitle}</h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Startup: <strong className="text-navy-900">{activeEval.startupName}</strong> · Challenge: {activeEval.challengeTitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveEval(null)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Solution Summary Briefing */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 mb-6 text-xs sm:text-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                Solution Proposal Summary
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {activeEval.summary}
              </p>
            </div>

            {/* Scoring Sliders & Weighted Criteria */}
            <form onSubmit={handleSaveEvaluation} className="space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center justify-between">
                <span>Weighted Scoring Criteria</span>
                <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded text-xs">
                  Real-time Total: <strong className="text-sm">{totalScore} / 100</strong>
                </span>
              </h4>

              <div className="space-y-4 bg-white p-5 rounded-xl border border-gray-200">
                
                {/* Innovation (20%) */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-navy-900 mb-1">
                    <span>Innovation & Novelty (Weight: 20%)</span>
                    <span className="text-purple-600">{scores.innovation} / 100</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={scores.innovation}
                    onChange={(e) => setScores({ ...scores, innovation: Number(e.target.value) })}
                    className="w-full accent-purple-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Technical Feasibility (20%) */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-navy-900 mb-1">
                    <span>Technical Feasibility & Readiness (Weight: 20%)</span>
                    <span className="text-purple-600">{scores.technicalFeasibility} / 100</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={scores.technicalFeasibility}
                    onChange={(e) => setScores({ ...scores, technicalFeasibility: Number(e.target.value) })}
                    className="w-full accent-purple-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Public Impact (25%) */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-navy-900 mb-1">
                    <span>Public Impact & Citizen Benefit (Weight: 25%)</span>
                    <span className="text-purple-600">{scores.publicImpact} / 100</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={scores.publicImpact}
                    onChange={(e) => setScores({ ...scores, publicImpact: Number(e.target.value) })}
                    className="w-full accent-purple-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Scalability (20%) */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-navy-900 mb-1">
                    <span>Scalability Across Municipalities (Weight: 20%)</span>
                    <span className="text-purple-600">{scores.scalability} / 100</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={scores.scalability}
                    onChange={(e) => setScores({ ...scores, scalability: Number(e.target.value) })}
                    className="w-full accent-purple-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Cost Effectiveness (15%) */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-navy-900 mb-1">
                    <span>Cost Effectiveness & Procurement Viability (Weight: 15%)</span>
                    <span className="text-purple-600">{scores.costEffectiveness} / 100</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={scores.costEffectiveness}
                    onChange={(e) => setScores({ ...scores, costEffectiveness: Number(e.target.value) })}
                    className="w-full accent-purple-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
                  />
                </div>

              </div>

              {/* Remarks */}
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Evaluator Remarks & Recommendations
                </label>
                <textarea
                  rows={3}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Enter technical observations, pilot risk factors, and recommendation for department..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setActiveEval(null)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors shadow-xs"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Evaluation ({totalScore}/100)</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </DashboardLayout>
  );
};

export default ExpertDashboard;
