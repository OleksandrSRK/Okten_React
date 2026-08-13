import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

const Some = () => {

    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        const pg = query.get('pg');
        fetch(`https://reqres.in/api/users?page=${pg}`, {
            headers: {
                'x-api-key': 'pro_c18376ac008fd64a9cb50392ae8af06017abbf23901fc6446edeb1cca8f08cb2'
            }
        })
            .then(value => value.json())
            .then(value => {console.log(value); console.log(setQuery)})
    }, [query]);

    return (
        <div>
            Some Content
        </div>
    );
};

export default Some;