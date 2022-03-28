sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'de/jlabs/demo/travellist/test/integration/pages/MainListReport' ,
        'de/jlabs/demo/travellist/test/integration/pages/MainObjectPage',
        'de/jlabs/demo/travellist/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('de/jlabs/demo/travellist') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);