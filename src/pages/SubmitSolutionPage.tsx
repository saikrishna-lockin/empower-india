import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Building2, 
  MapPin, 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Info,
  Layers,
  FileCheck
} from 'lucide-react';

interface FormState {
  startupName: string;
  contactPerson: string;
  email: string;
  website: string;
  industry: string;
  eligibilityStatus: string;
  solutionTitle: string;
  solutionDescription: string;
  keyTechnology: string;
  publicImpact: string;
  pilotDuration: string;
  pilotRequirements: string;
  measurableOutcomes: string;
}

interface FormErrors {
  startupName?: string;
  contactPerson?: string;
  email?: string;
  solutionTitle?: string;
  solutionDescription?: string;
  publicImpact?: string;
}

const SubmitSolutionPage = () => {
  const [formData, setFormData] = useState<FormState>({
    startupName: '',
    contactPerson: '',
    email: '',
    website: '',
    industry: 'Water Management & CleanTech',
    eligibilityStatus: 'Startup India Recognised',
    solutionTitle: '',
    solutionDescription: '',
    keyTechnology: '',
    publicImpact: '',
    pilotDuration: '3–6 Months',
    pilotRequirements: '',
    measurableOutcomes: '',
  });

  const [companyProfileFile, setCompanyProfileFile] = useState<string | null>(null);
  const [proposalFile, setProposalFile] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.startupName.trim()) {
      newErrors.startupName = 'Startup Name is required';
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact Person is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.solutionTitle.trim()) {
      newErrors.solutionTitle = 'Solution Title is required';
    }

    if (!formData.solutionDescription.trim()) {
      newErrors.solutionDescription = 'Please describe how your solution addresses this challenge';
    }

    if (!formData.publicImpact.trim()) {
      newErrors.publicImpact = 'Expected Public Impact is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 flex-wrap">
          <Link to="/" className="hover:text-navy-900 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link to="/challenges" className="hover:text-navy-900 transition-colors">Challenges</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link to="/challenges/c1" className="hover:text-navy-900 transition-colors">Smart Water Leakage Detection</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-blue-600 font-medium">Submit Solution</span>
        </nav>

        {!isSubmitted ? (
          <div>
            {/* Page Header */}
            <div className="mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-blue-600 uppercase mb-2">
                STARTUP SUBMISSION
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-2">
                Submit Your Solution
              </h1>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
                Present your solution to a government challenge and move toward evaluation and pilot.
              </p>
            </div>

            {/* Selected Challenge Card */}
            <div className="bg-white rounded-xl border border-gray-200/80 p-5 sm:p-6 shadow-xs mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-gray-100 mb-3.5">
                <div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    Target Government Challenge
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-navy-900">
                    Smart Water Leakage Detection
                  </h2>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Open for Solutions
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Department:</strong> Chennai Metropolitan Water Supply</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Category:</strong> Water Management (Tamil Nadu)</span>
                </div>
              </div>
            </div>

            {/* Submission Form */}
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              
              {/* SECTION 1 — STARTUP INFORMATION */}
              <div className="bg-white rounded-xl border border-gray-200/80 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100 mb-6">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center">
                    01
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">
                    Startup Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Startup Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="startupName"
                      value={formData.startupName}
                      onChange={handleChange}
                      placeholder="e.g. AquaSmart Systems Pvt Ltd"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border ${
                        errors.startupName ? 'border-red-400 bg-red-50/20' : 'border-gray-200 bg-gray-50/50'
                      } focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
                    />
                    {errors.startupName && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.startupName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Contact Person <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar (Founder & CEO)"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border ${
                        errors.contactPerson ? 'border-red-400 bg-red-50/20' : 'border-gray-200 bg-gray-50/50'
                      } focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
                    />
                    {errors.contactPerson && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.contactPerson}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. contact@aquasmart.in"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-gray-200 bg-gray-50/50'
                      } focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://aquasmart.in"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Industry / Category
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      placeholder="e.g. Water Management, Cleantech"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Eligibility Status
                    </label>
                    <select
                      name="eligibilityStatus"
                      value={formData.eligibilityStatus}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    >
                      <option value="Startup India Recognised">Startup India Recognised</option>
                      <option value="Recognition Pending">Recognition Pending</option>
                      <option value="Other Eligible Entity">Other Eligible Entity</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-5 p-3 rounded-lg bg-blue-50/60 border border-blue-100 text-xs text-blue-800">
                  <Info className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Eligibility information is subject to verification.</span>
                </div>
              </div>

              {/* SECTION 2 — YOUR SOLUTION */}
              <div className="bg-white rounded-xl border border-gray-200/80 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100 mb-6">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center">
                    02
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">
                    Your Solution
                  </h3>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Solution Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="solutionTitle"
                      value={formData.solutionTitle}
                      onChange={handleChange}
                      placeholder="e.g. IoT Acoustic Sensor Grid with Predictive Anomaly AI"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border ${
                        errors.solutionTitle ? 'border-red-400 bg-red-50/20' : 'border-gray-200 bg-gray-50/50'
                      } focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
                    />
                    {errors.solutionTitle && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.solutionTitle}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      How does your solution address this challenge? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="solutionDescription"
                      rows={4}
                      value={formData.solutionDescription}
                      onChange={handleChange}
                      placeholder="Describe your technical approach, architecture, hardware/software specifications, and how it solves pipe leakages..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border ${
                        errors.solutionDescription ? 'border-red-400 bg-red-50/20' : 'border-gray-200 bg-gray-50/50'
                      } focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all leading-relaxed`}
                    ></textarea>
                    {errors.solutionDescription && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.solutionDescription}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Key Technology / Features
                    </label>
                    <textarea
                      name="keyTechnology"
                      rows={3}
                      value={formData.keyTechnology}
                      onChange={handleChange}
                      placeholder="e.g. Edge computing acoustic sensors, LoRaWAN wireless telemetry, GIS mapping dashboard, sub-meter leak localization..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all leading-relaxed"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Expected Public Impact <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="publicImpact"
                      rows={3}
                      value={formData.publicImpact}
                      onChange={handleChange}
                      placeholder="Quantifiable benefits for the municipal department, estimated water conservation, cost reductions, and citizen benefits..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border ${
                        errors.publicImpact ? 'border-red-400 bg-red-50/20' : 'border-gray-200 bg-gray-50/50'
                      } focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all leading-relaxed`}
                    ></textarea>
                    {errors.publicImpact && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.publicImpact}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* SECTION 3 — PILOT PROPOSAL */}
              <div className="bg-white rounded-xl border border-gray-200/80 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100 mb-6">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center">
                    03
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">
                    Pilot Proposal
                  </h3>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Proposed Pilot Duration
                    </label>
                    <select
                      name="pilotDuration"
                      value={formData.pilotDuration}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    >
                      <option value="1–3 Months">1–3 Months</option>
                      <option value="3–6 Months">3–6 Months</option>
                      <option value="6–12 Months">6–12 Months</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Pilot Requirements
                    </label>
                    <textarea
                      name="pilotRequirements"
                      rows={3}
                      value={formData.pilotRequirements}
                      onChange={handleChange}
                      placeholder="Access to municipal test zone pipelines, historical flow data, ground team coordination, sensor mounting permits..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all leading-relaxed"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Expected Measurable Outcomes
                    </label>
                    <textarea
                      name="measurableOutcomes"
                      rows={3}
                      value={formData.measurableOutcomes}
                      onChange={handleChange}
                      placeholder="e.g. 90%+ leak detection accuracy, alert latency < 15 minutes, 20% estimated reduction in non-revenue water loss during pilot..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all leading-relaxed"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* SECTION 4 — SUPPORTING DOCUMENTS */}
              <div className="bg-white rounded-xl border border-gray-200/80 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100 mb-6">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center">
                    04
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900">
                      Supporting Documents
                    </h3>
                    <p className="text-xs text-gray-500">Frontend prototype upload placeholders (simulated).</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Company Profile Upload Placeholder */}
                  <div className="border-2 border-dashed border-gray-200 hover:border-blue-300 rounded-xl p-5 text-center transition-colors bg-gray-50/40 flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h4 className="text-xs font-bold text-navy-900 mb-1">Company Profile</h4>
                    <p className="text-[11px] text-gray-500 mb-3">PDF or DOCX (Max 10MB)</p>
                    
                    {companyProfileFile ? (
                      <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{companyProfileFile}</span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setCompanyProfileFile('AquaSmart_Company_Profile.pdf')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50 shadow-2xs transition-colors"
                      >
                        <UploadCloud className="w-3.5 h-3.5 text-blue-600" />
                        <span>Select File</span>
                      </button>
                    )}
                  </div>

                  {/* Solution Proposal Upload Placeholder */}
                  <div className="border-2 border-dashed border-gray-200 hover:border-blue-300 rounded-xl p-5 text-center transition-colors bg-gray-50/40 flex flex-col items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <h4 className="text-xs font-bold text-navy-900 mb-1">Solution Proposal</h4>
                    <p className="text-[11px] text-gray-500 mb-3">Detailed Technical PDF (Max 25MB)</p>
                    
                    {proposalFile ? (
                      <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{proposalFile}</span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setProposalFile('Water_Leakage_Proposal_v1.pdf')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50 shadow-2xs transition-colors"
                      >
                        <UploadCloud className="w-3.5 h-3.5 text-blue-600" />
                        <span>Select File</span>
                      </button>
                    )}
                  </div>

                </div>
              </div>

              {/* FINAL CTA BUTTON */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto min-w-[280px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-colors shadow-md hover:shadow-lg"
                >
                  <span>Submit Solution</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-gray-500 mt-3 max-w-md mx-auto leading-relaxed">
                  Your submission will undergo eligibility screening and expert evaluation.
                </p>
              </div>

            </form>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="bg-white rounded-2xl border border-gray-200/80 p-8 sm:p-12 shadow-sm text-center animate-fade-in-scale">
            
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-xs">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 mb-3">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Status: Under Screening</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-2">
              Solution Submitted
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto mb-8 leading-relaxed">
              Your solution for <strong className="text-navy-900 font-semibold">Smart Water Leakage Detection</strong> has been submitted for eligibility screening.
            </p>

            {/* Next Steps Card */}
            <div className="max-w-xl mx-auto bg-gray-50 rounded-xl p-6 border border-gray-200 text-left mb-8">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                Next Steps in the Procurement Journey
              </h3>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-gray-100 shadow-2xs">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Eligibility Screening</h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      Verification of DPIIT recognition and compliance with public procurement eligibility standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-gray-100 shadow-2xs">
                  <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 font-bold text-xs flex items-center justify-center shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Expert Evaluation</h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      Technical and impact review by department panel and independent sector experts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-gray-100 shadow-2xs">
                  <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 font-bold text-xs flex items-center justify-center shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Pilot Selection</h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      Selected startups enter pilot agreements for field deployment and validation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Challenges Navigation */}
            <div>
              <Link
                to="/challenges"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-xs"
              >
                <span>Back to Challenges</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default SubmitSolutionPage;
