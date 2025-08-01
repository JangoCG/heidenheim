import { Thermometer, Activity, Car } from "lucide-react"
import SmartCityMetrics from "./smart-city-metrics"
import TrafficMonitoring from "./traffic-monitoring"
import EnvironmentalData from "./environmental-data"

export default function () {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col border border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-50" />
            Smart City Metriken
          </h2>
          <div className="flex-1">
            <SmartCityMetrics className="h-full" />
          </div>
        </div>
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col border border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2">
            <Car className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-50" />
            Verkehrsüberwachung
          </h2>
          <div className="flex-1">
            <TrafficMonitoring className="h-full" />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col items-start justify-start border border-gray-200 dark:border-[#1F1F23]">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2">
          <Thermometer className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-50" />
          Umweltdaten & Sensoren
        </h2>
        <EnvironmentalData />
      </div>
    </div>
  )
}
