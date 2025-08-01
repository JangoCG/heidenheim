import { cn } from "@/lib/utils"
import { type LucideIcon, ArrowRight, Thermometer, Droplets, Wind, Eye, Zap, TreePine } from "lucide-react"

interface EnvironmentalItem {
  id: string
  title: string
  subtitle: string
  icon: LucideIcon
  iconStyle: string
  location: string
  value: string
  unit: string
  status: "good" | "moderate" | "poor"
  lastUpdate: string
}

interface EnvironmentalDataProps {
  items?: EnvironmentalItem[]
  className?: string
}

const iconStyles = {
  temperature: "bg-orange-100 dark:bg-orange-800 text-orange-900 dark:text-orange-100",
  humidity: "bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100",
  air: "bg-green-100 dark:bg-green-800 text-green-900 dark:text-green-100",
  noise: "bg-purple-100 dark:bg-purple-800 text-purple-900 dark:text-purple-100",
}

const statusConfig = {
  good: {
    class: "text-green-600 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-900/30",
    label: "Gut",
  },
  moderate: {
    class: "text-yellow-600 dark:text-yellow-400",
    bg: "bg-yellow-100 dark:bg-yellow-900/30",
    label: "Mäßig",
  },
  poor: {
    class: "text-red-600 dark:text-red-400",
    bg: "bg-red-100 dark:bg-red-900/30",
    label: "Schlecht",
  },
}

const ITEMS: EnvironmentalItem[] = [
  {
    id: "1",
    title: "Lufttemperatur",
    subtitle: "Umweltsensor Marktplatz",
    icon: Thermometer,
    iconStyle: "temperature",
    location: "Marktplatz",
    value: "15.2",
    unit: "°C",
    status: "good",
    lastUpdate: "vor 2 Min",
  },
  {
    id: "2",
    title: "Luftfeuchtigkeit",
    subtitle: "Relative Feuchtigkeit",
    icon: Droplets,
    iconStyle: "humidity",
    location: "Stadtpark",
    value: "68",
    unit: "%",
    status: "good",
    lastUpdate: "vor 5 Min",
  },
  {
    id: "3",
    title: "Luftqualität",
    subtitle: "PM2.5 Partikel",
    icon: Wind,
    iconStyle: "air",
    location: "Hauptstraße",
    value: "23",
    unit: "μg/m³",
    status: "moderate",
    lastUpdate: "vor 1 Min",
  },
  {
    id: "4",
    title: "Lärmpegel",
    subtitle: "Durchschnittlicher Schallpegel",
    icon: Zap,
    iconStyle: "noise",
    location: "Bahnhofstraße",
    value: "58",
    unit: "dB",
    status: "moderate",
    lastUpdate: "vor 3 Min",
  },
  {
    id: "5",
    title: "Sichtweite",
    subtitle: "Atmosphärische Sicht",
    icon: Eye,
    iconStyle: "air",
    location: "Aussichtspunkt",
    value: "12.5",
    unit: "km",
    status: "good",
    lastUpdate: "vor 10 Min",
  },
  {
    id: "6",
    title: "Bodenfeuchtigkeit",
    subtitle: "Parkanlage Sensoren",
    icon: TreePine,
    iconStyle: "humidity",
    location: "Stadtpark",
    value: "42",
    unit: "%",
    status: "good",
    lastUpdate: "vor 15 Min",
  },
]

export default function EnvironmentalData({ items = ITEMS, className }: EnvironmentalDataProps) {
  return (
    <div className={cn("w-full overflow-x-auto scrollbar-none", className)}>
      <div className="flex gap-3 min-w-full p-1">
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              "flex flex-col",
              "w-[280px] shrink-0",
              "bg-white dark:bg-zinc-900/70",
              "rounded-xl",
              "border border-zinc-100 dark:border-zinc-800",
              "hover:border-zinc-200 dark:hover:border-zinc-700",
              "transition-all duration-200",
              "shadow-sm backdrop-blur-xl",
            )}
          >
            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className={cn("p-2 rounded-lg", iconStyles[item.iconStyle as keyof typeof iconStyles])}>
                  <item.icon className="w-4 h-4" />
                </div>
                <div
                  className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    statusConfig[item.status].bg,
                    statusConfig[item.status].class,
                  )}
                >
                  {statusConfig[item.status].label}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">{item.title}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">{item.subtitle}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{item.value}</span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{item.unit}</span>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
                <span>{item.location}</span>
                <span>{item.lastUpdate}</span>
              </div>
            </div>

            <div className="mt-auto border-t border-zinc-100 dark:border-zinc-800">
              <button
                className={cn(
                  "w-full flex items-center justify-center gap-2",
                  "py-2.5 px-3",
                  "text-xs font-medium",
                  "text-zinc-600 dark:text-zinc-400",
                  "hover:text-zinc-900 dark:hover:text-zinc-100",
                  "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
                  "transition-colors duration-200",
                )}
              >
                Verlauf anzeigen
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
