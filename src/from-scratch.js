export const fetchHandler = async (url, options = {}) => {
    /** FEEDBACK: Great job getting all test cases to pass and great job using comments! */
    try {
        //get url and options from paramater and fetch url/options 
        let response = await fetch(url, options)

        //if responce is a falusy value throw a new error 
        if (!response.ok){
            throw new Error (`Fetch failed with status - ${[response.status]}, ${[response.statusText]}`)

        } 
    
        // get the headers from the response.headers
        const isJson = (response.headers.get('content-type') || '').includes('application/json');
       let data;
       
       if (isJson){
             
             data = await response.json()
        }
        else{
            data = await response.text()
        }

    
        return [data, null]
    }
    catch (error) {
        console.warn(error)
        return [null, error]
    }

};

