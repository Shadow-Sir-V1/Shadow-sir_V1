const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.linkpicture.com/q/PicsArt_10-17-11.47.57.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.png, caption: `*Shadow-sir_v2*
 

        *Github link        _https://github.com/Shadow-Sir-V1/Shadow-sir_V2*
 
       *Bot Making Video    _https://youtu.be/fCKFDo9tiQ0_*

       *Audio commads-1     _https://github.com/Shadow-Sir-V1/Shadow-sir_V2/tree/master/upload_*
 

       *Audio commads-2     _https://github.com/Shadow-Sir-V1/Shadow-sir_V2/tree/master/uploads_*
  
  
      *Sticker commads      _https://github.com/Shadow-Sir-V1/Shadow-sir_V2/tree/master/stickers_*
`}) 

})); 
