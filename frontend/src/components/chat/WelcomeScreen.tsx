import { Bot, TrendingUp, Globe, Sparkles, Users, UserCircle2, NotebookPen } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface Example {
  title: string;
  desc: string;
  prompt: string;
}

interface Category {
  label: string;
  icon: React.ReactNode;
  color: string;
  examples: Example[];
}

const CATEGORIES: Category[] = [
  {
    label: "多市场回测",
    icon: <TrendingUp className="h-4 w-4" />,
    color: "text-red-400 border-red-500/30 hover:border-red-500/60 hover:bg-red-500/5",
    examples: [
      {
        title: "跨市场组合",
        desc: "A股 + 加密 + 美股,风险平价优化器",
        prompt: "回测一个由 000001.SZ、BTC-USDT、AAPL 组成的风险平价组合,区间为 2024 全年,并与等权基准对比",
      },
      {
        title: "BTC 5分钟 MACD 策略",
        desc: "分钟级加密回测,使用 OKX 实时数据",
        prompt: "回测 BTC-USDT 5分钟 MACD 策略,fast=12 slow=26 signal=9,最近 30 天",
      },
      {
        title: "美股科技最大分散化",
        desc: "通过 yfinance 对 FAANG+ 做组合优化",
        prompt: "回测 AAPL、MSFT、GOOGL、AMZN、NVDA,使用 max_diversification 组合优化器,2024 全年",
      },
    ],
  },
  {
    label: "研究与分析",
    icon: <Sparkles className="h-4 w-4" />,
    color: "text-amber-400 border-amber-500/30 hover:border-amber-500/60 hover:bg-amber-500/5",
    examples: [
      {
        title: "多因子 Alpha 模型",
        desc: "对 300 只股票做 IC 加权因子合成",
        prompt: "在沪深300成分股上,使用动量、反转、波动率和换手率构建多因子 alpha 模型,采用 IC 加权因子合成,回测 2023-2024",
      },
      {
        title: "期权希腊字母分析",
        desc: "Black-Scholes 定价,含 Delta/Gamma/Theta/Vega",
        prompt: "使用 Black-Scholes 计算期权希腊字母:现价=100,行权价=105,无风险利率=3%,波动率=25%,到期=90 天,分析 Delta/Gamma/Theta/Vega",
      },
    ],
  },
  {
    label: "智能体集群",
    icon: <Users className="h-4 w-4" />,
    color: "text-violet-400 border-violet-500/30 hover:border-violet-500/60 hover:bg-violet-500/5",
    examples: [
      {
        title: "投资委员会评审",
        desc: "多智能体辩论:多头 vs 空头、风险评审、PM 决策",
        prompt: "[Swarm Team Mode] 使用 investment_committee 预设,评估在当前市场环境下应该做多还是做空 NVDA",
      },
      {
        title: "量化策略台",
        desc: "筛选 → 因子研究 → 回测 → 风险审计 流水线",
        prompt: "[Swarm Team Mode] 使用 quant_strategy_desk 预设,在沪深300成分股上寻找并回测最佳动量策略",
      },
    ],
  },
  {
    label: "文档与网络研究",
    icon: <Globe className="h-4 w-4" />,
    color: "text-blue-400 border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/5",
    examples: [
      {
        title: "分析财报 PDF",
        desc: "上传 PDF 并就财务数据提问",
        prompt: "总结上传财报中的关键财务指标、风险与展望",
      },
      {
        title: "网络研究:宏观展望",
        desc: "读取实时网络来源做宏观分析",
        prompt: "阅读最新的美联储会议纪要,总结对股市和加密市场的关键启示",
      },
    ],
  },
  {
    label: "交易日志",
    icon: <NotebookPen className="h-4 w-4" />,
    color: "text-orange-400 border-orange-500/30 hover:border-orange-500/60 hover:bg-orange-500/5",
    examples: [
      {
        title: "分析我的券商导出",
        desc: "解析 同花顺/东财/富途/通用 CSV — 持仓天数、胜率、盈亏比、分时分布",
        prompt: "分析我刚上传的交易日志 — 完整画像,含持仓统计、胜率、重仓标的和分时分布",
      },
      {
        title: "诊断我的行为偏差",
        desc: "处置效应、过度交易、追涨、锚定 — 严重度 + 量化证据",
        prompt: "对我的交易日志运行 4 项行为诊断(处置效应、过度交易、追涨、锚定),告诉我哪种偏差对盈亏伤害最大",
      },
    ],
  },
  {
    label: "影子账户",
    icon: <UserCircle2 className="h-4 w-4" />,
    color: "text-emerald-400 border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-500/5",
    examples: [
      {
        title: "从日志训练我的影子",
        desc: "从券商 CSV 提取你的策略规则并持久化影子画像",
        prompt: "从我刚上传的交易日志训练我的影子账户 — 展示提取的规则并确认它们符合我的行为",
      },
      {
        title: "我还有多少收益没拿到?",
        desc: "回测你的影子策略,归因与实际盈亏的差异",
        prompt: "对最近 90 天的美股市场运行影子回测,拆解我的盈亏与影子的差异来源(违反规则、过早离场、错过信号)",
      },
      {
        title: "生成影子报告",
        desc: "8 节 HTML/PDF — 权益曲线、各市场夏普、归因瀑布图",
        prompt: "渲染影子报告并给我 URL — 重点突出 你 vs 影子 的差异",
      },
    ],
  },
];

const CAPABILITY_CHIPS = [
  "70 项金融技能",
  "29 个集群预设",
  "32 个智能体工具",
  "3 大市场:A股 · 加密 · 港美股",
  "分钟到日线周期",
  "4 种组合优化器",
  "15+ 风险指标",
  "期权与衍生品",
  "PDF 与网络研究",
  "因子分析与机器学习",
  "交易日志分析器",
  "影子账户回测",
  "持久记忆",
  "会话搜索",
];

interface Props {
  onExample: (s: string) => void;
}

export function WelcomeScreen({ onExample }: Props) {
  const { t } = useI18n();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 text-center">
      {/* Header */}
      <div className="space-y-3">
        <div className="h-16 w-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/80 to-info/80 flex items-center justify-center shadow-lg">
          <Bot className="h-8 w-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Vibe-Trading</h2>
          <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto leading-relaxed">
与你的专业金融智能体团队一起 vibe trading
          </p>
          <p className="text-sm text-muted-foreground mt-2 max-w-md leading-relaxed mx-auto">
            {t.describeStrategy}
          </p>
        </div>
      </div>

      {/* Capability chips */}
      <div className="flex flex-wrap justify-center gap-2 max-w-lg">
        {CAPABILITY_CHIPS.map((chip) => (
          <span
            key={chip}
            className="px-2.5 py-1 text-xs rounded-full border border-border/60 text-muted-foreground bg-muted/30"
          >
            {chip}
          </span>
        ))}
      </div>

      {/* Example categories grid */}
      <div className="w-full max-w-2xl text-left space-y-4">
        <p className="text-xs text-muted-foreground px-1">{t.examples}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className="space-y-2">
              <div className={`flex items-center gap-1.5 text-xs font-medium px-1 ${cat.color.split(" ").filter(c => c.startsWith("text-")).join(" ")}`}>
                {cat.icon}
                <span>{cat.label}</span>
              </div>
              <div className="space-y-1.5">
                {cat.examples.map((ex) => (
                  <button
                    key={ex.title}
                    onClick={() => onExample(ex.prompt)}
                    className={`block w-full text-left px-3 py-2.5 rounded-xl border transition-colors ${cat.color}`}
                  >
                    <span className="text-sm font-medium text-foreground leading-snug">
                      {ex.title}
                    </span>
                    <span className="block text-xs text-muted-foreground mt-0.5 leading-snug">
                      {ex.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


