import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams({pg: '1'})

    return (
        <div>
            <button onClick={() => {
                const pg = query.get('pg');
                if(pg) {
                    const currentPage = +pg;
                    setQuery({pg:(currentPage - 1).toString()})
                }
            }}>Prev</button>

            <button onClick={() => {
                const pg = query.get('pg');
                if(pg) {
                    const currentPage = +pg;
                    setQuery({pg:(currentPage + 1).toString()})
                }
            }}>Next</button>
        </div>
    );
};

export default PaginationComponent;