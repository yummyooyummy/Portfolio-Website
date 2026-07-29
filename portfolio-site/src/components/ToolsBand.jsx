import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// 工具滚动带:与 AILessons 信条带同一套机制
// 自动滚动 + 无限循环 + 星芒分隔 + 悬停暂停 + 可拖动
const SPEED = 0.4; // px / frame,约 24px/s

const ICON_MAP = {
  'Figma': '/tool-figma.png',
  'Sketch': '/tool-sketch.png',
  'Principle': '/tool-principle.png',
  'Claude': '/tool-claude.png',
  'Cursor': '/tool-cursor.png',
  '微信开发者工具': '/tool-wechat-devtools.png',
  'WeChat DevTools': '/tool-wechat-devtools.png',
  'Photoshop': '/tool-photoshop.png',
  'Illustrator': '/tool-illustrator.png',
  'Claude Code': '/tool-claude-code.png',
  'Midjourney': '/tool-midjourney.png'
};

function Sparkle() {
  return (
    <div className="flex-none w-14 flex items-center justify-center self-start mt-4" aria-hidden="true">
      <motion.svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
      >
        <path
          d="M12 2 C12.6 7.4 16.6 11.4 22 12 C16.6 12.6 12.6 16.6 12 22 C11.4 16.6 7.4 12.6 2 12 C7.4 11.4 11.4 7.4 12 2 Z"
          fill="rgb(120, 113, 108)"
        />
      </motion.svg>
    </div>
  );
}

function ToolCard({ tool }) {
  return (
    <div className="flex-none flex flex-col items-center gap-3 w-24 group">
      <div className="w-16 h-16 rounded-2xl bg-dark-card border border-dark-border overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:border-stone-500">
        <img
          src={ICON_MAP[tool]}
          alt={tool}
          loading="lazy"
          draggable="false"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-sm text-dark-text-secondary font-normal text-center leading-snug transition-colors duration-300 group-hover:text-dark-text">
        {tool}
      </span>
    </div>
  );
}

export default function ToolsBand({ tools }) {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragState = useRef({ startX: 0, startScroll: 0 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf;
    const tick = () => {
      const half = track.scrollWidth / 2;
      if (!pausedRef.current && !draggingRef.current && half > 0) {
        track.scrollLeft += SPEED;
        if (track.scrollLeft >= half) track.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e) => {
    draggingRef.current = true;
    dragState.current = { startX: e.clientX, startScroll: trackRef.current.scrollLeft };
    trackRef.current.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    const track = trackRef.current;
    const half = track.scrollWidth / 2;
    track.scrollLeft = dragState.current.startScroll - (e.clientX - dragState.current.startX);
    if (half > 0) {
      if (track.scrollLeft >= half) track.scrollLeft -= half;
      if (track.scrollLeft <= 0) track.scrollLeft += half;
    }
  };
  const endDrag = () => {
    draggingRef.current = false;
  };

  const group = (keyPrefix) => (
    <>
      {tools.map((tool) => (
        <ToolCard key={`${keyPrefix}-${tool}`} tool={tool} />
      ))}
      <Sparkle />
    </>
  );

  return (
    <div className="relative">
      {/* 左右渐隐 */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 z-10 pointer-events-none bg-gradient-to-r from-dark-bg to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 z-10 pointer-events-none bg-gradient-to-l from-dark-bg to-transparent" />

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto px-6 sm:px-8 py-4 cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {group('a')}
        {group('b')}
      </div>
    </div>
  );
}
