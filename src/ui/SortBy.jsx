import { useSearchParams } from "react-router-dom"
import Select from "./Select"

/* eslint-disable react/prop-types */
function SortBy({options}) {
    const [searchParams,setSearchParams] = useSearchParams()
    const sortBy = searchParams.get('sortBy') || ''
    function handleChange(e) {
        searchParams.set('sortBy',e.target.value)
        setSearchParams(searchParams)
    }
    return (
        <Select options={options} onChange={handleChange} value={sortBy} type='white'/>
    )
}

export default SortBy