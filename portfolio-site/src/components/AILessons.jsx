import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// 信条滚动带:竖版窄卡横向自动滚动,无限循环;悬停暂停;可拖动
// 每一轮结尾用一个缓慢自转的星芒标记做分隔,让循环成为有意的节奏
const SPEED = 0.4; // px / frame,约 24px/s

function Sparkle() {
  return (
    <div className="flex-none w-16 flex items-center justify-center" aria-hidden="true">
      <motion.svg
        width="26"
        height="26"
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

function Card({ item }) {
  return (
    <div className="flex-none w-[300px] bg-dark-card border border-dark-border rounded-card px-6 pt-6 pb-7 flex flex-col transition-all duration-300 hover:border-stone-500 hover:-translate-y-1.5 hover:shadow-card-subtle group">
      <div className="text-2xl font-semibold text-[#3b3733] mb-10 transition-colors duration-300 group-hover:text-dark-text-secondary">
        {item.num}
      </div>
      <div>
        <p className="text-[0.9375rem] text-dark-text leading-relaxed mb-3">{item.punch}</p>
        <p className="text-sm text-dark-text-secondary leading-relaxed">{item.exp}</p>
      </div>
    </div>
  );
}

export default function AILessons({ lessons }) {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragState = useRef({ startX: 0, startScroll: 0 });
  const posRef = useRef(0); // 浮点累计位置:手机端 scrollLeft 只支持整数,直接累加小数会被吞掉

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf;
    const tick = () => {
      const half = track.scrollWidth / 2;
      if (!pausedRef.current && !draggingRef.current && half > 0) {
        // 用户手动滚动过则重新对齐
        if (Math.abs(track.scrollLeft - posRef.current) > 2) posRef.current = track.scrollLeft;
        posRef.current += SPEED;
        if (posRef.current >= half) posRef.current -= half;
        track.scrollLeft = posRef.current;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e) => {
    draggingRef.current = true;
    if (e.pointerType !== 'mouse') return; // 触屏用原生滚动,只暂停自动播放
    dragState.current = { startX: e.clientX, startScroll: trackRef.current.scrollLeft };
    trackRef.current.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!draggingRef.current || e.pointerType !== 'mouse') return;
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
      {lessons.items.map((item) => (
        <Card key={`${keyPrefix}-${item.num}`} item={item} />
      ))}
      <Sparkle />
    </>
  );

  return (
    <div className="relative">
      {/* 左右渐隐 */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 z-10 pointer-events-none bg-gradient-to-r from-dark-bg to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 z-10 pointer-events-none bg-gradient-to-l from-dark-bg to-transparent" />

      <div
        ref={trackRef}
        className="flex gap-[18px] overflow-x-auto py-4 cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
