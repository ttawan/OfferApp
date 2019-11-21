import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from 'styles/tabBarStyle';
import Theme from 'theme/core';

const activeTintColor = Theme.activeTintColor;
const inactiveTintColor = Theme.inactiveTintColor;

const TabBar = ({
  renderIcon,
  getLabelText,
  onTabPress,
  onTabLongPress,
  getAccessibilityLabel,
  navigation,
}) => {
  const {routes, index: activeRouteIndex} = navigation.state;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
          const labelStyle = {
            color: tintColor,
            fontWeight: isRouteActive
              ? Theme.fontWeightBold
              : Theme.fontWeightLight,
            ...styles.labelText,
          };

          return (
            <TouchableOpacity
              key={routeIndex}
              style={styles.tabButton}
              onPress={() => {
                onTabPress({route});
              }}
              onLongPress={() => {
                onTabLongPress({route});
              }}
              accessibilityLabel={getAccessibilityLabel({route})}>
              {renderIcon({route, focused: isRouteActive, tintColor})}
              <Text style={labelStyle}>{getLabelText({route})}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default TabBar;
