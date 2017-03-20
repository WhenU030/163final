selectBoxs();

function selectBoxs(target) {
    var targetid = target.id;

    var ident = targetid.charAt(0);

    if(ident == 'c'){
        console.log(" target is the stars");

        var targetstar1 = targetid.charAt(1);
        var targetstar2 = targetid.charAt(1) +".5";

        d3.selectAll('.circleMap').each(function (d) {
            var match = d3.select(this).attr("star-class");
            if (targetstar1 == match || targetstar2 == match) {
                d3.select(this).classed('cir-box-selected', true);
            }
        })
    }
    else{

        console.log(" target is review boxs");

        var targetstar1 = targetid.charAt(1);


        d3.selectAll('.circleMap').each(function (d) {
            var match = d3.select(this).attr("review-class");

            if ( targetstar1 =="1" && parseInt(match)>= 500 && parseInt(match)< 1000 ){
                d3.select(this).classed('cir-box-selected', true);
            }

            if ( targetstar1 =="2" && parseInt(match)>= 1000 && parseInt(match)< 1500 ){
                d3.select(this).classed('cir-box-selected', true);
            }
            if ( targetstar1 =="3" && parseInt(match)>= 1500 && parseInt(match)< 2000 ){
                d3.select(this).classed('cir-box-selected', true);
            }
            if ( targetstar1 =="4" && parseInt(match)>= 2000 && parseInt(match)< 2500 ){
                d3.select(this).classed('cir-box-selected', true);
            }
            if ( targetstar1 =="5" && parseInt(match)>= 2500 && parseInt(match)< 3000 ){
                d3.select(this).classed('cir-box-selected', true);
            }
            if ( targetstar1 =="6" && parseInt(match)>= 3000 && parseInt(match)< 3500 ){
                d3.select(this).classed('cir-box-selected', true);
            }
            if ( targetstar1 =="7" && parseInt(match)>= 3500 && parseInt(match)< 4000 ){
                d3.select(this).classed('cir-box-selected', true);
            }
            if ( targetstar1 =="8" && parseInt(match)>= 4000 && parseInt(match)< 4500 ){
                d3.select(this).classed('cir-box-selected', true);
            }
        })

    }


}


function unselectBoxs(target) {

    var targetid = target.id;

    var ident = targetid.charAt(0);

    if(ident == 'c'){
        console.log(" target is the stars");

        var targetstar1 = targetid.charAt(1);

        d3.selectAll('.circleMap').each(function (d) {
            var match = d3.select(this).attr("star-class");
            if (targetstar1 == match.charAt(0)){
                d3.select(this).classed('cir-box-selected', false);
            }
        })
    }
    else{

        console.log(" target is review boxs");

        var targetstar1 = targetid.charAt(1);


        d3.selectAll('.circleMap').each(function (d) {
            var match = d3.select(this).attr("review-class");

            if ( targetstar1 =="1" && parseInt(match)>= 500 && parseInt(match)< 1000 ){
                d3.select(this).classed('cir-box-selected', false);
            }

            if ( targetstar1 =="2" && parseInt(match)>= 1000 && parseInt(match)< 1500 ){
                d3.select(this).classed('cir-box-selected', false);
            }
            if ( targetstar1 =="3" && parseInt(match)>= 1500 && parseInt(match)< 2000 ){
                d3.select(this).classed('cir-box-selected', false);
            }

            if ( targetstar1 =="4" && parseInt(match)>= 2000 && parseInt(match)< 2500 ){
                d3.select(this).classed('cir-box-selected', false);
            }
            if ( targetstar1 =="5" && parseInt(match)>= 2500 && parseInt(match)< 3000 ){
                d3.select(this).classed('cir-box-selected', false);
            }
            if ( targetstar1 =="6" && parseInt(match)>= 3000 && parseInt(match)< 3500 ){
                d3.select(this).classed('cir-box-selected', false);
            }
            if ( targetstar1 =="7" && parseInt(match)>= 3500 && parseInt(match)< 4000 ){
                d3.select(this).classed('cir-box-selected', false);
            }
            if ( targetstar1 =="8" && parseInt(match)>= 4000 && parseInt(match)< 4500 ){
                d3.select(this).classed('cir-box-selected', false);
            }
        })

    }


}