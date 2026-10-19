import React from 'react';
import { AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface MedicalDisclaimerBoxProps {
  className?: string;
}

export const MedicalDisclaimerBox: React.FC<MedicalDisclaimerBoxProps> = ({
  className = ''
}) => {
  return (
    <aside
      className={`border border-stone-200 bg-stone-100/60 p-4 text-xs text-stone-600 ${className}`}
      aria-label="Medical and Health Information Boundaries"
    >
      <div className="flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-stone-900 tracking-tight">
            Medical & Educational Information Disclaimer
          </p>
          <p className="leading-relaxed">
            {SITE_CONFIG.medicalDisclaimerText}
          </p>
          <p className="text-stone-500 pt-1">
            Statements evaluated on this page have not been reviewed by the Food and Drug Administration (FDA) to diagnose, treat, cure, or prevent any medical condition.
          </p>
        </div>
      </div>
    </aside>
  );
};
