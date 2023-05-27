import "./Search.scss"

import Icon from "../../../../images/iconc_search.png"

function Search(){
    return(
        <div className="search">
            <input type="text"  placeholder="search"/>
            <div className="search_iconc">
                <div><img src={Icon} alt="" /></div>
            </div>
        </div>
    )
}

export default Search
