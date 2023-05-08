import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../assets/GlobalStyles";

const Home1 = () => {
//   const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.home}
      locations={[0, 1]}
      colors={["#2367b4", "#25c1f2"]}
    >
      <LinearGradient
        style={[styles.homeChild, styles.homeChildPosition]}
        locations={[0, 0.45, 1]}
        colors={["#45988e", "#90b789", "#f9e181"]}
      />
      <LinearGradient
        style={[styles.homeChild, styles.homeChildPosition]}
        locations={[0, 1]}
        colors={["#274d58", "#45988e"]}
      />
      {/* <Image
        style={[styles.maskGroupIcon, styles.homeChildPosition]}
        resizeMode="cover"
        source={require("../assets/mask-group.png")}
      /> */}
      {/* <Image
        style={[styles.homeIndicatorIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/home-indicator.png")}
      /> */}
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        {/* <Image
          style={[styles.frameIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/frame.png")}
        /> */}
        <View style={styles.statusBar1}>
          {/* <Image
            style={[styles.batteryIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          /> */}
          {/* <Image
            style={[styles.cellularConnectionIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/cellular-connection.png")}
          /> */}
          <View style={styles.timeStyle}>
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.placeholderParent, styles.statusBarPosition]}>
          <Text style={[styles.placeholder, styles.placeholderTypo5]}>
            Hello, Amir
          </Text>
          <Text style={[styles.text1, styles.text1Clr]}>👋</Text>
        </View>
        {/* <Image
          style={[styles.groupChild, styles.homeInnerLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-94.png")}
        /> */}
      </View>
      {/* <Image
        style={[styles.homeInner, styles.homeInnerLayout]}
        resizeMode="cover"
        source={require("../assets/group-512.png")}
      /> */}
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupChildShadowBox]} />
        <View style={[styles.placeholderWrapper, styles.placeholderPosition4]}>
          <Text style={[styles.placeholder1, styles.placeholderTypo4]}>
            PKR 60,000
          </Text>
        </View>
        <Text style={[styles.placeholder2, styles.placeholderTypo3]}>
          Bachat Committee
        </Text>
        <View style={styles.ellipseParent}>
          {/* <Image
            style={[styles.groupInner, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-941.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-95.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-96.png")}
          /> */}
          <Text style={[styles.placeholder3, styles.placeholderTypo2]}>+3</Text>
        </View>
        <Text style={[styles.placeholder4, styles.placeholderClr]}>
          Payout amount
        </Text>
        <View style={[styles.placeholderGroup, styles.groupPosition]}>
          <Text
            style={[styles.placeholder5, styles.placeholderClr]}
          >{`5 Nov, 22 - 5 April, 23 `}</Text>
          {/* <Image
            style={[
              styles.calendarMonthBlack24dp1Icon,
              styles.bell1ParentPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/calendar-month-black-24dp-1.png")}
          /> */}
        </View>
        <View
          style={[styles.placeholderContainer, styles.placeholderPosition2]}
        >
          <Text style={[styles.placeholder6, styles.placeholderClr]}>45%</Text>
          {/* <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-2534.png")}
          /> */}
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.groupChild7Position]} />
          {/* <Image
            style={[styles.businessCenterIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/business-center.png")}
          /> */}
          <Text style={[styles.placeholder7, styles.placeholderPosition1]}>
            Business
          </Text>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.groupChild2Layout]}>
        <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        <View style={[styles.placeholderFrame, styles.placeholderPosition4]}>
          <Text style={[styles.placeholder1, styles.placeholderTypo4]}>
            PKR 60,000
          </Text>
        </View>
        <Text style={[styles.placeholder9, styles.placeholderTypo3]}>
          Bachat Committee
        </Text>
        <View style={styles.ellipseParent}>
          {/* <Image
            style={[styles.groupInner, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-941.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-95.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-96.png")}
          /> */}
          <Text style={[styles.placeholder3, styles.placeholderTypo2]}>+3</Text>
        </View>
        <Text style={[styles.placeholder11, styles.groupViewPosition]}>
          Payout amount
        </Text>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <Text
            style={[styles.placeholder5, styles.placeholderClr]}
          >{`5 Nov, 22 - 5 April, 23 `}</Text>
          {/* <Image
            style={[
              styles.calendarMonthBlack24dp1Icon,
              styles.bell1ParentPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/calendar-month-black-24dp-1.png")}
          /> */}
        </View>
        <View style={[styles.placeholderParent1, styles.placeholderPosition2]}>
          <Text style={[styles.placeholder6, styles.placeholderClr]}>45%</Text>
          {/* <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-2534.png")}
          /> */}
        </View>
        <View style={[styles.rectangleParent1, styles.groupChild7Layout]}>
          <View style={[styles.groupChild7, styles.groupChild7Layout]} />
          {/* <Image
            style={[styles.publicIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/public.png")}
          /> */}
          <Text style={[styles.placeholder14, styles.placeholderPosition1]}>
            Public
          </Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupChild8Layout]}>
          <View style={[styles.groupChild8, styles.groupChild8Layout]} />
          <Text style={[styles.placeholder15, styles.placeholderPosition1]}>
            PKR 10,000
          </Text>
          <View style={[styles.placeholderParent2, styles.iconPosition]}>
            <Text style={[styles.placeholder16, styles.text1Clr]}>
              Installment Overdue
            </Text>
            <Text style={[styles.placeholder17, styles.placeholderTypo2]}>
              May 2023
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={[styles.rectangleParent3, styles.groupChild9Layout]}>
          <View style={[styles.groupChild9, styles.groupChildLayout]} />
          <Text style={[styles.placeholder18, styles.placeholderTypo]}>
            Ongoing
          </Text>
        </View>
        <View style={[styles.rectangleParent4, styles.groupChild10Layout]}>
          <View style={[styles.groupChild10, styles.groupChild10Layout]} />
          <Text style={[styles.placeholder19, styles.placeholderTypo]}>
            Requested
          </Text>
        </View>
        <View style={[styles.rectangleParent5, styles.groupChild11Layout]}>
          <View style={[styles.groupChild11, styles.groupChild11Layout]} />
          <Text style={[styles.placeholder20, styles.placeholderTypo]}>
            Completed
          </Text>
        </View>
      </View>
      {/* <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      > */}
        {/* <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/group-538.png")}
        /> */}
      {/* </Pressable> */}
      <View style={[styles.rectangleParent6, styles.groupChild12Layout]}>
        <View style={[styles.groupChild12, styles.groupChild12Layout]} />
        <View style={[styles.groupParent1, styles.parentLayout]}>
          <View style={[styles.bell1Parent, styles.bell1ParentPosition]}>
            {/* <Image
              style={styles.bell1Icon}
              resizeMode="cover"
              source={require("../assets/bell-1.png")}
            /> */}
            <Text style={[styles.placeholder21, styles.placeholderTypo2]}>
              Notification
            </Text>
          </View>
          <View style={[styles.home1Parent, styles.parentLayout]}>
            {/* <Image
              style={[styles.home1Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/home-1.png")}
            /> */}
            <Text style={[styles.placeholder22, styles.placeholderPosition]}>
              Home
            </Text>
          </View>
          <View
            style={[
              styles.receiptLongFill0Wght400GraParent,
              styles.parentLayout,
            ]}
          >
            {/* <Image
              style={[styles.receiptLongFill0Wght400GraIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/receipt-long-fill0-wght400-grad0-opsz48-1.png")}
            /> */}
            <Text style={[styles.placeholder23, styles.placeholderPosition]}>
              Transactions
            </Text>
          </View>
          <View style={[styles.user1Parent, styles.parentLayout]}>
            {/* <Image
              style={[styles.user1Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/user-1.png")}
            /> */}
            <Text style={[styles.placeholder23, styles.placeholderPosition]}>
              Profile
            </Text>
          </View>
        </View>
      </View>
      {/* <Image
        style={[styles.homeIndicatorIcon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/home-indicator.png")}
      /> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  homeChildPosition: {
    display: "none",
    height: 99,
    left: 16,
    position: "absolute",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  statusBarPosition: {
    right: "0%",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  placeholderTypo5: {
    fontFamily: FontFamily.montSemibold,
    fontWeight: "600",
  },
  text1Clr: {
    color: Color.black,
    position: "absolute",
  },
  homeInnerLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  groupItemLayout: {
    height: 144,
    width: 342,
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.white,
    top: 0,
  },
  placeholderPosition4: {
    left: "70.18%",
    right: "3.8%",
    width: "26.02%",
    position: "absolute",
  },
  placeholderTypo4: {
    fontFamily: FontFamily.montBold,
    fontWeight: "700",
  },
  placeholderTypo3: {
    fontSize: FontSize.size_lg,
    left: "4.68%",
    color: Color.gray_200,
    fontFamily: FontFamily.montBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    width: 28,
    height: 28,
    top: 0,
    position: "absolute",
  },
  placeholderTypo2: {
    fontFamily: FontFamily.montRegular,
    color: Color.gray_200,
    position: "absolute",
  },
  placeholderClr: {
    color: Color.gray_100,
    fontFamily: FontFamily.montRegular,
  },
  groupPosition: {
    right: "49.12%",
    width: "46.2%",
    left: "4.68%",
  },
  bell1ParentPosition: {
    top: 1,
    position: "absolute",
  },
  placeholderPosition2: {
    left: "59.36%",
    right: "27.78%",
    width: "12.87%",
    position: "absolute",
  },
  rectangleLayout: {
    width: 104,
    height: 32,
    position: "absolute",
  },
  groupChild7Position: {
    opacity: 0.3,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  iconPosition: {
    bottom: "25%",
    height: "50%",
    top: "25%",
    position: "absolute",
  },
  placeholderPosition1: {
    top: "21.88%",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  groupChild2Layout: {
    height: 189,
    width: 342,
    position: "absolute",
  },
  groupViewPosition: {
    top: "24.87%",
    position: "absolute",
  },
  groupChild7Layout: {
    width: 86,
    height: 32,
    position: "absolute",
  },
  groupChild8Layout: {
    width: 310,
    height: 32,
    position: "absolute",
  },
  groupChild9Layout: {
    width: 89,
    height: 36,
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_7xs,
    left: 0,
  },
  placeholderTypo: {
    top: "25%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montSemibold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  groupChild10Layout: {
    width: 109,
    height: 36,
    top: 0,
    position: "absolute",
  },
  groupChild11Layout: {
    width: 105,
    height: 36,
    top: 0,
    position: "absolute",
  },
  groupChild12Layout: {
    height: 94,
    width: 375,
    left: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 47,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  placeholderPosition: {
    top: "61.7%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montRegular,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  homeChild: {
    top: 101,
    borderRadius: Border.br_8xs,
    width: 344,
    backgroundColor: "transparent",
  },
  maskGroupIcon: {
    top: 104,
    width: 343,
  },
  homeIndicatorIcon: {
    height: "4.19%",
    top: "95.81%",
    left: "0%",
    bottom: "0%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  frameIcon: {
    opacity: 0,
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  batteryIcon: {
    height: "64.15%",
    width: "7.44%",
    top: "35.85%",
    left: "92.56%",
    bottom: "0%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
  },
  wifiIcon: {
    height: "62.25%",
    width: "4.69%",
    top: "35.86%",
    right: "8.97%",
    bottom: "1.9%",
    left: "86.35%",
    position: "absolute",
  },
  cellularConnectionIcon: {
    height: "60.38%",
    width: "5.2%",
    top: "37.74%",
    right: "15.18%",
    bottom: "1.88%",
    left: "79.62%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.helveticaRegular,
    textAlign: "left",
    color: Color.white,
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  timeStyle: {
    height: "96.23%",
    width: "9.17%",
    right: "90.83%",
    bottom: "3.77%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  statusBar1: {
    height: "40.15%",
    width: "87.24%",
    top: "22.73%",
    right: "3.73%",
    bottom: "37.12%",
    left: "9.03%",
    position: "absolute",
  },
  statusBar: {
    height: "5.42%",
    bottom: "94.58%",
    top: "0%",
    left: "0%",
    width: "100%",
  },
  placeholder: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  text1: {
    top: 2,
    left: 84,
    fontFamily: FontFamily.actorRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  placeholderParent: {
    height: "65.63%",
    width: "70.42%",
    top: "18.75%",
    bottom: "15.63%",
    left: "29.58%",
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  groupParent: {
    height: "3.94%",
    width: "37.87%",
    top: "6.65%",
    right: "57.87%",
    bottom: "89.41%",
    left: "4.27%",
    position: "absolute",
  },
  homeInner: {
    top: 54,
    left: 327,
  },
  groupItem: {
    elevation: 10,
    shadowRadius: 10,
    borderRadius: Border.br_9xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: 0,
    height: 144,
    width: 342,
    position: "absolute",
  },
  placeholder1: {
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  placeholderWrapper: {
    height: "14.58%",
    top: "13.89%",
    bottom: "71.53%",
  },
  placeholder2: {
    top: "13.19%",
  },
  groupInner: {
    left: 0,
  },
  ellipseIcon: {
    left: 19,
  },
  groupChild1: {
    left: 38,
  },
  placeholder3: {
    top: "21.43%",
    left: "68.18%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  ellipseParent: {
    top: 92,
    left: 263,
    width: 66,
    height: 28,
    position: "absolute",
  },
  placeholder4: {
    textAlign: "right",
    fontSize: FontSize.size_sm,
    left: "64.62%",
    color: Color.gray_100,
    top: "32.64%",
    position: "absolute",
  },
  placeholder5: {
    left: "12.66%",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  calendarMonthBlack24dp1Icon: {
    width: 16,
    height: 16,
    left: 0,
    overflow: "hidden",
  },
  placeholderGroup: {
    height: "12.5%",
    bottom: "54.86%",
    top: "32.64%",
    position: "absolute",
  },
  placeholder6: {
    top: "31.82%",
    left: "22.73%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  groupIcon: {
    width: 44,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  placeholderContainer: {
    height: "30.56%",
    top: "58.33%",
    bottom: "11.11%",
  },
  rectangleView: {
    backgroundColor: Color.goldenrod,
    width: 104,
    height: 32,
    position: "absolute",
  },
  businessCenterIcon: {
    width: "15.38%",
    right: "75%",
    left: "9.62%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  placeholder7: {
    left: "30.77%",
    color: Color.goldenrod,
    fontFamily: FontFamily.montSemibold,
    fontWeight: "600",
  },
  rectangleGroup: {
    top: 90,
    left: 16,
  },
  rectangleParent: {
    top: 164,
    left: 17,
  },
  groupChild2: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.white,
    top: 0,
    elevation: 10,
    shadowRadius: 10,
    borderRadius: Border.br_9xs,
    left: 0,
  },
  placeholderFrame: {
    height: "11.11%",
    top: "10.58%",
    bottom: "78.31%",
  },
  placeholder9: {
    top: "10.05%",
  },
  placeholder11: {
    textAlign: "right",
    color: Color.gray_100,
    fontFamily: FontFamily.montRegular,
    fontSize: FontSize.size_sm,
    left: "64.62%",
  },
  groupView: {
    height: "9.52%",
    bottom: "65.61%",
    right: "49.12%",
    width: "46.2%",
    left: "4.68%",
  },
  placeholderParent1: {
    height: "23.28%",
    top: "44.44%",
    bottom: "32.28%",
  },
  groupChild7: {
    backgroundColor: Color.cornflowerblue,
    opacity: 0.3,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  publicIcon: {
    width: "18.6%",
    right: "69.77%",
    left: "11.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  placeholder14: {
    left: "37.21%",
    color: Color.cornflowerblue,
    fontFamily: FontFamily.montSemibold,
    fontWeight: "600",
  },
  rectangleParent1: {
    top: 90,
    left: 16,
  },
  groupChild8: {
    borderRadius: 27,
    backgroundColor: "#ffdbdb",
    left: 0,
    top: 0,
  },
  placeholder15: {
    left: "72.58%",
    color: "#f64343",
    fontFamily: FontFamily.montBold,
    fontWeight: "700",
  },
  placeholder16: {
    textAlign: "right",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montSemibold,
    fontWeight: "600",
    top: "0%",
    left: "0%",
  },
  placeholder17: {
    left: "62.12%",
    opacity: 0.7,
    textAlign: "right",
    fontSize: FontSize.size_xs,
    top: "0%",
  },
  placeholderParent2: {
    width: "63.87%",
    right: "32.9%",
    left: "3.23%",
  },
  rectangleParent2: {
    top: 147,
    left: 16,
    width: 310,
  },
  rectangleContainer: {
    top: 324,
    left: 17,
  },
  groupChild9: {
    width: 89,
    height: 36,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
    borderRadius: Border.br_7xs,
  },
  placeholder18: {
    left: "15.73%",
    color: Color.gray_200,
  },
  rectangleParent3: {
    left: 0,
  },
  groupChild10: {
    borderRadius: Border.br_7xs,
    left: 0,
  },
  placeholder19: {
    left: "14.68%",
    color: Color.white,
  },
  rectangleParent4: {
    left: 89,
  },
  groupChild11: {
    borderRadius: Border.br_7xs,
    left: 0,
  },
  placeholder20: {
    left: "12.38%",
    color: Color.white,
  },
  rectangleParent5: {
    left: 198,
  },
  groupContainer: {
    top: 110,
    width: 303,
    height: 36,
    left: 17,
    position: "absolute",
  },
  wrapper: {
    left: 292,
    top: 642,
    width: 76,
    height: 76,
    position: "absolute",
  },
  groupChild12: {
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.white,
    top: 0,
    width: 375,
  },
  bell1Icon: {
    left: 31,
    width: 22,
    height: 22,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  placeholder21: {
    top: "60.87%",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: "0%",
  },
  bell1Parent: {
    left: 182,
    width: 84,
    height: 46,
  },
  home1Icon: {
    left: 9,
  },
  placeholder22: {
    color: Color.cornflowerblue,
  },
  home1Parent: {
    width: 42,
    left: 0,
    top: 0,
  },
  receiptLongFill0Wght400GraIcon: {
    left: 34,
  },
  placeholder23: {
    color: Color.gray_200,
  },
  receiptLongFill0Wght400GraParent: {
    left: 66,
    width: 92,
    top: 0,
  },
  user1Icon: {
    left: 11,
  },
  user1Parent: {
    left: 290,
    width: 45,
    top: 0,
  },
  groupParent1: {
    top: 18,
    left: 20,
    width: 335,
  },
  rectangleParent6: {
    top: 718,
  },
  home: {
    flex: 1,
    height: 812,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default Home1;
