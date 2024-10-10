sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'pdfdisplay/test/integration/FirstJourney',
		'pdfdisplay/test/integration/pages/studList',
		'pdfdisplay/test/integration/pages/studObjectPage'
    ],
    function(JourneyRunner, opaJourney, studList, studObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('pdfdisplay') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThestudList: studList,
					onThestudObjectPage: studObjectPage
                }
            },
            opaJourney.run
        );
    }
);