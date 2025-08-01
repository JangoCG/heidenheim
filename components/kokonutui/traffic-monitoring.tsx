import { cn } from "@/lib/utils"
import { Car, Bike, Users, type LucideIcon, ArrowRight, TrendingUp, TrendingDown } from "lucide-react"

interface TrafficData {
  id: string
  location: string
  vehicles: string
  change: string
  changeType: "increase" | "decrease"
  type: "highway" | "city" | "pedestrian"
  icon: LucideIcon
  timestamp: string
  status: "normal" | "heavy" | "light"
}

interface TrafficMonitoringProps {
  trafficData?: TrafficData[]
  className?: string
}

const TRAFFIC_DATA: TrafficData[] = [
  {
    id: "1",
    location: "Hauptstraße Nord",
    vehicles: "1,247",
    change: "+8.5%",
    changeType: "increase",
    type: "city",
    icon: Car,
    timestamp: "Letzte Stunde",
    status: "heavy",
  },
  {
    id: "2",
    location: "Fahrradweg Zentrum",
    vehicles: "89",
    change: "+12.3%",
    changeType: "increase",
    type: "city",
    icon: Bike,
    timestamp: "Letzte Stunde",
    status: "normal",
  },
  {
    id: "3",
    location: "Fußgängerzone",
    vehicles: "456",
    change: "-5.2%",
    changeType: "decrease",
    type: "pedestrian",
    icon: Users,
    timestamp: "Letzte Stunde",
    status: "light",
  },
  {
    id: "4",
    location: "B19 Ausfahrt",
    vehicles: "2,891",
    change: "+15.7%",
    changeType: "increase",
    type: "highway",
    icon: Car,
    timestamp: "Letzte Stunde",
    status: "heavy",
  },
  {
    id: "5",
    location: "Bahnhofstraße",
    vehicles: "678",
    change: "-3.1%",
    changeType: "decrease",
    type: "city",
    icon: Car,
    timestamp: "Letzte Stunde",
    status: "normal",
  },
]

export default function TrafficMonitoring({ trafficData = TRAFFIC_DATA, className }: TrafficMonitoringProps) {
  const totalVehicles = trafficData.reduce((sum, item) => sum + Number.parseInt(item.vehicles.replace(",", "")), 0)

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
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Verkehrsaufkommen
            <span className="text-xs font-normal text-zinc-600 dark:text-zinc-400 ml-1">
              ({totalVehicles.toLocaleString()} gesamt)
            </span>
          </h2>
          <span className="text-xs text-zinc-600 dark:text-zinc-400">Live</span>
        </div>

        <div className="space-y-1">
          {trafficData.map((traffic) => (
            <div
              key={traffic.id}
              className={cn(
                "group flex items-center gap-3",
                "p-2 rounded-lg",
                "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
                "transition-all duration-200",
              )}
            >
              <div
                className={cn(
                  "p-2 rounded-lg",
                  "bg-zinc-100 dark:bg-zinc-800",
                  "border border-zinc-200 dark:border-zinc-700",
                )}
              >
                <traffic.icon className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
              </div>

              <div className="flex-1 flex items-center justify-between min-w-0">
                <div className="space-y-0.5">
                  <h3 className="text-xs font-medium text-zinc-900 dark:text-zinc-100">{traffic.location}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400">{traffic.timestamp}</p>
                    <span
                      className={cn(
                        "px-1.5 py-0.5 rounded text-[10px] font-medium",
                        traffic.status === "heavy" && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                        traffic.status === "normal" &&
                          "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
                        traffic.status === "light" &&
                          "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                      )}
                    >
                      {traffic.status === "heavy" && "Stark"}
                      {traffic.status === "normal" && "Normal"}
                      {traffic.status === "light" && "Schwach"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 pl-3">
                  <div className="text-right">
                    <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">{traffic.vehicles}</span>
                    <div className="flex items-center gap-1">
                      <span
                        className={cn(
                          "text-[10px]",
                          traffic.changeType === "increase"
                            ? "text-red-600 dark:text-red-400"
                            : "text-green-600 dark:text-green-400",
                        )}
                      >
                        {traffic.change}
                      </span>
                      {traffic.changeType === "increase" ? (
                        <TrendingUp className="w-3 h-3 text-red-600 dark:text-red-400" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-green-600 dark:text-green-400" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-2 border-t border-zinc-100 dark:border-zinc-800">
        <button
          type="button"
          className={cn(
            "w-full flex items-center justify-center gap-2",
            "py-2 px-3 rounded-lg",
            "text-xs font-medium",
            "bg-gradient-to-r from-zinc-900 to-zinc-800",
            "dark:from-zinc-50 dark:to-zinc-200",
            "text-zinc-50 dark:text-zinc-900",
            "hover:from-zinc-800 hover:to-zinc-700",
            "dark:hover:from-zinc-200 dark:hover:to-zinc-300",
            "shadow-sm hover:shadow",
            "transform transition-all duration-200",
            "hover:-translate-y-0.5",
            "active:translate-y-0",
            "focus:outline-none focus:ring-2",
            "focus:ring-zinc-500 dark:focus:ring-zinc-400",
            "focus:ring-offset-2 dark:focus:ring-offset-zinc-900",
          )}
        >
          <span>Verkehrskarte anzeigen</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
