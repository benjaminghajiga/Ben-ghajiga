import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Clock,
  Calendar,
  Heart,
  Bookmark,
  ArrowRight,
  Sparkles,
  Flame,
  Filter,
} from 'lucide-react';
import { BlogPost, ProfileData } from '../types';
import { ArticleModal } from './ArticleModal';

interface BlogProps {
  posts: BlogPost[];
  profile: ProfileData;
}

export const Blog: React.FC<BlogProps> = ({ posts, profile }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  // Local storage for likes and bookmarks
  const [likedPostIds, setLikedPostIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('portfolio_liked_articles');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarkedPostIds, setBookmarkedPostIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('portfolio_bookmarked_articles');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleLike = (postId: string) => {
    setLikedPostIds((prev) => {
      const next = prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId];
      localStorage.setItem('portfolio_liked_articles', JSON.stringify(next));
      return next;
    });
  };

  const toggleBookmark = (postId: string) => {
    setBookmarkedPostIds((prev) => {
      const next = prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId];
      localStorage.setItem('portfolio_bookmarked_articles', JSON.stringify(next));
      return next;
    });
  };

  const topics = ['All', 'Architecture', 'AI & Machine Learning', 'Cloud & Systems', 'Frontend'];

  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const matchTopic = selectedTopic === 'All' || p.category === selectedTopic;
      const matchSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchBookmark = onlyBookmarks ? bookmarkedPostIds.includes(p.id) : true;
      return matchTopic && matchSearch && matchBookmark;
    });
  }, [posts, selectedTopic, searchQuery, onlyBookmarks, bookmarkedPostIds]);

  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#fdfdfd] border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Articles & Deep Dives</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Engineering Blog
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2 max-w-xl">
              Technical articles on distributed systems, real-time UI patterns, production AI pipelines, and design token architectures.
            </p>
          </div>

          {/* Search bar & Bookmarks filter */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="blog-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles & tags..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors shadow-2xs"
              />
            </div>

            <button
              id="blog-bookmark-filter-btn"
              onClick={() => setOnlyBookmarks(!onlyBookmarks)}
              className={`p-2.5 px-3.5 rounded-full border transition-all flex items-center gap-1.5 text-xs font-medium shadow-2xs ${
                onlyBookmarks
                  ? 'bg-indigo-50 text-indigo-600 border-indigo-200 font-semibold'
                  : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
              }`}
              title="Filter by saved bookmarks"
            >
              <Bookmark className="w-4 h-4" />
              <span className="hidden sm:inline">Saved ({bookmarkedPostIds.length})</span>
            </button>
          </div>
        </div>

        {/* Topics switcher pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 text-xs sm:text-sm no-scrollbar">
          {topics.map((t) => (
            <button
              key={t}
              id={`topic-btn-${t.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setSelectedTopic(t)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all shadow-2xs ${
                selectedTopic === t
                  ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Blog Post Cards Grid */}
        {filteredPosts.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3">
            <Filter className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-semibold text-slate-800">
              No matching articles found
            </h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search query or reset the topic filter.
            </p>
            <button
              onClick={() => {
                setSelectedTopic('All');
                setSearchQuery('');
                setOnlyBookmarks(false);
              }}
              className="px-4 py-2 rounded-full bg-slate-100 text-xs font-semibold text-indigo-600 hover:bg-indigo-50 border border-slate-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => {
              const isLiked = likedPostIds.includes(post.id);
              const isBookmarked = bookmarkedPostIds.includes(post.id);

              return (
                <article
                  key={post.id}
                  id={`blog-card-${post.id}`}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Meta bar */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                          {post.category}
                        </span>
                        {post.featured && (
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                            <Flame className="w-3 h-3" />
                            Popular
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.publishDate}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => setActiveArticle(post)}
                      className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer leading-snug"
                    >
                      {post.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>

                    {/* Tag list */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-50 text-slate-600 border border-slate-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <button
                      id={`read-article-btn-${post.id}`}
                      onClick={() => setActiveArticle(post)}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1.5 transition-colors group/btn"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      <button
                        id={`card-like-btn-${post.id}`}
                        onClick={() => toggleLike(post.id)}
                        className={`p-1.5 px-2.5 rounded-full border text-xs flex items-center gap-1 transition-colors ${
                          isLiked
                            ? 'bg-rose-50 text-rose-600 border-rose-200 font-semibold'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                        title="Like this article"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                        <span>{post.likes + (isLiked ? 1 : 0)}</span>
                      </button>

                      <button
                        id={`card-bookmark-btn-${post.id}`}
                        onClick={() => toggleBookmark(post.id)}
                        className={`p-1.5 rounded-full border text-xs transition-colors ${
                          isBookmarked
                            ? 'bg-indigo-50 text-indigo-600 border-indigo-200'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                        title={isBookmarked ? 'Saved' : 'Save bookmark'}
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Reader Modal */}
      <ArticleModal
        post={activeArticle}
        profile={profile}
        onClose={() => setActiveArticle(null)}
        onToggleLike={toggleLike}
        onToggleBookmark={toggleBookmark}
        isLiked={activeArticle ? likedPostIds.includes(activeArticle.id) : false}
        isBookmarked={activeArticle ? bookmarkedPostIds.includes(activeArticle.id) : false}
      />
    </section>
  );
};
