(function (ns) {
    "use strict";

    var assert = assert || buster.assertions.assert;
    var refute = refute || buster.assertions.refute;

    buster.testCase('KURVE-test', {

        setUp: function () {

            $.ajax({
                async: false,
                url: buster.env.contextPath + "/kurvetest.sos",
                success:_.bind(function(data) {
                    this.sosidata = data;
                }, this)
            });
            this.parser = new ns.Parser();
        },

        "should be able to read id": function () {
            var sosidata = this.parser.parse(this.sosidata);
            var feature1 = sosidata.features.at(0);
            assert(feature1);
            assert.equals(feature1.id, 250);
        },


        "should be able to read attributes": function () {
            var sosidata = this.parser.parse(this.sosidata);
            var feature1 = sosidata.features.at(0);
            assert.equals(feature1.attributes["OBJTYPE"], "EiendomsGrense");


            assert.equals(feature1.attributes.kvalitet.maalemetode, 40);
            assert.equals(feature1.attributes.kvalitet.noyaktighet, 58);

        },

        "should be able to read geometry": function () {
            var sosidata = this.parser.parse(this.sosidata);
            var feature1 = sosidata.features.at(0);
            assert(feature1.geometry instanceof ns.LineString);
            var kurve = feature1.geometry.kurve;
            assert.equals(kurve.length, 10);
            assert.equals(kurve[0].x, 10023.45);
            assert.equals(kurve[0].y, 100234.56);
            assert.equals(kurve[1].x, 10023.45);
            assert.equals(kurve[1].y, 100234.60);
            assert.equals(kurve[2].x, 10023.46);
            assert.equals(kurve[2].y, 100234.70);
            assert.equals(kurve[3].x, 10023.47);
            assert.equals(kurve[3].y, 100234.80);
            assert.equals(kurve[4].x, 10023.50);
            assert.equals(kurve[4].y, 100234.90);
            assert.equals(kurve[5].x, 10023.66);
            assert.equals(kurve[5].y, 100235.00);
            assert.equals(kurve[6].x, 10023.45);
            assert.equals(kurve[6].y, 100235.12);
            assert.equals(kurve[7].x, 10023.70);
            assert.equals(kurve[7].y, 100235.65);
            assert.equals(kurve[8].x, 10023.56);
            assert.equals(kurve[8].y, 100234.60);
            assert.equals(kurve[9].x, 10023.50);
            assert.equals(kurve[9].y, 100235.00);
        },

        "should be able to read knutepunkter": function () {
            var sosidata = this.parser.parse(this.sosidata);
            var feature1 = sosidata.features.at(0);

            var knutepunkter = feature1.geometry.knutepunkter;
            assert.equals(knutepunkter.length, 1);

            assert.equals(knutepunkter[0].knutepunktkode, 1);
            assert.equals(knutepunkter[0].x, 10023.56);
            assert.equals(knutepunkter[0].y, 100234.60);
        }


    });


}(SOSI));