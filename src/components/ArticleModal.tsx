import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  Heart,
  Bookmark,
  Share2,
  Check,
  Copy,
  BookOpen,
  Sparkles,
  ArrowLeft,
  User,
} from 'lucide-react';
import { BlogPost, ProfileData } from '../types';

interface ArticleModalProps {
  post: BlogPost | null;
  profile: ProfileData;
  onClose: () => void;
  onToggleLike: (postId: string) => void;
  onToggleBookmark: (postId: string) => void;
  isLiked: boolean;
  isBookmarked: boolean;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  post,
  profile,
  onClose,
  onToggleLike,
  onToggleBookmark,
  isLiked,
  isBookmarked,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState<number | null>(null);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyCode = (codeText: string, idx: number) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  // Helper to parse simple markdown blocks
  const renderFormattedContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeBuffer: string[] = [];
    let codeBlockCount = 0;

    lines.forEach((line, index) => {
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          // Close code block
          const codeText = codeBuffer.join('\n');
          const currentIdx = codeBlockCount++;
          elements.push(
            <div
              key={`code-${index}`}
              className="my-5 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden font-mono text-xs sm:text-sm"
            >
              <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs text-slate-400">
                <span className="text-cyan-400">snippet.ts</span>
                <button
                  onClick={() => handleCopyCode(codeText, currentIdx)}
                  className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
                >
                  {copiedCodeIdx === currentIdx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 text-slate-200 overflow-x-auto leading-relaxed">
                <code>{codeText}</code>
              </pre>
            </div>
          );
          codeBuffer = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        return;
      }

      const trimmed = line.trim();
      if (trimmed.startsWith('### ')) {
        elements.push(
          <h3
            key={`h3-${index}`}
            className="font-display text-xl sm:text-2xl font-bold text-slate-100 mt-8 mb-3"
          >
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('## ')) {
        elements.push(
          <h2
            key={`h2-${index}`}
            className="font-display text-2xl sm:text-3xl font-extrabold text-slate-100 mt-10 mb-4"
          >
            {trimmed.replace('## ', '')}
          </h2>
        );
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        elements.push(
          <li key={`li-${index}`} className="ml-5 list-disc text-slate-300 my-1 text-sm sm:text-base leading-relaxed">
            {trimmed.replace(/^[-*]\s+/, '')}
          </li>
        );
      } else if (/^\d+\.\s/.test(trimmed)) {
        elements.push(
          <li key={`ol-${index}`} className="ml-5 list-decimal text-slate-300 my-1 text-sm sm:text-base leading-relaxed">
            {trimmed.replace(/^\d+\.\s+/, '')}
          </li>
        );
      } else if (trimmed.length > 0) {
        elements.push(
          <p key={`p-${index}`} className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">
            {trimmed}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div
      id="article-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="article-modal-dialog"
        className="w-full max-w-3xl rounded-2xl bg-white border border-slate-100 shadow-2xl overflow-hidden my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-100 relative">
          <div className="flex items-center justify-between gap-4 mb-4">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                id="article-bookmark-btn"
                onClick={() => onToggleBookmark(post.id)}
                className={`p-2 rounded-full border transition-all shadow-2xs ${
                  isBookmarked
                    ? 'bg-indigo-50 text-indigo-600 border-indigo-200'
                    : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900'
                }`}
                title={isBookmarked ? 'Saved to bookmarks' : 'Bookmark article'}
              >
                <Bookmark className="w-4 h-4" />
              </button>

              <button
                id="article-share-btn"
                onClick={handleShare}
                className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-2xs"
                title="Share link"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              </button>

              <button
                id="article-close-btn"
                onClick={onClose}
                className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-2xs"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishDate}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              {post.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              {post.summary}
            </p>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            {renderFormattedContent(post.content)}
          </div>

          {/* Tags */}
          <div className="pt-6 mt-8 border-t border-slate-100 flex flex-wrap gap-2">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-mono bg-slate-50 text-indigo-700 border border-slate-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author snippet */}
          <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white shadow-xs shrink-0">
              BG
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Written by {profile.name}
              </h4>
              <p className="text-xs text-slate-500">
                {profile.roleTitle} &bull; {profile.email}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 sm:p-6 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
          <button
            id="article-like-btn"
            onClick={() => onToggleLike(post.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-2xs ${
              isLiked
                ? 'bg-rose-50 text-rose-600 border border-rose-200'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{post.likes + (isLiked ? 1 : 0)} Likes</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-200 shadow-2xs transition-colors"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
