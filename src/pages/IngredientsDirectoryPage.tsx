import React, { useState } from 'react';
import { INGREDIENTS_DATABASE } from '../data/ingredients';
import { EvidenceBadge } from '../components/EvidenceBadge';
import { Search, ExternalLink, ShieldCheck, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { MedicalDisclaimerBox } from '../components/MedicalDisclaimerBox';

interface IngredientsDirectoryPageProps {
  onNavigate: (path: string) => void;
}

export const IngredientsDirectoryPage: React.FC<IngredientsDirectoryPageProps> = ({
  onNavigate
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<'all' | 'A' | 'B'>('all');

  const filtered = INGREDIENTS_DATABASE.filter(ing => {
    const matchesQuery =
      ing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ing.primaryCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ing.aliases.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesGrade = selectedGrade === 'all' || ing.evidenceGrade === selectedGrade;

    return matchesQuery && matchesGrade;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="border border-stone-200 bg-white p-6 sm:p-10 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-800 font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>NIH Office of Dietary Supplements & PubMed Grounded</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
          Scientific Ingredient Evidence Database
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl">
          Clinical evaluations of active dietary supplement compounds. We examine human trial evidence grades, standard effective dosages, documented biochemical mechanisms, and common unsubstantiated marketing claims.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-stone-50 p-4 border border-stone-200">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by compound name or function..."
            className="w-full bg-white border border-stone-300 pl-9 pr-3 py-2 text-xs text-stone-900 focus:outline-emerald-700"
          />
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto text-xs">
          <span className="text-stone-500 font-mono">Evidence Filter:</span>
          <button
            onClick={() => setSelectedGrade('all')}
            className={`px-3 py-1 font-medium border ${
              selectedGrade === 'all'
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white text-stone-700 border-stone-200'
            }`}
          >
            All Grades
          </button>
          <button
            onClick={() => setSelectedGrade('A')}
            className={`px-3 py-1 font-medium border ${
              selectedGrade === 'A'
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white text-stone-700 border-stone-200'
            }`}
          >
            Grade A (Meta-Analyses)
          </button>
          <button
            onClick={() => setSelectedGrade('B')}
            className={`px-3 py-1 font-medium border ${
              selectedGrade === 'B'
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white text-stone-700 border-stone-200'
            }`}
          >
            Grade B (RCTs)
          </button>
        </div>
      </div>

      {/* Ingredients List */}
      <div className="space-y-8">
        {filtered.map(ing => (
          <article
            key={ing.id}
            id={ing.id}
            className="border border-stone-200 bg-white p-6 sm:p-8 space-y-6 scroll-mt-20 shadow-xs"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-stone-100 pb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-2xl font-serif font-bold text-stone-900">
                    {ing.name}
                  </h2>
                  <EvidenceBadge grade={ing.evidenceGrade} />
                </div>
                <div className="text-xs text-stone-500 flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-stone-700">{ing.primaryCategory}</span>
                  <span aria-hidden="true">·</span>
                  <span>Aliases: {ing.aliases.join(', ')}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{ing.totalPubMedStudies}+ PubMed Trials</span>
                </div>
              </div>

              <a
                href={ing.nihFactSheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-emerald-800 border border-stone-200 px-3 py-1.5 shrink-0 self-start sm:self-auto bg-stone-50 hover:bg-stone-100 transition-colors"
              >
                <span>NIH Fact Sheet</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Clinically Studied Dose Banner */}
            <div className="p-3.5 bg-emerald-50/60 border border-emerald-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-mono uppercase font-bold text-emerald-950 block text-[11px]">
                  Clinically Effective Human Daily Dose:
                </span>
                <span className="text-sm font-semibold text-emerald-900 font-mono">
                  {ing.clinicallyStudiedDose}
                </span>
              </div>
              <span className="text-[11px] text-emerald-800">
                Benchmark based on double-blind peer-reviewed RCTs.
              </span>
            </div>

            {/* Two Column: Proven vs Unsupported Claims */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {/* Proven */}
              <div className="p-4 border border-stone-200 bg-stone-50/50 space-y-2">
                <span className="font-semibold text-stone-900 uppercase font-mono tracking-wider flex items-center gap-1.5 text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Clinically Substantiated Benefits</span>
                </span>
                <ul className="space-y-1.5 text-stone-700">
                  {ing.provenBenefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Unsupported Claims */}
              <div className="p-4 border border-stone-200 bg-stone-50/50 space-y-2">
                <span className="font-semibold text-stone-900 uppercase font-mono tracking-wider flex items-center gap-1.5 text-rose-800">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>Common Commercial Exaggerations to Disregard</span>
                </span>
                <ul className="space-y-1.5 text-stone-600">
                  {ing.unsupportedClaims.map((u, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mechanism of Action */}
            <div className="text-xs space-y-1.5">
              <span className="font-semibold text-stone-900 font-mono uppercase tracking-wider block">
                Biochemical Mechanism of Action:
              </span>
              <p className="text-stone-700 leading-relaxed">
                {ing.mechanismsOfAction}
              </p>
            </div>

            {/* Safety & Contraindications */}
            <div className="p-4 bg-stone-100 border border-stone-200 text-xs space-y-2">
              <div className="flex items-center gap-2 font-semibold text-stone-900 font-mono uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-stone-600" />
                <span>Safety Profile & Important Contraindications</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-stone-700">
                <div>
                  <strong className="block text-stone-800 mb-0.5">Known Side Effects:</strong>
                  <ul className="list-disc pl-4 space-y-0.5 text-stone-600">
                    {ing.knownSideEffects.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong className="block text-stone-800 mb-0.5">Contraindications:</strong>
                  <ul className="list-disc pl-4 space-y-0.5 text-stone-600">
                    {ing.contraindications.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <MedicalDisclaimerBox />
    </div>
  );
};
