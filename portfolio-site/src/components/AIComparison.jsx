// 效率对比图 → 改为图片占位(等待替换真实图片)
export default function AIComparison({ comparison, lang }) {
  return (
    <div>
      {/* 图片占位区域:宽度和全站内容一致、居中、深灰底 + 提示文字 */}
      <div className="w-full aspect-[16/9] bg-dark-card border border-dark-border rounded-lg flex items-center justify-center">
        <span className="text-dark-text-secondary text-sm">
          {lang === 'zh' ? '对比图待替换' : 'Comparison chart placeholder'}
        </span>
      </div>
    </div>
  );
}
