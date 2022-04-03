import React from 'react'
import { useSearchParams } from 'react-router-dom'

export function useUrlState<T>(
  varName: string,
  defaultVal: T
): [T, (val: T) => void] {
  const [state, setState] = React.useState<T>(defaultVal)
  const [searchParams, setSearchParams] = useSearchParams()

  React.useEffect(() => {
    if (searchParams.get(varName) === JSON.stringify(state)) {
      return
    }
    if (
      searchParams.has(varName) &&
      searchParams.get(varName) !== JSON.stringify(state)
    ) {
      const val = searchParams.get(varName)
      if (val?.length) {
        setState(JSON.parse(val))
      }
    } else {
      searchParams.set(varName, JSON.stringify(defaultVal))
      setSearchParams(searchParams)
      setState(defaultVal)
    }
  }, [defaultVal, varName, state, searchParams, setSearchParams])

  const updateState = (val: T) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(varName, JSON.stringify(val))
    setSearchParams(searchParams)
    return setState(val)
  }
  return [state, updateState]
}
