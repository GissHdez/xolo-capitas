import React, {useState, useEffect} from 'react';
import {createClient} from 'contentful';

const SPACE_ID = '257tb8oaug2e';
const ACCESS_TOKEN = 'j7wb-3wZu5IDvbo3eWbCu8f8nh9OsAHzci-yXzt6Rvc';

const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})
const useContentfulData = (contentType) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        client.getEntries({content_type: contentType})
        .then(entries => {
            setData(entries);
            setLoading(false);
        })
        
    },[])
    return [data,loading]
}
const useOneContentfulData = (id) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    console.log(id)
    useEffect(()=>{
        client.getEntry(id.id)
        .then(entry => {
            setData(entry);
            setLoading(false);
        })
    },[])
    return [data,loading]
}
export {useContentfulData, useOneContentfulData};