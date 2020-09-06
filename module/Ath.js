export class Ath {
    static menuUpdate() {
    /*
      La méthode menuUpdate contient deux fonction clique qui permet de d'ouvrir
      et fermer le menu avec animations.
    */
      $('#menu_update').hide()
        $('#close_little_menu').click(function() {
            $('#menu_update').attr({
              class: "menu-update fixed-bottom animate__animated animate__slideOutDown"
            })
            setTimeout(() => {
              $('#menu_update').hide()
            }, 300);
        })
        $('#open_little_menu').click(function() {
            $('#menu_update').attr({
              class: "menu-update fixed-bottom animate__animated animate__slideInUp"
            })
            setTimeout(() => {
              $('#menu_update').show()
            }, 100);
        })
  }
  
  static menuPager() {
  /* Desc méthode*/
    $('#stack_update').hide()
    
  }
  

}
