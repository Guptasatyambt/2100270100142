const axios = require('axios');

async function makeApiCallprime() {
    try {
        const response = await axios.get('https://api.example.com/data', {
          headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3ODI0NDY5LCJpYXQiOjE3MTc4MjQxNjksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjQzM2Q2NmQyLTliMjktNDQzYS1hZjYwLTQ5YmUyMmI2NDQyMiIsInN1YiI6InNhdHlhbTIxMTAwMzdAYWtnZWMuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjQzM2Q2NmQyLTliMjktNDQzYS1hZjYwLTQ5YmUyMmI2NDQyMiIsImNsaWVudFNlY3JldCI6ImVLVWlyQlN3cVhCQ1dWWGoiLCJvd25lck5hbWUiOiJzYXR5YW0iLCJvd25lckVtYWlsIjoic2F0eWFtMjExMDAzN0Bha2dlYy5hYy5pbiIsInJvbGxObyI6IjIxMDAyNzAxMDAxNDIifQ.gRV7KSuNeyl6rLNMN4riWu4J0fhw4_USAmX2L_dG9Ug'
          }
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error making API call:', error);
      }
}




async function handleeven(req,res){
    makeApiCallprime();

}
   


    async function handlefab(req,res){}

    async function handlerand(req,res){}

    async function handleprime(req,res){}


    module.exports={handleeven,handlefab ,handlerand,handleprime};