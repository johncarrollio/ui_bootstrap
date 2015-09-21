jQuery(document).ready(function(s) {
    s("[data-smart-modal]").on("click", function(a) {
        a.preventDefault();
        var o = s(this).attr("data-smart-modal");
        s(o).addClass("smartforms-modal-visible"), s("body").addClass("smartforms-modal-scroll")
    }), s(".smartforms-modal").on("click", function(a) {
        (s(a.target).is(".smartforms-modal-close") || s(a.target).is(".smartforms-modal")) && (a.preventDefault(), s(this).removeClass("smartforms-modal-visible"), s("body").removeClass("smartforms-modal-scroll"))
    }), s(document).keyup(function(a) {
        "27" == a.which && (s(".smartforms-modal").removeClass("smartforms-modal-visible"), s("body").removeClass("smartforms-modal-scroll"))
    }), s(".smartforms-modal").each(function() {
        var a = s(this);
        a.hasClass("smartforms-autoshow") && (a.data("smartforms-autoshow-duration") ? setTimeout(function() {
            a.addClass("smartforms-modal-visible")
        }, 1e3 * a.data("smartforms-autoshow-duration")) : a.addClass("smartforms-modal-visible"), a.data("smartforms-autoclose-duration") && window.setTimeout(function() {
            a.removeClass("smartforms-modal-visible"), s("body").removeClass("smartforms-modal-scroll")
        }, 1e3 * a.data("smartforms-autoclose-duration")))
    })
});