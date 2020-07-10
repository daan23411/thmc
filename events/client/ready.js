const {prefix}= require('../../config.json')
module.exports=bot=>{
    bot.user.setActivity(`${prefix}help | Tycho Houten MC`)
    console.log(`Hoi! ${bot.user.username} is beschikbaar voor commands!`)
}