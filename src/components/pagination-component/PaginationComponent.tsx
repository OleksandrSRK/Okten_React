import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams({pg: '1'})
    const currentPage = Number(searchParams.get("page") || '1');

    return (
        <div>
            <button className={'font-bold py-1 px-2 rounded  border-1 m-2'} onClick={() => {
                setSearchParams({page: (currentPage > 1  ? currentPage - 1 : 1).toString()})
            }}>&lt;-- Prev</button>

            <button className={'font-bold py-1 px-2 rounded border-1 m-2'} onClick={() => {
                setSearchParams({page: (currentPage + 1).toString()})
            }}>Next --&gt;</button>
        </div>
    );
};

export default PaginationComponent;