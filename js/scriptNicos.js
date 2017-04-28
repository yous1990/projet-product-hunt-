/**
 * Created by boom on 06/04/17.
 */

function ecrireCommentaire(pseudo, commentaire, $cible) {

    console.log("pseudo : " + pseudo + " commentaire : " + commentaire);
    $cible.fadeOut("FAST", function () {
        $(this).prepend(" <li>" + "pseudo : " + pseudo + " commentaire : " + commentaire + "</li>")

    }).fadeIn("FAST");
}

$(function () {

    //MOVEUP

    $('.move-up').click(function (e) {
        let $div = $(this).closest('div');
        // si deja premier
        if ($div.index() > 0) {
            //déplacement plus fondu
            $div.fadeOut(function () {
                $div.insertBefore($div.prev('div')).fadeIn();
            });
        }
    });
    //MoveDown

    $('.move-down').click(function (e) {
        let $div = $(this).closest('div');
        // si deja dernier siblings('div') = element frère du même type et comparaison de l index
        if ($div.index() <= ($div.siblings('div').length - 1)) {
            //déplacement plus fondu
            $div.fadeOut(function () {
                $div.insertAfter($div.next('div')).fadeIn();
            });
        }
    });
    /************
     *Ajout commentaire
     **/

    $(".submitCommentaire").submit(function (event) {

        //stop submit
        event.preventDefault();
        let _this = this;

        let inputPseudo;
        let inputCommentaire;
        let $cible = $(_this).siblings("UL");

        $(this).children("INPUT").each(function (index) {
            if (index == 0) {
                inputPseudo = $(this).val();
            }
            if (index == 1) {
                inputCommentaire = $(this).val();
            }
        });

        if (inputPseudo.length > 0 && inputPseudo.length > 0) {
            ecrireCommentaire(inputPseudo, inputCommentaire, $cible);
        }
    });


});