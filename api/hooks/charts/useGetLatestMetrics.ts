import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { ResponseError } from "../../client"
import { getLatestMetrics } from "../../charts"

const useGetLatestMetrics = (): UseQueryResult<any, ResponseError> => {
  const metricsDataResult = useQuery<any, ResponseError>(
    ["latestMetricsData"],
    () => getLatestMetrics(),
    {
      refetchInterval: 10000,
    }
  )

  return metricsDataResult
}

export default useGetLatestMetrics
