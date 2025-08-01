import { cn } from "@/lib/utils"
import { Bike, Car, Thermometer, Droplets, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react"

interface MetricItem {
  id: string
  title: string
  description?: string
  value: string
  change?: string
  changeType: "increase" | "decrease" | "neutral"
  type: "bikes" | "traffic" | "temperature" | "water" | "alert"
}

interface SmartCityMetricsProps {
  metrics?: MetricItem[]
  className?: string
}

const METRICS: MetricItem[] = [
  {
    id: "1",
    title: "Fahrradboxen",
    description: "Auslastung heute",
    value: "68.3%",
    change: "+5.2%",
    changeType: "increase",
    type: "bikes",
  },
  {
    id: "2",
    title: "Verkehrszählung",
    description: "Fahrzeuge heute",
    value: "20,654",
    change: "-12.9%",
    changeType: "decrease",
    type: "traffic",
  },
  {
    id: "3",
    title: "Umweltsensor",
    description: "Aktuelle Temperatur",
    value: "15°C",
    change: "bewölkt",
    changeType: "neutral",
    type: "temperature",
  },
  {
    id: "4",
    title: "Pegelstand Brenz",
    description: "Wasserstand",
    value: "61.8 cm",
    change: "Normal",
    changeType: "neutral",
    type: "water",
  },
  {
    id: "5",
    title: "Städtische Mülleimer",
    description: "Störung gemeldet",
    value: "1 Alert",
    change: "Seit 1h",
    changeType: "decrease",
    type: "alert",
  },
]

export default function SmartCityMetrics({ metrics = METRICS, className }: SmartCityMetricsProps) {
  return (
    <div
      className={cn(
        "w-full max-w-xl mx-auto",
        "bg-white dark:bg-zinc-900/70",
        "border border-zinc-100 dark:border-zinc-800",
        "rounded-xl shadow-sm backdrop-blur-xl",
        className,
      )}
    >
      <div className="p-4 border-b border-zinc-100 dark:border-zinc-800">
        <p className="text-xs text-zinc-600 dark:text-zinc-400">Smart City Status</p>
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Heidenheim</h1>
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-medium text-zinc-900 dark:text-zinc-100">Live Metriken</h2>
        </div>

        <div className="space-y-1">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className={cn(
                "group flex items-center justify-between",
                "p-2 rounded-lg",
                "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
                "transition-all duration-200",
              )}
            >
              <div className="flex items-center gap-2">
                <div
                  className={cn("p-1.5 rounded-lg", {
                    "bg-green-100 dark:bg-green-900/30": metric.type === "bikes",
                    "bg-blue-100 dark:bg-blue-900/30": metric.type === "traffic",
                    "bg-orange-100 dark:bg-orange-900/30": metric.type === "temperature",
                    "bg-cyan-100 dark:bg-cyan-900/30": metric.type === "water",
                    "bg-red-100 dark:bg-red-900/30": metric.type === "alert",
                  })}
                >
                  {metric.type === "bikes" && <Bike className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />}
                  {metric.type === "traffic" && <Car className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />}
                  {metric.type === "temperature" && (
                    <Thermometer className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                  )}
                  {metric.type === "water" && <Droplets className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />}
                  {metric.type === "alert" && <AlertTriangle className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />}
                </div>
                <div>
                  <h3 className="text-xs font-medium text-zinc-900 dark:text-zinc-100">{metric.title}</h3>
                  {metric.description && (
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400">{metric.description}</p>
                  )}
                </div>
              </div>

              <div className="text-right flex items-center gap-1">
                <div>
                  <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">{metric.value}</span>
                  {metric.change && (
                    <div className="flex items-center gap-1">
                      <span
                        className={cn(
                          "text-[10px]",
                          metric.changeType === "increase" && "text-green-600 dark:text-green-400",
                          metric.changeType === "decrease" && "text-red-600 dark:text-red-400",
                          metric.changeType === "neutral" && "text-zinc-600 dark:text-zinc-400",
                        )}
                      >
                        {metric.change}
                      </span>
                      {metric.changeType === "increase" && (
                        <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-400" />
                      )}
                      {metric.changeType === "decrease" && (
                        <TrendingDown className="w-3 h-3 text-red-600 dark:text-red-400" />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-2 border-t border-zinc-100 dark:border-zinc-800">
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className={cn(
              "flex items-center justify-center gap-2",
              "py-2 px-3 rounded-lg",
              "text-xs font-medium",
              "bg-zinc-900 dark:bg-zinc-50",
              "text-zinc-50 dark:text-zinc-900",
              "hover:bg-zinc-800 dark:hover:bg-zinc-200",
              "shadow-sm hover:shadow",
              "transition-all duration-200",
            )}
          >
            <span>Karte anzeigen</span>
          </button>
          <button
            type="button"
            className={cn(
              "flex items-center justify-center gap-2",
              "py-2 px-3 rounded-lg",
              "text-xs font-medium",
              "bg-zinc-900 dark:bg-zinc-50",
              "text-zinc-50 dark:text-zinc-900",
              "hover:bg-zinc-800 dark:hover:bg-zinc-200",
              "shadow-sm hover:shadow",
              "transition-all duration-200",
            )}
          >
            <span>Details</span>
          </button>
        </div>
      </div>
    </div>
  )
}
