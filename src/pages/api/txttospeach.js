const gTTS = require('gtts');
export default function GET(req,res) {
    // res.status(200).json({ name: 'Joh n Doe' })
    let speech = 'Welcome to hell';
    const gtts = new gTTS(speech, 'en');
    // res.setHeader('Content-Type', 'audio/mpeg'); 
    // res.setHeader('Content-Disposition', `attachment; filename="audio.mp3"`);
    gtts.stream().on('data', (chunk) => {
        console.log('AUDIO DATA',chunk);
        console.log(typeof(chunk))
        // res.write(chunk);
        return res.status(200).setHeader('content-type', 'audio/mpeg').send(chunk);
        // return new Response(chunk,{
        //     headers:{
        //         "Content-Type":"audio/mpeg"
        //     }
        // });
        
      });
      
    // //   gtts.on('end', () => {
    // //     res.end();
    // //   });
      

  }