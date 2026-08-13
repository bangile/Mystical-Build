import React from 'react';
import { Compass, FileCode2, HardHat, Key, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/mockData';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Compass className="w-5 h-5 text-[#735c00]" />;
      case 1: return <FileCode2 className="w-5 h-5 text-[#735c00]" />;
      case 2: return <HardHat className="w-5 h-5 text-[#735c00]" />;
      case 3: return <Key className="w-5 h-5 text-[#735c00]" />;
      default: return <Compass className="w-5 h-5 text-[#735c00]" />;
    }
  };

  return (
    <section 
      id="process"
      className="py-20 sm:py-28 bg-[#f8f9fa] border-b border-[#e1e3e4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3f4f5] border border-[#d0c5af]/50 text-[#735c00] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Rigorous Methodology</span>
          </div>

          <h2 
            id="process-heading"
            className="font-heading font-bold text-3xl sm:text-4xl text-[#191c1d] tracking-tight"
          >
            The 4-Stage Master Build Process
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-[#4d4635] text-base leading-relaxed">
            From initial topographical surveying to white-glove handover, every phase is engineered with transparent milestones and strict quality assurance.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              id={`process-step-${step.stepNumber}`}
              className="bg-white rounded-lg p-6 sm:p-7 border border-[#e1e3e4] hover:border-[#d4af37]/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-heading font-extrabold text-3xl text-[#d0c5af] group-hover:text-[#735c00] transition-colors">
                    {step.stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#edeeef] group-hover:bg-[#ffe088]/30 flex items-center justify-center transition-colors">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#191c1d] mb-1.5 group-hover:text-[#735c00] transition-colors">
                  {step.title}
                </h3>
                
                <span className="text-xs text-[#735c00] font-medium block mb-3">
                  {step.subtitle}
                </span>

                <p className="text-[#4d4635] text-xs sm:text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div>
                {/* Deliverables List */}
                <div className="pt-4 border-t border-stone-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7f7663] block mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#4e6073]">
                    {step.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-[#7f7663]">
                  <span>Estimated Pace:</span>
                  <span className="font-semibold text-[#191c1d]">{step.durationEstimate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
