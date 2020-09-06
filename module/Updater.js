import {player_data} from './Data.js'

export class Updater {

    static updateProcessor() {
        let player = player_data.stats;
        let up_proc = 500;
        $('#up_proc').click(function() {
            console.log('I click')
            if (player.money >= up_proc) {
                player.money -= up_proc;
                $('#money').text(player.money.toFixed(0))
                player.winMoneyDefault = player.winMoneyDefault * 2;
                console.log(player.winMoneyDefault)
                up_proc = up_proc * 2;
                console.log(up_proc)
            } else {
                alert('No money')
            }
            
        })

    }
}