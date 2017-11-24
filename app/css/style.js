var React = require('react-native');
var { StyleSheet } = React;
module.exports = StyleSheet.create({
    "commonText": {},
    "headline": {
        "fontWeight": "600",
        "alignSelf": "center",
        "fontSize": 30,
        "justifyContent": "center"
    },
    "copy": {
        "fontWeight": "400",
        "fontSize": 20,
        "alignSelf": "center",
        "textAlign": "center",
        "letterSpacing": -0.2
    },
    "linkText": {
        "fontWeight": "400",
        "fontSize": 18,
        "textDecorationLine": "underline"
    },
    "textInput": {
        "fontSize": 22,
        "fontWeight": "400",
        "borderRadius": 5,
        "paddingTop": 18,
        "paddingBottom": 18,
        "paddingRight": 0,
        "paddingLeft": 0
    },
    "userName": {
        "fontSize": 42,
        "fontWeight": "600",
        "color": "#4B4B4B",
        "marginBottom": 10
    },
    "userEmail": {
        "fontSize": 28,
        "fontWeight": "400",
        "color": "#747474",
        "marginBottom": 15
    },
    "userStat": {
        "fontSize": 28,
        "fontWeight": "400",
        "color": "#747474"
    },
    "noRankingsNoteText": {
        "fontSize": 28,
        "fontWeight": "600",
        "color": "#D2D2D2"
    },
    "tabHeaderLinkText": {
        "fontSize": 32,
        "color": "#4B4B4B",
        "fontWeight": "600"
    },
    "body": {
        "flex": 1,
        "backgroundColor": "#F2F2F2"
    },
    "appBody": {
        "flex": 1,
        "backgroundColor": "white"
    },
    "bodyBack": {
        "flex": 1
    },
    "inlineContain": {
        "flexDirection": "row",
        "flexWrap": "wrap"
    },
    "bodyHeader": {
        "height": 170,
        "flexDirection": "column",
        "justifyContent": "center"
    },
    "bodyHeaderContain": {
        "height": 170,
        "flexDirection": "column",
        "justifyContent": "center",
        "zIndex": 20
    },
    "bodyHeaderBlur": {
        "position": "absolute",
        "height": 170,
        "top": 0,
        "left": 0,
        "zIndex": 10
    },
    "bodyHeaderText": {
        "fontFamily": "Azo Sans",
        "fontWeight": "400",
        "textAlign": "center",
        "alignSelf": "center",
        "fontSize": 48,
        "color": "white",
        "backgroundColor": "transparent"
    },
    "leftCtrls": {
        "position": "absolute",
        "left": 50,
        "top": 50,
        "flexDirection": "row",
        "flexWrap": "wrap"
    },
    "rightCtrls": {
        "position": "absolute",
        "right": 50,
        "top": 50,
        "flexDirection": "row",
        "flexWrap": "wrap"
    },
    "headerLink": {
        "zIndex": 100,
        "justifyContent": "center",
        "borderRadius": 5,
        "paddingTop": 7,
        "paddingBottom": 7,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "headerLinkText": {
        "fontWeight": "400",
        "color": "white",
        "alignSelf": "center",
        "height": 45,
        "paddingTop": 8,
        "textAlign": "center",
        "fontSize": 24,
        "lineHeight": 28,
        "fontFamily": "Azo Sans"
    },
    "headerLinkIcon": {
        "marginRight": 7,
        "top": 4
    },
    "btn": {
        "justifyContent": "center",
        "borderRadius": 5,
        "paddingTop": 7,
        "paddingBottom": 7,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "loginBtn": {
        "justifyContent": "center",
        "borderRadius": 5,
        "paddingTop": 7,
        "paddingBottom": 7,
        "paddingRight": 15,
        "paddingLeft": 15,
        "backgroundColor": "#F26A7E",
        "width": 300,
        "alignSelf": "center"
    },
    "compareToggle": {
        "justifyContent": "center",
        "borderRadius": 10,
        "paddingTop": 7,
        "paddingBottom": 7,
        "paddingRight": 15,
        "paddingLeft": 15,
        "width": 250,
        "height": 80,
        "backgroundColor": "#D2D2D2"
    },
    "settingsLink": {
        "justifyContent": "center",
        "borderRadius": 5,
        "paddingTop": 12,
        "paddingBottom": 12,
        "paddingRight": 10,
        "paddingLeft": 10
    },
    "fullscreenBtn": {
        "justifyContent": "center",
        "borderRadius": 5,
        "paddingTop": 7,
        "paddingBottom": 7,
        "paddingRight": 15,
        "paddingLeft": 15,
        "backgroundColor": "#EBEBEB",
        "width": 300,
        "alignSelf": "center",
        "marginTop": 50
    },
    "btnText": {
        "alignSelf": "center",
        "height": 45,
        "paddingTop": 8,
        "textAlign": "center",
        "fontSize": 24,
        "lineHeight": 28,
        "fontFamily": "Azo Sans"
    },
    "loginBtnText": {
        "alignSelf": "center",
        "height": 40,
        "paddingTop": 4,
        "textAlign": "center",
        "fontSize": 22,
        "lineHeight": 28,
        "fontFamily": "Azo Sans",
        "color": "white"
    },
    "compareToggleText": {
        "alignSelf": "center",
        "height": 45,
        "paddingTop": 10,
        "textAlign": "center",
        "fontSize": 28,
        "lineHeight": 28,
        "fontFamily": "Azo Sans",
        "paddingBottom": 10,
        "paddingRight": 0,
        "paddingLeft": 0,
        "color": "#4B4B4B"
    },
    "settingsLinkText": {
        "alignSelf": "center",
        "height": 45,
        "paddingTop": 8,
        "textAlign": "center",
        "fontSize": 24,
        "lineHeight": 28,
        "fontFamily": "Azo Sans",
        "fontWeight": "400",
        "color": "#747474"
    },
    "fullscreenLinkText": {
        "alignSelf": "center",
        "height": 45,
        "paddingTop": 8,
        "textAlign": "center",
        "fontSize": 24,
        "lineHeight": 28,
        "fontFamily": "Azo Sans"
    },
    "centerLink": {
        "alignSelf": "center",
        "justifyContent": "center"
    },
    "pickerInput": {
        "paddingTop": 14,
        "fontWeight": "300",
        "textAlign": "center"
    },
    "borderBottom": {
        "borderBottomColor": "red",
        "borderBottomWidth": 1
    },
    "inlineInputs": {
        "flexDirection": "row",
        "flexGrow": 1
    },
    "icFont": {
        "fontFamily": "'Icon Font'",
        "fontStyle": "normal"
    },
    "dialogContain": {
        "position": "absolute",
        "bottom": -50,
        "backgroundColor": "transparent"
    },
    "dialogCtrls": {
        "backgroundColor": "#f7f7f7",
        "position": "absolute",
        "top": -280,
        "height": 50,
        "zIndex": 25
    },
    "generalCtrls": {
        "backgroundColor": "#f7f7f7",
        "height": 50,
        "zIndex": 25
    },
    "pickerDialog": {
        "position": "absolute",
        "left": 0,
        "right": 0,
        "bottom": 0,
        "zIndex": 10,
        "height": 230,
        "backgroundColor": "#CDD1D8"
    },
    "generalDialog": {
        "zIndex": 10,
        "height": 230,
        "backgroundColor": "#CDD1D8"
    },
    "pickerItem": {
        "backgroundColor": "white"
    },
    "doneLink": {
        "position": "absolute",
        "right": 5,
        "top": 3,
        "paddingTop": 10,
        "paddingBottom": 10,
        "paddingRight": 10,
        "paddingLeft": 10
    },
    "doneLabel": {
        "color": "#007aff",
        "fontSize": 18
    },
    "upArrow": {
        "height": 40,
        "width": 40,
        "position": "absolute",
        "top": 5,
        "left": 5,
        "paddingTop": 10,
        "paddingBottom": 10,
        "paddingRight": 10,
        "paddingLeft": 10
    },
    "downArrow": {
        "height": 40,
        "width": 40,
        "position": "absolute",
        "top": 5,
        "left": 40,
        "paddingTop": 10,
        "paddingBottom": 10,
        "paddingRight": 10,
        "paddingLeft": 10
    },
    "homeBody": {
        "flex": 1,
        "flexDirection": "row"
    },
    "bodyFullBackground": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 1
    },
    "bodyFullBlur": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 3
    },
    "bodyFullForm": {
        "flex": 1,
        "zIndex": 10,
        "justifyContent": "center",
        "flexDirection": "row"
    },
    "loginForm": {
        "flexDirection": "column",
        "justifyContent": "center",
        "width": 500,
        "backgroundColor": "white",
        "paddingTop": 35,
        "paddingBottom": 35,
        "paddingRight": 35,
        "paddingLeft": 35,
        "height": 470,
        "alignSelf": "center",
        "borderRadius": 10
    },
    "formLogo": {
        "width": 179,
        "height": 41,
        "marginBottom": 50,
        "alignSelf": "center"
    },
    "gridContain": {
        "flexDirection": "row",
        "flexWrap": "wrap",
        "paddingTop": 70
    },
    "largeColumn": {
        "height": 775,
        "zIndex": 10,
        "marginRight": 70
    },
    "smallColumn": {
        "height": 775
    },
    "tileBox": {
        "marginBottom": 75,
        "borderRadius": 10,
        "backgroundColor": "#F2F2F2",
        "position": "relative"
    },
    "tileGridThing": {
        "borderRadius": 10,
        "overflow": "hidden"
    },
    "gridTile": {
        "borderRadius": 10,
        "overflow": "hidden",
        "position": "relative"
    },
    "centerContent": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "flexDirection": "column",
        "justifyContent": "center",
        "bottom": 0
    },
    "loadingLabel": {
        "textAlign": "center",
        "fontFamily": "Azo Sans",
        "fontWeight": "600",
        "fontSize": 36,
        "color": "#D2D2D2"
    },
    "tileContain": {
        "flex": 1,
        "borderRadius": 10,
        "overflow": "hidden"
    },
    "tileThumbnail": {
        "backgroundColor": "transparent"
    },
    "thumbnailContain": {
        "borderBottomWidth": 1,
        "borderBottomColor": "#E3E4E5"
    },
    "tileInfo": {
        "backgroundColor": "white",
        "flex": 1
    },
    "tileTitle": {
        "fontFamily": "Azo Sans",
        "fontWeight": "600",
        "fontSize": 36,
        "color": "#4B4B4B",
        "textAlign": "left",
        "backgroundColor": "transparent",
        "top": 10,
        "left": 7
    },
    "smallTitle": {
        "fontSize": 32,
        "top": 15,
        "left": 35
    },
    "largeTitle": {
        "fontSize": 42,
        "left": 55,
        "top": 35
    },
    "noticeContain": {
        "flex": 1,
        "paddingTop": 75,
        "paddingBottom": 75,
        "paddingRight": 60,
        "paddingLeft": 60
    },
    "noticeText": {
        "fontFamily": "Azo Sans",
        "fontWeight": "400",
        "fontSize": 38,
        "color": "#747474",
        "textAlign": "center",
        "lineHeight": 58,
        "flex": 1
    },
    "contentView": {
        "flex": 1
    },
    "assetSlide": {
        "flex": 1,
        "zIndex": 100,
        "paddingTop": 70
    },
    "slideContain": {
        "paddingRight": 70
    },
    "compareCtrls": {
        "height": 200,
        "backgroundColor": "#D2D2D2",
        "left": 0
    },
    "toggleContain": {
        "height": 200,
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "backgroundColor": "#E3E3E3",
        "paddingTop": 60,
        "paddingBottom": 60,
        "paddingRight": 50,
        "paddingLeft": 50
    },
    "compareToggleIcon": {
        "top": 4
    },
    "compareSlide": {
        "flex": 1,
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 25,
        "paddingLeft": 0
    },
    "assetRankContainer": {
        "position": "absolute",
        "top": 22,
        "right": 25
    },
    "checkmarkContainer": {
        "width": 40,
        "height": 40,
        "backgroundColor": "#F26A7E",
        "borderRadius": 50,
        "position": "absolute",
        "top": 15,
        "right": 15,
        "paddingTop": 6,
        "paddingBottom": 6,
        "paddingRight": 6,
        "paddingLeft": 6,
        "borderColor": "white",
        "borderWidth": 2
    },
    "userInformation": {
        "paddingTop": 70,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50
    },
    "controls": {
        "paddingTop": 0,
        "paddingBottom": 0,
        "paddingRight": 40,
        "paddingLeft": 40
    },
    "settingsLinkIcon": {
        "top": -1,
        "marginRight": 4
    },
    "compareAssetsBody": {
        "flex": 1
    },
    "compareAssetsContain": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "flexDirection": "row",
        "flexWrap": "wrap",
        "justifyContent": "center"
    },
    "centerColumn": {
        "flexDirection": "column",
        "justifyContent": "center"
    },
    "compareTile": {
        "alignSelf": "center",
        "borderRadius": 5
    },
    "tallCompareContain": {
        "flexDirection": "row",
        "flexWrap": "wrap"
    },
    "emptySelectionNote": {
        "fontFamily": "Skolar Sans Latin",
        "textAlign": "center",
        "alignSelf": "center",
        "color": "#747474",
        "fontSize": 48,
        "width": 1000
    },
    "assetRankBody": {
        "marginTop": 0
    },
    "rankHeadline": {
        "fontFamily": "Skolar Sans Latin",
        "fontSize": 26,
        "color": "#747474",
        "marginBottom": 10
    },
    "averageRank": {
        "flexDirection": "row",
        "flexWrap": "wrap",
        "top": -5
    },
    "averageRankValue": {
        "fontFamily": "Skolar Sans Latin",
        "fontWeight": "600",
        "fontSize": 34,
        "color": "#F26A7E",
        "marginRight": 9
    },
    "rankValue": {
        "fontFamily": "Skolar Sans Latin",
        "fontWeight": "600",
        "fontSize": 34,
        "color": "#F26A7E",
        "marginRight": 9
    },
    "averageRankLabel": {
        "fontFamily": "Skolar Sans Latin",
        "fontSize": 28,
        "fontWeight": "300",
        "color": "#747474",
        "top": 4
    },
    "rankName": {
        "fontFamily": "Skolar Sans Latin",
        "fontSize": 28,
        "fontWeight": "300",
        "color": "#747474",
        "top": 4
    },
    "userRank": {
        "flexDirection": "row",
        "flexWrap": "wrap",
        "marginBottom": 5
    },
    "tabHeader": {
        "backgroundColor": "#E3E4E5",
        "paddingTop": 0,
        "paddingRight": 60,
        "paddingBottom": 0,
        "paddingLeft": 60
    },
    "tabHeaderContain": {
        "flexDirection": "row"
    },
    "tabHeaderLogo": {
        "top": 50
    },
    "tabHeaderNav": {
        "flexDirection": "row",
        "marginLeft": 70
    },
    "tabHeaderLink": {
        "paddingTop": 50,
        "paddingRight": 40,
        "paddingBottom": 50,
        "paddingLeft": 40,
        "borderBottomColor": "transparent",
        "borderBottomWidth": 7,
        "position": "relative"
    },
    "tabHeaderIcon": {
        "position": "absolute",
        "top": -12,
        "left": -20
    },
    "tabHeaderLinkHover": {
        "borderBottomColor": "#747474"
    },
    "activeLink": {
        "borderBottomColor": "#F26A7E"
    },
    "fullscreenBody": {
        "zIndex": 200,
        "backgroundColor": "#4B4B4B",
        "paddingTop": 50,
        "paddingBottom": 50,
        "paddingRight": 0,
        "paddingLeft": 0
    },
    "fullscreenAssetContainer": {
        "alignSelf": "center"
    }
});