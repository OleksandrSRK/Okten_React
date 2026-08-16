import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams({pg: '1'})
    const currentPage = Number(searchParams.get("page") || '1');

    return (
        <div>
            <button onClick={() => {
                setSearchParams({page: (currentPage - 1).toString()})
            }}>Prev</button>

            <button onClick={() => {
                setSearchParams({page: (currentPage + 1).toString()})
            }}>Next</button>
        </div>
    );
};

export default PaginationComponent;