import React from 'react';
import { EvidenceGrade } from '../types';

interface EvidenceBadgeProps {
  grade: EvidenceGrade;
  size?: 'sm' | 'md';
  showLabel?: boolean;
}

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({
  grade,
  size = 'md',
  showLabel = true
}) => {
  const gradeConfig: Record<
    EvidenceGrade,
    { label: string; text: string; bg: string; border: string; desc: string }
  > = {
    A: {
      label: 'Grade A Evidence',
      text: 'text-emerald-800',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      desc: 'Systematic Reviews & Meta-Analyses of Multiple Randomized Human Trials'
    },
    B: {
      label: 'Grade B Evidence',
      text: 'text-teal-800',
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      desc: 'Double-Blind, Placebo-Controlled Human Clinical Trials'
    },
    C: {
      label: 'Grade C Evidence',
      text: 'text-amber-800',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      desc: 'Observational Studies, Preliminary Human Data, or In Vitro Mechanisms'
    },
    D: {
      label: 'Grade D Evidence',
      text: 'text-rose-800',
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      desc: 'Conflicting Results, Underpowered Studies, or Insufficient Peer-Reviewed Proof'
    }
  };

  const config = gradeConfig[grade];

  return (
    <span
      className={`inline-flex items-center gap-1.5 border font-medium ${config.bg} ${config.border} ${config.text} ${
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs'
      }`}
      title={config.desc}
    >
      <span className="font-bold tracking-tight font-mono">[{grade}]</span>
      {showLabel && <span>{config.label}</span>}
    </span>
  );
};
