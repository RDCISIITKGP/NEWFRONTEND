import axios from "axios"

const URL = "http://localhost:4000"

const getRmsData = async ({ asset_id }: { asset_id: string }) => {
  if (!!asset_id) {
    const queryParams = new URLSearchParams({
      asset_id,
    })

    try {
      const response = await axios.get(
        `${URL}/api/threshold/rms?${queryParams}`
      )

      return response.data
    } catch (error) {
      console.error({ error })
      return null
    }
  } else return null
}

const getMetricsData = async ({
  assetId,
  isRealtime,
  endTime,
  startTime,
}: {
  assetId: string
  startTime?: string
  endTime?: string
  isRealtime: boolean
}) => {
  if (!!assetId) {
    const queryParams = new URLSearchParams({
      assetId,
      isRealtime: String(isRealtime),
      endTime: String(endTime),
      startTime: String(startTime),
    })

    try {
      const response = await axios.get(
        `${URL}/api/threshold/metrics?${queryParams}`
      )

      return response.data
    } catch (error) {
      console.error({ error })
      return null
    }
  } else return null
}

const getLatestMetrics = async () => {
  try {
    const response = await axios.get(`${URL}/api/threshold/latestMetrics`)

    return response.data
  } catch (error) {
    console.error({ error })
    return null
  }
}

export { getRmsData, getMetricsData, getLatestMetrics }
