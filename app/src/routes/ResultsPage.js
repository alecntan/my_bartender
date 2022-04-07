import { useSearchParams } from 'react-router-dom';

export default function ResultsPage(props) {

    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <h1>Results Page</h1>
        </>
    );
}
