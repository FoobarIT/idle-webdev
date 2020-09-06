import {Updater} from './Updater.js'
import {player_data} from './Data.js'

export class Clicker {

    static clickRate() {
      let player = player_data.stats;

      Updater.updateProcessor()
      
          let icons= [
            '<button type="button" class="btn btn-light anime__click animate__animated animate__backOutUp"><i class="lni lni-pallet"></i></button>', 
            '<button type="button" class="btn btn-light anime__click animate__animated animate__backOutUp"><i class="lni lni-code"></i></button>',
            '<button type="button" class="btn btn-light anime__click animate__animated animate__backOutUp"><i class="lni lni-add-files"></i></button>'
          ]
      
           
         $('#img_player').click(function() {
            console.log(player)
            player.money += player.winMoneyDefault;
            $('#money').text(player.money.toFixed(0))
     
            let randomIco = Math.floor(Math.random() * icons.length)
        
            $('.animeClick').append(icons[randomIco])
            
            setTimeout(() => {
              $('.anime__click').remove()
            }, 300);

            //$('#clicker').toggleClass("animate__animated animate__shakeY")

            if (player.exp < player.nextLevel) {
              player.expPer = ((player.exp*100)/player.nextLevel).toFixed(2)
              player.exp += player.expPerClick + Math.floor(player.expBonus)
              $('#xp_bar').css('width', player.expPer+'%')
            }
            if (player.exp >= player.nextLevel) {
              player.exp=1;
              player.nextLevel = Math.floor(Math.pow(player.nextLevel, 2)/((30 * player.nextLevel * player.growthFactor) / 100))
              player.expPer = 0
              $('#xp_bar').css('width', player.expPer+'%')
              player.level++;
              player.winMoneyDefault += 5;
              console.log(player.winMoneyDefault)
              
              $("#player_level").text(player.level)
      
            }
            //console.log(exp, expPer, nextLevel, expPerClick, growthFactor, level)
            $('#xp_bar').text(player.exp+' Exp')
        })
    }
}
