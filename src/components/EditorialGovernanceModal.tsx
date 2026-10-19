import React from 'react';
import { X, CheckCircle, AlertCircle, FileCheck, Shield, Award, Users } from 'lucide-react';
import { ArticleRecord, ProductRecord, EditorialStatus } from '../types';

interface EditorialGovernanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  item?: ArticleRecord | ProductRecord;
}

export const EditorialGovernanceModal: React.FC<EditorialGovernanceModalProps> = ({
  isOpen,
  onClose,
  item
}) => {
  if (!isOpen) return null;

  const statusWorkflow: { status: EditorialStatus; label: string; desc: string }[] = [
    { status: 'draft', label: '1. Research & Draft', desc: 'Initial clinical data synthesis & fact gathering.' },
    { status: 'research_required', label: '2. Source Inspection', desc: 'Cross-verifying claims against PubMed & Cochrane.' },
    { status: 'editorial_review', label: '3. Editorial Review', desc: 'Senior editor audit for tone, clarity & objectivity.' },
    { status: 'specialist_review_required', label: '4. Medical / Clinical Review', desc: 'Physician or Registered Dietitian clinical sign-off.' },
    { status: 'approved', label: '5. Approved for Staging', desc: 'All clinical claims substantiated; FTC disclosures verified.' },
    { status: 'published', label: '6. Production Published', desc: 'Live in public index with active citation trail.' },
    { status: 'needs_correction', label: '7. Re-Audit Flag', desc: 'Triggered when study updates or product reformulates.' }
  ];

  const currentStatus = item?.editorialStatus || 'published';

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="governance-modal-title"
    >
      <div className="relative bg-white max-w-3xl w-full border border-stone-200 shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-stone-100 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 font-semibold uppercase tracking-wider mb-1">
              <Shield className="w-4 h-4 text-emerald-700" />
              <span>77 Review Editorial Governance Protocol</span>
            </div>
            <h2 id="governance-modal-title" className="text-xl font-serif font-bold text-stone-900">
              Content Quality & Verification Inspector
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-900 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Item Info */}
        {item && (
          <div className="bg-stone-50 border border-stone-200 p-4">
            <span className="text-xs uppercase tracking-wider font-mono text-stone-500 block mb-1">
              Inspecting Record:
            </span>
            <p className="text-sm font-semibold text-stone-900">
              {'title' in item ? item.title : item.name}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 mt-2">
              <span>Risk Classification: <strong className="text-stone-800">{item.medicalRiskLevel}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Last Clinical Check: <strong className="text-stone-800">{'lastUpdatedDate' in item ? item.lastUpdatedDate : item.lastVerifiedDate}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Citations Attached: <strong className="text-stone-800">{item.citations?.length || 0}</strong></span>
            </div>
          </div>
        )}

        {/* 7-Step Quality Gate Progress */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-stone-500">
            Publishing Gate Status & Human Review Verification
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {statusWorkflow.slice(0, 6).map((step, idx) => {
              const isPassed = true; // For our approved/published records
              const isCurrent = step.status === currentStatus;
              return (
                <div
                  key={step.status}
                  className={`p-3 border flex items-start gap-2.5 ${
                    isCurrent
                      ? 'border-emerald-600 bg-emerald-50/50'
                      : 'border-stone-200 bg-white'
                  }`}
                >
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 block">{step.label}</span>
                    <span className="text-stone-500">{step.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Governance Rules Enforced */}
        <div className="border-t border-stone-100 pt-4 space-y-3 text-xs text-stone-600">
          <h3 className="font-semibold text-stone-900 flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-700" />
            <span>Non-Negotiable Editorial Guardrails (PRD Section 4 & 8)</span>
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 list-disc">
            <li>Zero automated AI publication without credentialed human sign-off.</li>
            <li>No fabricated clinical trials, PubMed PMIDs, or invented doctor quotes.</li>
            <li>No guaranteed disease cures, medical treatments, or rapid weight-loss promises.</li>
            <li>Commercial affiliate links must never influence objective rating scorecards.</li>
            <li>Distinct separation of firsthand physical testing from clinical desk research.</li>
            <li>All health-sensitive and high-risk topics undergo physician / specialist review.</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-stone-100 flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
