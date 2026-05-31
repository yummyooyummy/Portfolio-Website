export const content = {
  zh: {
    nav: {
      about: '关于',
      work: '作品',
      lab: '实验室',
      contact: '联系'
    },
    hero: {
      headline: "设计师 · 用 AI 独立造产品的人",
      subtitle: "从一个想法,到一个能用的产品——中间没有我跨不过去的环节。",
      cta1: "联系我",
      cta2: "下载简历"
    },
    stats: [
      { number: "0→1", description: "独立完成产品全流程" },
      { number: "3.5 年", description: "大厂设计经验(腾讯)" },
      { number: "3 个", description: "独立用 AI 落地的真实产品" },
      { number: "2 种", description: "可专业工作的语言(中/英)" }
    ],
    about: {
      title: "关于",
      bio: "我是郑雨晴,一名交互设计师。\n\n交互设计科班出身,在腾讯做了三年半游戏交互设计——从游戏策划起步,系统接受过大厂体系化、流程化的训练,熟悉从需求到落地的完整产品协作流程,也磨出了跨部门沟通和设计决策表达的能力。\n\n离开腾讯后,我把重心放在 AI 上:研究主流 AI 工具,用 AI 做自己的设计探索,把脑子里的产品一个个真正做出来。从设计、写代码、美术音效,到注册公司、版权登记、上线部署,这些项目都是我一个人走完全程。",
      experience: "我相信执行力是最稀缺的能力。一个想法值多少,取决于你能不能把它做出来。\"懂设计 + 懂产品全流程 + 会用 AI 落地\"——这是我区别于纯执行型设计师的地方。"
    },
    work: {
      title: "作品",
      projects: [
        {
          name: "点宇宙 Genesis",
          tag: "微信小游戏",
          description: "粒子合成 × 宇宙演化。从夸克到奇点,一个人走完全程。",
          fullDescription: "这是我第一个完整的产品。不会编程的我,从零开始,跟 AI 协同写代码、做美术、出音效、做产品决策,并独立跑完了公司注册、版权登记、平台备案的全部合规流程。\n\n玩法是合并 15 级粒子——夸克 → 质子 → 原子 → 细胞 → 行星 → 恒星 → 星系 → 宇宙 → 奇点,每一次点击都是一次微型创世。视觉上我刻意避开糖果色的爽感,选了深色星轨的冷调,想要的是\"凝视宇宙\"的安静。\n\n技术上用微信原生 Canvas,无引擎,包体 3 MB,做了帧级降采样模糊、命中区 44px(Apple HIG 合规)、音效池化等优化。游戏已基本完成,正在等版号与备案,后续会出抖音版本。",
          github: "https://github.com/yummyooyummy/genesis-game"
        },
        {
          name: "衍生品投资签署应用",
          tag: "Web 应用",
          description: "一条专属链接,让客户在手机上完成合同签署,结果自动归档。",
          fullDescription: "为衍生品投资客户做的线上合同签署工具。管理员发送专属链接,客户在手机上完成风险确认、阅读合同、手写签名,系统自动把签好的 PDF 合成并同步回 Airtable——把原本繁琐的线下签署流程搬到了线上。\n\n我设计并实现了两套签署流程(开户 4 步 / 补签 3 步),处理了手写签名画板、服务端 PDF 合成、幂等防重复提交、链接失效、并发提交等一系列真实工程边界。整套基于 Next.js + Airtable + Vercel,移动端优先。",
          github: "https://github.com/yummyooyummy/signing-app"
        },
        {
          name: "Ski Mini-Program",
          tag: "小程序",
          description: "复杂应用的 0-1 产品规划(内容补充中)"
        }
      ],
      viewDetails: "查看详情 →",
      viewCode: "查看代码 →"
    },
    lab: {
      title: "实验室",
      description: "代码与创意的实验——包括这个完全由 AI 构建的网站。"
    },
    contact: {
      title: "联系我",
      cta: "让我们聊聊。",
      email: "邮箱",
      github: "GitHub",
      linkedin: "LinkedIn"
    },
    footer: {
      copyright: "© 2026 [填你的名字]. Built with AI."
    }
  },
  en: {
    nav: {
      about: 'About',
      work: 'Work',
      lab: 'Lab',
      contact: 'Contact'
    },
    hero: {
      headline: "Designer. Building products end-to-end with AI.",
      subtitle: "From an idea to a working product — with nothing in between I can't cross.",
      cta1: "Get in touch",
      cta2: "Download CV"
    },
    stats: [
      { number: "0→1", description: "Full product lifecycle, solo" },
      { number: "3.5 yrs", description: "Design experience at Tencent" },
      { number: "3", description: "Real products shipped with AI" },
      { number: "2", description: "Languages, professionally fluent" }
    ],
    about: {
      title: "About",
      bio: "I'm Yuqing Zheng, an interaction designer.\n\nFormally trained in interaction design, I spent three and a half years designing game interactions at Tencent — starting in game design, then moving into UX. That's where I learned to work inside a large, structured organization: the full path from requirements to shipping, cross-team communication, and how to articulate design decisions.\n\nAfter Tencent, I turned my focus to AI: studying the major AI tools and using them for my own design experiments — actually building the products in my head. From design, code, art and sound, to company registration, copyright filing, and deployment, I took these projects end to end, on my own.",
      experience: "I believe execution is the rarest skill. An idea is only worth as much as your ability to build it. Design fluency + full product sense + shipping with AI — that's what sets me apart from a designer who only hands off specs."
    },
    work: {
      title: "Work",
      projects: [
        {
          name: "Genesis",
          tag: "WeChat Mini Game",
          description: "Particle fusion meets cosmic evolution — from quark to singularity, built solo.",
          fullDescription: "My first complete product. I don't write code — so I started from zero, pairing with AI to write the code, make the art and sound, and drive every product decision. I also ran the full compliance path alone: company registration, copyright filing, platform review.\n\nThe game is about merging 15 tiers of particles — quark → proton → atom → cell → planet → star → galaxy → universe → singularity. Every tap is a tiny act of creation. Visually I avoided candy-colored dopamine and chose a cold, dark, star-trail palette: the quiet of looking into the cosmos.\n\nBuilt on WeChat's native Canvas, no engine, 3 MB bundle, with frame-level downsampled blur, 44px hit targets (Apple HIG), and SFX pooling. The game is essentially done, awaiting license approval; a Douyin version will follow.",
          github: "https://github.com/yummyooyummy/genesis-game"
        },
        {
          name: "Derivatives Signing App",
          tag: "Web App",
          description: "One private link lets a client sign a contract on their phone — auto-archived.",
          fullDescription: "An online contract-signing tool for derivatives investment clients. An admin sends a unique link; the client confirms risk, reads the contract, and signs by hand on their phone. The system auto-composes the signed PDF and syncs it back to Airtable — moving a tedious offline process fully online.\n\nI designed and built two signing flows (4-step onboarding / 3-step re-signing) and handled real engineering edges: handwritten-signature canvas, server-side PDF composition, idempotent submission, expired links, concurrent writes. Built on Next.js + Airtable + Vercel, mobile-first.",
          github: "https://github.com/yummyooyummy/signing-app"
        },
        {
          name: "Ski Mini-Program",
          tag: "Mini-Program",
          description: "0-to-1 product planning for a complex app (content TBD)"
        }
      ],
      viewDetails: "View details →",
      viewCode: "View code →"
    },
    lab: {
      title: "Lab",
      description: "Experiments in code and craft — including this website, built entirely with AI."
    },
    contact: {
      title: "Contact",
      cta: "Let's talk.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn"
    },
    footer: {
      copyright: "© 2026 [填你的名字]. Built with AI."
    }
  }
};
