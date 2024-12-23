import { useState } from "react"


const useSearchFilterText = (searchData)=> {
    let [searchFilterText, setSearchFilterText] = useState([])
    setSearchFilterText(searchData)

    return searchFilterText
}


export default useSearchFilterText;