// 五阶段工作流时间轴(照参考图A:紧凑、圆点/横线/小圆点水平对齐首尾相接、左右对称)
// 黑白灰极简:暖白(编号/标题/角色)、灰(做法/竖线/圆环/连接线)
// 关键对齐:节点圆环、横线、末端小圆点在同一水平线上无缝连接;左右内容对称(右侧左对齐、左侧右对齐)
const WHITE = 'rgb(245, 245, 244)';
const GRAY = 'rgb(168, 162, 158)';
const BG = '#0c0a09';

// 竖线上的圆圈节点:深色底圆(遮竖线) + 灰色空心圆环 + 暖白实心圆心
function CircleNode() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" className="block">
      <circle cx="16" cy="16" r="14" fill={BG} />
      <circle cx="16" cy="16" r="10" fill="none" stroke={GRAY} strokeWidth="2" />
      <circle cx="16" cy="16" r="4" fill={WHITE} />
    </svg>
  );
}

// 从圆圈引出的横线 + 侧边小实心圆点(严格水平对齐)
function Connector({ dir }) {
  const right = dir === 'right';
  const lineLength = 48;
  const dotRadius = 4;
  const totalWidth = lineLength + dotRadius * 2;
  const height = dotRadius * 2;

  return (
    <svg width={totalWidth} height={height} viewBox={`0 0 ${totalWidth} ${height}`} aria-hidden="true" className="block">
      {/* 横线:从圆环边缘(x=0或totalWidth)到小圆点中心 */}
      <line
        x1={right ? 0 : totalWidth}
        y1={dotRadius}
        x2={right ? lineLength : dotRadius * 2}
        y2={dotRadius}
        stroke={GRAY}
        strokeWidth="2"
      />
      {/* 末端小实心圆点:圆心在 (dotRadius, dotRadius) 或 (totalWidth - dotRadius, dotRadius) */}
      <circle
        cx={right ? lineLength + dotRadius : dotRadius}
        cy={dotRadius}
        r={dotRadius}
        fill={WHITE}
      />
    </svg>
  );
}

export default function AIWorkflow({ workflow }) {
  const { stages } = workflow;

  return (
    <div className="relative">
      {/* 贯穿竖线:移动端在最左侧 pl-6,桌面端居中 */}
      <svg
        className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-px w-0.5 h-full"
        preserveAspectRatio="none"
        viewBox="0 0 2 100"
        aria-hidden="true"
      >
        <line x1="1" y1="0" x2="1" y2="100" stroke={GRAY} strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* 五个阶段,移动端单列、桌面端左右交替 */}
      <div className="space-y-12 md:space-y-16">
        {stages.map((s, i) => {
          const right = i % 2 === 0; // 01/03/05 在右,02/04 在左(仅桌面端)

          return (
            <div
              key={s.num}
              className="relative md:grid md:grid-cols-2 md:gap-x-0"
            >
              {/* 圆圈节点:移动端在左侧竖线上,桌面端在中间竖线上 */}
              <div className="absolute z-10 left-6 md:left-1/2 -translate-x-1/2 top-0 flex items-start pt-8">
                <CircleNode />
              </div>

              {/* 连接横线 + 小圆点:仅桌面端显示 */}
              <div
                className={`hidden md:flex absolute z-10 top-8 translate-y-2 items-center ${
                  right ? 'left-1/2 translate-x-4' : 'right-1/2 -translate-x-4'
                }`}
              >
                <Connector dir={right ? 'right' : 'left'} />
              </div>

              {/* 内容块:移动端全部靠左(pl-20 在竖线右侧),桌面端左右交替 */}
              <div
                className={`pl-20 md:pl-0 ${
                  right
                    ? 'md:col-start-2 md:pl-24 md:text-left'
                    : 'md:col-start-1 md:row-start-1 md:pr-24 md:text-right'
                }`}
              >
                {/* 大号编号(醒目) */}
                <div className="text-6xl md:text-7xl font-bold tracking-tighter text-dark-text leading-none mb-3">
                  {s.num}
                </div>

                {/* 阶段标题 */}
                <h3 className="text-lg md:text-xl font-medium text-dark-text mb-3 leading-tight">
                  {s.title}
                </h3>

                {/* 做法描述(灰色,多行) */}
                <p className="text-[0.9375rem] md:text-[0.9375rem] text-dark-text-secondary leading-relaxed mb-3">
                  {s.doing}
                </p>

                {/* 我的角色(两段式:移动端左对齐,桌面端根据位置调整) */}
                <div className={`text-[0.9375rem] md:text-[0.9375rem] flex items-start gap-2 ${right ? '' : 'md:justify-end'}`}>
                  <span className="text-dark-text-secondary font-normal flex-shrink-0">
                    {workflow.roleLabel}
                  </span>
                  <span className="text-dark-text font-medium">{s.role}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
