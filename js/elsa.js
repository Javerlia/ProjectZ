$(function () {
    var anna = true;
    var st = 0;
    $(window).on("load", function () {
        $(".grid").isotope({
            filter: "*",
            layout: "masorny"
        });
        $(".line")
            .css({
                animation: "line 0.83s ease forwards"
            })
            .delay(833)
            .fadeOut();
        $(".pBlack")
            .delay(833)
            .fadeOut();
        $(".rDoor")
            .delay(660)
            .fadeIn()
            .animate({
                    left: "100%"
                },
                600
            )
            .fadeOut();
        $(".lDoor")
            .delay(660)
            .fadeIn()
            .animate({
                    right: "100%"
                },
                700,
                function () {
                    $(".pageLoad").css({
                        display: "none"
                    });
                }
            )
            .fadeOut();
        skroll.recalcPosition();
    });
    $(window).on("scroll", function () {
        st = $(this).scrollTop();
        if (st > 88) {
            $(".menuOpen").css({
                transform: "scale(0.8)"
            });
        } else {
            $(".menuOpen").css({
                transform: "scale(1)"
            });
        }
    });
    // $('html').on('mousemove', function (elsa) {
    //     var moveX = elsa.pageX;
    //     var moveY = elsa.pageY;
    //     $('body::after').css({
    //         top:moveY,
    //         left:moveX
    //     })
    // })
    $(".menuOpen").on("click", function () {
        $(this).toggleClass("on");
        $(this)
            .find("span:nth-of-type(2)")
            .toggleClass("on");
        $(this)
            .find("span:nth-of-type(1),span:nth-of-type(3)")
            .toggleClass("on");
        if (anna) {
            $(this)
                .next()
                .css({
                    display: "block"
                })
                .stop()
                .animate({
                        right: "0%"
                    },
                    250
                );
            $(this)
                .next()
                .next()
                .css({
                    background: "rgba(0,0,0,0.7)"
                })
                .stop()
                .animate({
                        opacity: 1
                    },
                    250
                );
            anna = false;
        } else {
            $(this)
                .next()
                .stop()
                .animate({
                        right: "-100%"
                    },
                    500,
                    function () {
                        $(this).css({
                            display: "none"
                        });
                    }
                );
            $(this)
                .next()
                .next()
                .stop()
                .animate({
                        opacity: 0
                    },
                    500,
                    function () {
                        $(this).css({
                            background: "rgba(0,0,0,0.7)"
                        });
                    }
                );
            anna = true;
        }
    });
    $(".intro2").on("click", function () {
        var kristoff = $("#aboutMe").offset().top;
        $("html,body").animate({
                scrollTop: kristoff
            },
            500,
            function () {
                $(".intro2").animate({
                    opacity: 0
                });
            }
        );
    });
    $(".black>a").on("click", function () {
        var src = $(this).attr("data-src");
        var src2 = $(this).attr("data-src2");
        var webSrc = $(this).attr("data-webSrc");
        var webSrc2 = $(this).attr("data-webSrc2");
        var link = $(this).attr('data-link')
        $(".outer").append('<div class="modal"></div>').css({
            display: 'block',
            opacity: 1
        })
        $(this).nextAll(".txt").css({
            display: "block",
            opacity: "0"
        }).stop().animate({
            right: "30%",
            opacity: "1"
        }, 1100);
        $(".modal").css({
            position: "fixed",
            width: "30%",
            top: "30%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        }).stop().animate({
            top: "50%"
        }, 500, function () {
            $(this).animate({
                left: "30%"
            }, 600);
        });
        $('.outButton>span').eq(0).css({
            transform: 'rotate(-45deg)'
        })
        $('.outButton>span').eq(1).css({
            transform: 'rotate(45deg)'
        })
        if (src) {
            $(".modal").append('<img src="' + src + '">');
        }
        if (src2) {
            $(".modal").css({
                width: "47%"
            });
            $(".modal").append('<img src="' + src2 + '">');
            $(".modal").find("img").css({
                width: "49%",
                marginRight: "1%"
            });
        }
        if (webSrc) {
            $(".modal").append('<a href="' + link + '" target="_blank">' + '<img src="' + webSrc + '">');
        }
        if (webSrc2) {
            $(".modal").css({
                width: "47%"
            });
            $(".modal").append('<a href="' + link + '" target="_blank">' + '<img src="' + webSrc2 + '">');
            $(".modal").find("img").css({
                width: "49%",
                marginRight: "1%"
            });
        }
        return false;
    });
    $('.outButton').on('click', function () {
        $('.txt').css({
            display: 'none',
            right: '50%'
        });
        $('.outer').css({
            display: 'none'
        })
        $('.modal').remove()
        $('.outButton').find('span').eq(0).css({
            transform: 'rotate(0deg)'
        })
        $('.outButton').find('span').eq(1).css({
            transform: 'rotate(0deg)'
        })
        return false;
    })
    $(".nav>li").each(function () {
        $(this).on("click", function () {
            var i = $(this).index();
            var elsa = $(".section>div")
                .eq(i + 1)
                .offset().top;
            $("html, body")
                .stop()
                .animate({
                        scrollTop: elsa
                    },
                    900
                );
        });
    });
    $(".up").on("click", function () {
        $("html,body").animate({
                scrollTop: 0
            },
            1150,
            "swing"
        );
    });
    $(".portList>li>a").on("click", function () {
        var fil = $(this).attr("data-filter");
        $(".grid").isotope({
            itemSelector: ".grid-item",
            percentPosition: true,
            filter: fil,
            layout: "masorny",
            masonry: {
                columnWidth: ".grid-sizer"
            }
        });
        return false;
    });
});