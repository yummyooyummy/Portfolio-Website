// 效率对比图(蝶形/对称条形)。全站黑白灰体系:
//   传统侧横条:较深的灰 #57534e(暗,弱);上线行半透明(止步原型)
//   用 AI 侧横条:暖白/浅灰 #e7e5e4;上线行实心暖白 #f5f5f4 + 对勾(走通上线)
//   传统时间文字 dark-text-secondary(灰),AI 时间文字 dark-text(暖白,略强调)
// 横条用 SVG 圆角矩形(矢量、清晰),文字用 HTML 保证换行、不溢出。
// 响应式:三列网格 [1fr auto 1fr],中列为流程名;横条按比例占半幅,设有上限,
//   窄屏时时间文字可换行(leading-tight + 小字号),横条最小宽度保证可见。
const TRAD_BAR = '#57534e';        // 传统侧:较深的灰
const AI_BAR = '#e7e5e4';          // 用 AI 侧:浅暖白灰
const AI_BAR_DONE = '#f5f5f4';     // 上线行 AI:实心暖白

// 各行横条长度(占半幅比例)。传统长、AI 短;末行(上线)传统止步、AI 走通。
const TRAD_FRAC = [0.50, 0.50, 0.75, 1.0, 0.42];
const AI_FRAC = [0.07, 0.10, 0.28, 0.42, 0.95];

function Bar({ frac, color, opacity = 1 }) {
  return (
    <div style={{ width: `${frac * 100}%` }} className="min-w-[5px] flex-shrink-0">
      <svg
        width="100%"
        height="16"
        viewBox="0 0 100 16"
        preserveAspectRatio="none"
        className="block h-4 sm:h-[18px]"
      >
        <rect x="0" y="0" width="100" height="16" rx="8" ry="8" fill={color} opacity={opacity} />
      </svg>
    </div>
  );
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="flex-shrink-0">
      <path d="M3 7.5 L6 10.5 L11 4" fill="none" stroke="rgb(245, 245, 244)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AIComparison({ comparison }) {
  const { rows, tradHeader, aiHeader, summary } = comparison;
  const lastIndex = rows.length - 1;

  return (
    <div>
      {/* Column headers */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-x-2 sm:gap-x-3 mb-8">
        <div className="text-xs sm:text-sm text-dark-text-secondary text-right leading-snug">
          {tradHeader}
        </div>
        <div aria-hidden="true" className="px-1 sm:px-2" />
        <div className="text-xs sm:text-sm text-dark-text text-left leading-snug font-medium">
          {aiHeader}
        </div>
      </div>

      {/* Rows */}
      <div className="space-y-7 sm:space-y-8">
        {rows.map((row, i) => {
          const isLaunch = i === lastIndex;
          return (
            <div key={row.name} className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 sm:gap-x-3">
              {/* Traditional side: [time][bar] hugging center */}
              <div className="flex items-center justify-end gap-2 min-w-0">
                <span className="text-xs sm:text-sm text-dark-text-secondary text-right leading-tight">
                  {row.trad}
                </span>
                <Bar frac={TRAD_FRAC[i]} color={TRAD_BAR} opacity={isLaunch ? 0.45 : 1} />
              </div>

              {/* Center: process name */}
              <div className="px-1 sm:px-2 text-center text-xs sm:text-sm text-dark-text font-medium leading-tight">
                {row.name}
              </div>

              {/* AI side: [bar][time] hugging center */}
              <div className="flex items-center justify-start gap-2 min-w-0">
                <Bar frac={AI_FRAC[i]} color={isLaunch ? AI_BAR_DONE : AI_BAR} />
                <span className="flex items-center gap-1.5 text-xs sm:text-sm text-dark-text leading-tight font-medium">
                  {row.ai}
                  {isLaunch && <Check />}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <p className="text-sm text-dark-text-secondary leading-relaxed mt-12 text-center">
        {summary}
      </p>
    </div>
  );
}
