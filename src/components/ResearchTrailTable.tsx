import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, AlertTriangle, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { ResearchCitation } from '../types';

interface ResearchTrailTableProps {
  citations: ResearchCitation[];
  title?: string;
}

export const ResearchTrailTable: React.FC<ResearchTrailTableProps> = ({
  citations,
  title = 'Documented Research Trail & Primary Evidence'
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (!citations || citations.length === 0) {
    return null;
  }

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section className="my-10 border border-stone-200 bg-white" aria-labelledby="research-trail-heading">
      <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-50/60 flex items-center justify-between">
        <div>
          <h3 id="research-trail-heading" className="text-sm font-semibold tracking-tight text-stone-900 flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-700" />
            <span>{title}</span>
          </h3>
          <p className="text-xs text-stone-500 mt-0.5">
            Peer-reviewed studies, systematic reviews, and clinical agency sources verifying claims made in this analysis.
          </p>
        </div>
        <span className="text-xs font-mono tabular-nums text-stone-500 font-medium">
          {citations.length} Verified Sources
        </span>
      </div>

      <div className="divide-y divide-stone-100">
        {citations.map((cite, index) => {
          const isExpanded = expandedId === cite.id;
          return (
            <div key={cite.id} className="p-4 hover:bg-stone-50/40 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                    <span className="font-mono font-medium text-stone-400">[{index + 1}]</span>
                    <span className="font-semibold text-stone-800">{cite.sourceType}</span>
                    <span aria-hidden="true">·</span>
                    <span>Tier {cite.hierarchyTier} Hierarchy</span>
                    <span aria-hidden="true">·</span>
                    <span>Verified {cite.lastCheckedDate}</span>
                  </div>

                  <h4 className="text-sm font-medium text-stone-900 leading-snug">
                    {cite.title}
                  </h4>

                  <p className="text-xs text-stone-600">
                    <span className="italic">{cite.authors}</span> — <strong className="font-medium text-stone-700">{cite.journal}</strong> ({cite.year})
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={cite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-stone-500 hover:text-emerald-700 hover:bg-stone-100 transition-colors"
                    title="Open PubMed / Primary Source"
                    aria-label={`Open primary source for ${cite.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => toggleExpand(cite.id)}
                    className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                    aria-expanded={isExpanded}
                    aria-label="Toggle citation details"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Study Findings & Limitations Drawer */}
              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-stone-100 text-xs space-y-2 bg-stone-50/80 p-3">
                  <div className="flex items-start gap-2">
                    {cite.directlySupportsClaim ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <span className="font-semibold text-stone-900">Direct Findings: </span>
                      <span className="text-stone-700">{cite.keyFindings}</span>
                    </div>
                  </div>

                  <div className="pl-6 text-stone-500">
                    <span className="font-semibold text-stone-700">Documented Study Limitations: </span>
                    <span>{cite.limitations}</span>
                  </div>

                  <div className="pl-6 pt-1 flex items-center gap-4 text-stone-500 font-mono">
                    {cite.pmid && <span>PMID: {cite.pmid}</span>}
                    {cite.doi && <span>DOI: {cite.doi}</span>}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
