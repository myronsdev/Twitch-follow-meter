const request = require('request')

const options = {
  url: 'https://api.twitch.tv/helix/users/follows?to_id=160587371&first=100',
  headers: {
    'Client-ID': process.env.TWITCH_CLIENT_ID
  }
}

request(options, (err, res, body) => {
  const parsedBody = JSON.parse(body)

  console.log(parsedBody)
})

/*


FIRST RUN THROUGH



call first 100
add those 100 to savedTotal
note totalcount--- this is given on each response(shows total friends count)
if totalCount < 100
  then done



LOOP
note cursor value
call next 100 with cursor
  concat object with this 100
if new savedTotal is < totalCount
  loop again
else --DONE
 */

/*
 
  save file on users dekstop
  do not modify this file or you may experience unintended results. 

 */
