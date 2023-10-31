import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { ResponseError } from "../../client"
import useDeviceStore from "../../../store/device"
import { getMetricsData } from "../../charts"
import useTimeStore from "../../../store/time"

const useMetricsData = (): UseQueryResult<any, ResponseError> => {
  const { selectedDevice } = useDeviceStore()
  const { tw_startTime: startTime, tw_endTime: endTime } = useTimeStore()

  console.log({ startTime, endTime })

  const assetId = selectedDevice?.asset_id

  const params = {
    assetId,
    isRealtime: false,
    startTime,
    endTime,
  }

  console.log({ params })

  const metricsDataResult = useQuery<any, ResponseError>(
    ["metricsData"],
    () =>
      getMetricsData({
        ...params,
      }),
    {
      enabled: !!assetId,
      refetchInterval: 10000,
      staleTime: 0,
      cacheTime: 0
    }
  )

  return metricsDataResult
}

export default useMetricsData
