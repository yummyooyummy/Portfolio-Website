// 五阶段工作流时间轴。全站黑白灰体系:
//   暖白 dark-text rgb(245,245,244) — 编号/标题/角色注解、圆心、侧点
//   灰   dark-text-secondary rgb(168,162,158) — 做法描述、竖线、圆环、连接横线
// SVG 负责图形(贯穿竖线、节点圆环+圆心、连接横线+侧点),文字用 HTML 保证换行与无障碍。
// 响应式:< md 单列(竖线在左、内容在右,无左右交替);md+ 沿中线左右交替(01右/02左…)。
const WHITE = 'rgb(245, 245, 244)';
const GRAY = 'rgb(168, 162, 158)';
const BG = '#0c0a09';

// 中线上的节点:深色底圆遮住竖线 + 灰色空心圆环 + 暖白实心圆心
function Node() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="block">
      <circle cx="11" cy="11" r="9" fill={BG} />
      <circle cx="11" cy="11" r="6.5" fill="none" stroke={GRAY} strokeWidth="1.5" />
      <circle cx="11" cy="11" r="3" fill={WHITE} />
    </svg>
  );
}

// 连接横线 + 侧点(仅 md+ 显示)。dir: 'right' 指向右侧内容,'left' 指向左侧内容。
function Connector({ dir }) {
  const right = dir === 'right';
  return (
    <svg width="44" height="10" viewBox="0 0 44 10" aria-hidden="true" className="block">
      <line
        x1={right ? 0 : 44}
        y1="5"
        x2={right ? 36 : 8}
        y2="5"
        stroke={GRAY}
        strokeWidth="1.5"
      />
      <circle cx={right ? 40 : 4} cy="5" r="2.5" fill={WHITE} />
    </svg>
  );
}

export default function AIWorkflow({ workflow }) {
  const { stages } = workflow;

  return (
    <div className="relative">
      {/* 贯穿竖线:mobile 在左(x=10),md+ 居中 */}
      <svg
        className="absolute top-0 bottom-0 left-[10px] -translate-x-1/2 md:left-1/2 w-px h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1 100"
        aria-hidden="true"
      >
        <line x1="0.5" y1="0" x2="0.5" y2="100" stroke={GRAY} strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="space-y-14 md:space-y-20">
        {stages.map((s, i) => {
          const right = i % 2 === 0; // 01/03/05 在右,02/04 在左

          return (
            <div
              key={s.num}
              className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-x-0"
            >
              {/* 节点:坐在竖线上 */}
              <span className="absolute z-10 left-[10px] -translate-x-1/2 top-0 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                <Node />
              </span>

              {/* 连接横线 + 侧点(md+ 才显示,指向内容侧) */}
              <span
                className={`hidden md:block absolute z-10 top-1/2 -translate-y-1/2 ${
                  right ? 'left-1/2' : 'right-1/2'
                }`}
              >
                <Connector dir={right ? 'right' : 'left'} />
              </span>

              {/* 内容 */}
              <div
                className={
                  right
                    ? 'md:col-start-2 md:pl-14'
                    : 'md:col-start-1 md:row-start-1 md:pr-14 md:text-right'
                }
              >
                <div className="text-4xl sm:text-5xl font-medium tracking-tighter-custom text-dark-text leading-none mb-3">
                  {s.num}
                </div>
                <h3 className="text-xl font-medium text-dark-text mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-base text-dark-text-secondary leading-relaxed mb-4">
                  {s.doing}
                </p>
                <p
                  className={`text-sm text-dark-text font-medium flex items-baseline gap-2 ${
                    right ? '' : 'md:justify-end'
                  }`}
                >
                  <span className="text-dark-text-secondary font-normal">
                    {workflow.roleLabel}
                  </span>
                  <span>{s.role}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
