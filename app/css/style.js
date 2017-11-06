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
        "height": 52,
        "backgroundColor": "transparent",
        "fontSize": 18,
        "fontWeight": "400"
    },
    "body": {
        "flex": 1
    },
    "bodyBack": {
        "flex": 1
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
        "fontFamily": "American Typewriter",
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
        "fontFamily": "American Typewriter"
    },
    "headerLinkIcon": {
        "marginRight": 7,
        "top": 4
    },
    "inlineContain": {
        "flexDirection": "row",
        "flexWrap": "wrap"
    },
    "btn": {
        "justifyContent": "center",
        "borderRadius": 5,
        "paddingTop": 7,
        "paddingBottom": 7,
        "paddingRight": 15,
        "paddingLeft": 15
    },
    "btnText": {
        "alignSelf": "center",
        "height": 45,
        "paddingTop": 8,
        "textAlign": "center",
        "fontSize": 24,
        "lineHeight": 28,
        "fontFamily": "American Typewriter"
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
    "gridContain": {
        "flexDirection": "row",
        "flexWrap": "wrap",
        "paddingTop": 70
    },
    "tileBox": {
        "height": 325,
        "marginBottom": 75
    },
    "gridTile": {
        "height": 300,
        "backgroundColor": "#747474",
        "justifyContent": "center",
        "borderRadius": 5
    },
    "tileBackground": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "borderRadius": 5
    },
    "tileContain": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "borderRadius": 5
    },
    "tileName": {
        "fontFamily": "American Typewriter",
        "fontWeight": "400",
        "textAlign": "left",
        "fontSize": 32,
        "backgroundColor": "transparent",
        "color": "white",
        "top": -70,
        "left": 25,
        "zIndex": 30
    },
    "tileTitle": {
        "fontFamily": "American Typewriter",
        "fontWeight": "400",
        "fontSize": 32,
        "color": "white",
        "textAlign": "left",
        "backgroundColor": "transparent",
        "position": "absolute",
        "bottom": 25,
        "left": 25
    },
    "projectContain": {
        "flexDirection": "row",
        "flexWrap": "wrap",
        "paddingTop": 50
    },
    "viewMenu": {
        "marginRight": 50
    },
    "selectionStrip": {
        "paddingTop": 35,
        "paddingBottom": 35,
        "paddingRight": 35,
        "paddingLeft": 35
    },
    "selectionTile": {
        "height": 170,
        "justifyContent": "center",
        "marginRight": 35,
        "borderRadius": 5
    },
    "selectionContain": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "borderRadius": 5
    },
    "selectionBackground": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "borderRadius": 5
    },
    "slideTile": {
        "marginBottom": 50,
        "borderRadius": 5,
        "flexDirection": "row",
        "flexWrap": "wrap"
    },
    "slideContain": {
        "flexDirection": "row",
        "flexWrap": "wrap",
        "borderRadius": 5
    },
    "tileImage": {
        "justifyContent": "center",
        "borderRadius": 5
    },
    "imageContain": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "borderRadius": 5
    },
    "imageBackground": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "borderRadius": 5,
        "overflow": "visible"
    },
    "slideTileInfo": {
        "paddingTop": 25,
        "paddingBottom": 25,
        "paddingRight": 25,
        "paddingLeft": 25
    },
    "slideTileName": {
        "fontFamily": "American Typewriter",
        "textAlign": "left",
        "color": "#747474",
        "fontSize": 36
    },
    "slideTileDescription": {
        "fontFamily": "American Typewriter",
        "textAlign": "left",
        "color": "#747474",
        "fontSize": 24,
        "marginTop": 10
    },
    "checkmarkIcon": {
        "width": 20,
        "height": 20,
        "backgroundColor": "red"
    },
    "blur": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0
    },
    "compareAssetsContain": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "flexDirection": "row",
        "flexWrap": "wrap"
    },
    "tallCompareContain": {
        "flexDirection": "row",
        "flexWrap": "wrap"
    },
    "compareTile": {
        "borderRadius": 5
    },
    "centerContent": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "justifyContent": "center"
    },
    "emptySelectionNote": {
        "fontFamily": "American Typewriter",
        "textAlign": "center",
        "alignSelf": "center",
        "color": "#747474",
        "fontSize": 48,
        "width": 1000
    },
    "assetRankBody": {
        "marginTop": 100
    },
    "rankHeadline": {
        "fontFamily": "American Typewriter",
        "fontSize": 36,
        "color": "#747474",
        "marginBottom": 10
    },
    "averageRank": {
        "flexDirection": "row",
        "flexWrap": "wrap",
        "marginBottom": 10
    },
    "averageRankValue": {
        "fontFamily": "American Typewriter",
        "fontWeight": "600",
        "fontSize": 28,
        "color": "#F26A7E",
        "width": 25
    },
    "rankValue": {
        "fontFamily": "American Typewriter",
        "fontWeight": "600",
        "fontSize": 28,
        "color": "#F26A7E",
        "width": 25
    },
    "averageRankLabel": {
        "fontFamily": "American Typewriter",
        "fontSize": 24,
        "fontWeight": "300",
        "color": "#747474",
        "top": 5
    },
    "rankName": {
        "fontFamily": "American Typewriter",
        "fontSize": 24,
        "fontWeight": "300",
        "color": "#747474",
        "top": 5
    },
    "userRank": {
        "flexDirection": "row",
        "flexWrap": "wrap",
        "marginBottom": 5
    }
});